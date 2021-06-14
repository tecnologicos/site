<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name') }}</title>

    <link rel="shortcut icon" href="/favicon.png" />

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">

    <link rel="stylesheet" href="/css/bootstrap.min.css">
    <script src="/js/jquery.min.js"></script>
    <!--script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script-->

    <script type="text/javascript" src="{{ asset('js/browser-detect.js') }}"></script>

    @yield('innerhead')

    <link href="{{ asset('css/style.css')  }}" rel="stylesheet"/>

    @inject('resources', 'App\Services\ResourcesService')
</head>
<body>
    <div id="hiddens">
        <input type="hidden" id="hidden-app-name" name="app-name" value="{{ config('app.name') }}">
        <input type="hidden" id="hidden-permissao" name="permissao" value="{{ $resources->permissao }}">
        <input type="hidden" id="hidden-usuario-hack-admin" name="usuario-hack-admin" value="{{ $resources->usuarioHackAdmin }}">
        @guest
            <input type="hidden" id="hidden-is-logado" name="is-logado" value="0">
            <input type="hidden" id="hidden-username" name="username" value="">
        @else
            <input type="hidden" id="hidden-is-logado" name="is-logado" value="1">
            <input type="hidden" id="hidden-username" name="username" value="{{ Auth::user()->name }}">
        @endguest
    </div>

    @yield('content')

    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
        {{ csrf_field() }}
    </form>
    <footer class="footer">
        <div class="container">
            <p>© {{ config('app.name') }}</p>
        </div>
    </footer>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}"></script>
    @yield('postscripts')
</body>
</html>
