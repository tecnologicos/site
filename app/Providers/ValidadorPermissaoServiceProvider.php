<?php

namespace App\Providers;

use App\Models\User;
use Illuminate\Support\ServiceProvider;

class ValidadorPermissaoServiceProvider extends ServiceProvider
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
        $this->app['validator']->extend('permissao', function ($attribute, $value)  {
            switch ($value) {
                case User::PERMISSAO_ADMINISTRADOR:
                case User::PERMISSAO_USUARIO:
                case User::PERMISSAO_INATIVO:
                    return true;
            }
            return false;
        });
    }
}
