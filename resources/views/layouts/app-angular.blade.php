@extends('layouts.app')

@section('innerhead')
<base href="/">
<link id="themeStyleSheet" rel="stylesheet" type="text/css" href="css/themes/nova-dark/theme.css" />
@endsection

@section('content')
    @if(isset($param))
        <input type="hidden" id="uid" name="uid" value="{{$param}}">
    @endif
    <app-root><i style="text-align: center; display: block">Carregando...</i></app-root>
@endsection

@section('postscripts')
    <script type="text/javascript" src="{{ asset('js/angular/runtime.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/angular/polyfills.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/angular/styles.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/angular/vendor.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/angular/main.js') }}"></script>
@endsection

