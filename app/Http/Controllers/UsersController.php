<?php

namespace App\Http\Controllers;

use App\Models\User;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Validator;
use Symfony\Component\Console\Input\Input;

class UsersController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('permissao:'.User::PERMISSAO_ADMINISTRADOR, ['except' => ['usuario', 'update', 'atualizar', 'painel']]);
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view("layouts.app-angular");
    }

    public function painel()
    {
        return view("layouts.app-angular");
    }

    public function admCandidato(Request $request)
    {
        if ($request->input( 'id') && $this->usuarioLogado()->permissao != User::PERMISSAO_ADMINISTRADOR)
            abort(401, "Usuário não Autorizado!");
        return view("layouts.app-angular", ['param' => $request->input( 'id')]);
    }
    public function all()
    {
        return User::all();
    }
    public function simplificada()
    {
        $us =  User::select('id', 'name', 'login')
            ->where('id', '>', 1)
            ->orderBy('name')
            ->get();

        $simp = [];
        foreach ($us as $u) {
            $simp[] = (object) ['id' => $u->id, 'name' => $u->name, 'login' => $u->login];
        }
        return $simp;
    }

    public function usuario ($id = NULL) {
        $logado = $this->usuarioLogado();
        if ($id && $logado->id != $id) {
            if ($logado->permissao == User::PERMISSAO_ADMINISTRADOR)
                return User::find($id);
            abort (401, "Usuário não Autorizado!");
        }
        return $logado;
    }

    public function usuarioLogado() {
        return Auth::user();
    }

    public function isAdministrador() {
        return $this->usuarioLogado()->permissao == User::PERMISSAO_ADMINISTRADOR;
    }

    public function logarComo(Request $request, $uid)
    {
        $user = User::find($uid);
        if ($user!= null) {
            $this->setUsuarioAdminHackId($request, $this->usuarioLogado()->id);
            Auth::login(Auth::loginUsingId($user->id));
            if (Auth::user() != NULL)
                return redirect('/');
        }
        abort(401, "Usuário '$uid' não identificado!");
    }
    private function setUsuarioAdminHackId(Request $request, $id) {
        $request->session()->put('usuarioAdminHackId', $id);
        return $id;
    }
    public function getUsuarioAdminHackId(Request $request = NULL) {
        if ($request) {
            if ($request->session()->has('usuarioAdminHackId'))
                return $request->session()->get('usuarioAdminHackId');
        }
        else {
            if (Session::has('usuarioAdminHackId'))
                return Session::get('usuarioAdminHackId');
        }
        return 0;
    }
    public function resetUsuarioAdminHackId(Request $request) {
        if ($request->session()->has('usuarioAdminHackId'))
            $request->session()->forget('usuarioAdminHackId');
        return 1;
    }

    private function getValidationRules() {
        // read more on validation at http://laravel.com/docs/validation
        $rules = array(
            'name' => ['required', 'string', 'max:191'],
            'login' => ['required', 'string', 'max:31', 'unique:users', 'alpha_num'],
            'email' => ['required', 'string', 'email', 'max:191', 'unique:users'],
            'password' => ['required', 'string', 'min:8', 'confirmed']
        );
        return $rules;
    }

    private function getValidationRulesInfos($full) {
        $rules = array(
            'name' => ['required', 'string', 'max:191'],
            'email' => ['required', 'string', 'email', 'max:191'],
        );
        if ($full)
            $rules['login'] = ['required', 'string', 'max:31', 'alpha_num'];
        return $rules;
    }

    private function getValidationRulesPass() {
        $rules = array(
            'password' => ['required', 'string', 'min:8', 'confirmed']
        );
        return $rules;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), $this->getValidationRules());

        // process the login
        if ($validator->fails()) 
            abort(403, "Erro de Validação\n" . json_encode($validator->failed()));

        $usuario = new User();
        $logado = $this->usuarioLogado();
        if ($logado->permissao == User::PERMISSAO_ADMINISTRADOR) {
            $usuario->name = $request->input('name');
            $usuario->login = $request->input('login');
            $usuario->email = $request->input('email');
            $usuario->password = Hash::make($request->input('password'));
        }
        else if ($logado->id != $usuario->id) {
            abort(401, "Usuário sem Permissão para esta ação");
        }

        try{
            $usuario->save();
        }
        catch (Exception $e) {
            abort(500, $e->getMessage());
        }

        return $this->all();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\User  $usuario
     * @return \Illuminate\Http\Response
     */
    public function show(User $user) 
    {
        return $user;
    }

    public function atualizar(Request $request, User $user)
    {
        return $this->update($request, $user);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\User  $usuario
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        return $user;
    }


    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        $logado = $this->usuarioLogado();
        
        $validator = Validator::make($request->all(), $this->getValidationRulesInfos($logado->permissao == User::PERMISSAO_ADMINISTRADOR));
        // process the login
        if ($validator->fails()) 
            abort(403, "Erro de Validação\n" . json_encode($validator->failed()));

        if ($logado->permissao == User::PERMISSAO_ADMINISTRADOR || $logado->id == $user->id) {
            $user->name = $request->input('name');
            $user->email = $request->input('email');
            if ($logado->permissao == User::PERMISSAO_ADMINISTRADOR)
                $user->login = $request->input('login');
        }
        else {
            abort(401, "Usuário sem Permissão para esta ação");
        }
        try{
            $user->save();
        }
        catch (Exception $e) {
            abort(500, $e->getMessage());
        }

        return $user;
    }

    public function updateSenha(Request $request, $usuarioId) 
    {
        $validator = Validator::make($request->all(), $this->getValidationRulesPass());
        // process the login
        if ($validator->fails()) 
            abort(403, "Erro de Validação\n" . json_encode($validator->failed()));

        $usuario = User::findOrFail($usuarioId);
        if (!$usuario) 
            abort(400, "Usuário não encontrado");
        $logado = $this->usuarioLogado();
        if ($logado->permissao == User::PERMISSAO_ADMINISTRADOR || $logado->id == $usuarioId) {
            $usuario->password = Hash::make($request->input('password'));
            $usuario->save();
        }
        else {
            abort(401, "Usuário sem Permissão para esta ação");
        }
        try{
            $usuario->save();
        }
        catch (Exception $e) {
            abort(500, $e->getMessage());
        }

        return $usuario;
    }

    public function updatePermissao(Request $request, $usuarioId) {

        $usuario = User::findOrFail($usuarioId);
        if ($usuario) {
            $usuario->permissao = $request->input( 'permissao');
            $usuario->save();

            return $usuario;
        }
        else 
            abort(400, "Usuário não encontrado");
        
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Usuario  $usuario
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $usuario)
    {
        if ($usuario->delete()) {
            return new User();
        }
        else {
            abort(404, 'Usuário não encontrado');
        }
    }
}
