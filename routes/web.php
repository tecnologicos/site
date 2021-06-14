<?php

use App\Http\Controllers\HomeController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get(     '/',                             [HomeController::class,     'index'                         ]);
Route::get(     '/home',                         [HomeController::class,     'index'                         ])->name('home');

Route::get(     '/users/lista',                  [UsersController::class,    'all'                           ]);
Route::get(     '/users/simplificada',           [UsersController::class,    'simplificada'                  ]);
Route::put(     '/users/permissao/{usuarioId}',  [UsersController::class,    "updatePermissao"               ]);
Route::put(     '/users/password/{usuarioId}',   [UsersController::class,    "updateSenha"                   ]);
Route::get(     '/users/logarcomo/{uid}',        [UsersController::class,    "logarComo"                     ]);
Route::post(    '/users/{usuario}',              [UsersController::class,    "atualizar"                     ]);
Route::resource('users',                          UsersController::class                                      );
Route::get(     '/user/{id?}',                   [UsersController::class,    'usuario'                       ]);
Route::get(     '/logado',                       [UsersController::class,    'usuario'                       ]);
Route::get(     '/painel',                       [UsersController::class,    'painel'                        ]);


/*
Route::get('/css/{param1}', function ($param1) {
    $str = preg_replace('/\.[a-z0-9]*\./', '.', $param1);
    return Response::download("js/angular/".$str);
})->where('param1', '(primeicons.+|color.+|hue.+)');
Route::get('/{param2}', function ($param2) {
    return Response::download("js/angular/".$param2);
})->where('param2', '(open-sans-v15-latin.+|primeicons.+)');
*/
Auth::routes();

