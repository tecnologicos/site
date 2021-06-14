<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\ServiceProvider;

class ValidadorLoginServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot() {
        $this->app['validator']->extend('usuario', function ($attribute, $value)  {
            $usuarios = User::where('email', $value)->get();
            foreach ($usuarios as $usuario) {
                if ($usuario->permissao != User::PERMISSAO_INATIVO)
                    return true;
            }
            return false;
        });
    }
}
