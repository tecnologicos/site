(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/abstract-component.ts":
/*!***************************************!*\
  !*** ./src/app/abstract-component.ts ***!
  \***************************************/
/*! exports provided: AbstractComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractComponent", function() { return AbstractComponent; });
var AbstractComponent = /** @class */ (function () {
    function AbstractComponent() {
        this.editavel = false;
        this.LOADING = 0;
        this.COMPLETE = 1;
        this.ERROR = 2;
        this.status = this.LOADING;
        this.aviso = "";
    }
    AbstractComponent.prototype.erroHttp = function (response) {
        var mensagem;
        if (response.status == 0) {
            mensagem = "Falha na Conexão!";
        }
        else {
            try {
                mensagem = response.json().message;
            }
            catch (e) {
                if (response.message)
                    mensagem = response.message;
                else
                    mensagem = response;
            }
        }
        return mensagem;
    };
    return AbstractComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\n\t\t\t<!-- Collapsed Hamburger -->\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#app-navbar-collapse\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"sr-only\">Toggle Navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\n\t\t\t<!-- Branding Image -->\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/\" style=\"padding: 0px 15px;\">\n\t\t\t\t<img src=\"img/logo.png\" alt=\"Logo\" style=\"width: 75px;\">\n\t\t\t</a>\n\t\t\t<a class=\"navbar-brand\" routerLink=\"/\">\n\t\t\t\t{{ appName }}\n\t\t\t</a>\n\t\t</div>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"app-navbar-collapse\">\n\t\t\t<!-- Left Side Of Navbar -->\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<ng-container *ngIf=\"permissao && permissao != 'INATIVO'\">\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\t\t\t\tLinks\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"permissao == 'USUARIO' || permissao == 'ADMINISTRADOR'\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/\">\n\t\t\t\t\t\t\t\t\t\tPara User\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"permissao == 'ADMINISTRADOR'\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a routerLink=\"/\">\n\t\t\t\t\t\t\t\t\t\tPara Admin\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf=\"permissao && permissao == 'ADMINISTRADOR'\">\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\t\t\t\tAdministração \n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a routerLink=\"/users\">\n\t\t\t\t\t\t\t\t\tUsuários\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t\t&nbsp;\n\t\t\t</ul>\n\n\t\t\t<!-- Right Side Of Navbar -->\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<!-- Authentication Links -->\n\t\t\t\t<ng-container *ngIf=\"!isLogado\">\n\t\t\t\t\t<li><a href=\"/login\">Login</a></li>\n\t\t\t\t\t<li><a href=\"/register\">Cadastrar</a></li>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf=\"isLogado\">\n\t\t\t\t\t<li *ngIf=\"usuarioHackAdmin\"><a href=\"#\" style=\"background-color: red; color: white;\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\t\t\tAdministrador Logado como: </a></li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"#\" [ngClass]=\"{vermelho: usuarioHackAdmin}\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\t\t\t\t{{ username }} \n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n                            <li>\n                                <a routerLink=\"/painel\">\n                                    Painel do Usuário\n                                </a>\n                            </li>\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/logout\"\n\t\t\t\t\t\t\t\t\tonclick=\"event.preventDefault();\n\t\t\t\t\t\t\t\t\t\t\t\tdocument.getElementById('logout-form').submit();\">\n\t\t\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n\n\n<div id=\"app\">\n    \n<div class=\"container\">\n    <router-outlet></router-outlet>\n</div>\n\t\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'tech-front';
    }
    AppComponent.prototype.ngOnInit = function () {
        var divHiddens = document.getElementById('hiddens');
        var hAppName = document.getElementById('hidden-app-name');
        var hPermissao = document.getElementById('hidden-permissao');
        var hUsuarioHackAdmin = document.getElementById('hidden-usuario-hack-admin');
        var hUsername = document.getElementById('hidden-username');
        var hIsLogado = document.getElementById('hidden-is-logado');
        this.appName = hAppName ? hAppName.value : null;
        this.permissao = hPermissao ? hPermissao.value : null;
        this.usuarioHackAdmin = hUsuarioHackAdmin ? hUsuarioHackAdmin.value == "1" : false;
        this.username = hUsername ? hUsername.value : null;
        this.isLogado = hIsLogado ? hIsLogado.value == "1" : false;
        //divHiddens.remove();
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users/users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _users_filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./users/filtro-usuario.pipe */ "./src/app/users/filtro-usuario.pipe.ts");
/* harmony import */ var _redimensionar_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./redimensionar.directive */ "./src/app/redimensionar.directive.ts");
/* harmony import */ var _formatador_data_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./formatador-data.pipe */ "./src/app/formatador-data.pipe.ts");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _painel_painel_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./painel/painel.component */ "./src/app/painel/painel.component.ts");
/* harmony import */ var _zeros_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./zeros.pipe */ "./src/app/zeros.pipe.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");



















var appRoutes = [
    { path: 'painel', component: _painel_painel_component__WEBPACK_IMPORTED_MODULE_16__["PainelComponent"] },
    { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"] },
    /*{ path: '',
      redirectTo: '/',
      pathMatch: 'full'
    },*/
    { path: '**', component: _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"],
                _users_filtro_usuario_pipe__WEBPACK_IMPORTED_MODULE_12__["FiltroUsuarioPipe"],
                _redimensionar_directive__WEBPACK_IMPORTED_MODULE_13__["RedimensionarDirective"],
                _formatador_data_pipe__WEBPACK_IMPORTED_MODULE_14__["FormatadorDataPipe"],
                _painel_painel_component__WEBPACK_IMPORTED_MODULE_16__["PainelComponent"],
                _zeros_pipe__WEBPACK_IMPORTED_MODULE_17__["ZerosPipe"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_18__["MenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes
                //{ enableTracing: true } // <-- debugging purposes only
                ),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            ],
            providers: [
                _dados_service__WEBPACK_IMPORTED_MODULE_15__["DadosService"],
                _users_users_service__WEBPACK_IMPORTED_MODULE_11__["UsersService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/array-indexador.ts":
/*!************************************!*\
  !*** ./src/app/array-indexador.ts ***!
  \************************************/
/*! exports provided: ArrayIndexador */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArrayIndexador", function() { return ArrayIndexador; });
var ArrayIndexador = /** @class */ (function () {
    function ArrayIndexador(lista, chavePersonalizada) {
        this.listaOrigin = [];
        this.indices = {};
        this.chave = "id";
        if (chavePersonalizada)
            this.chave = chavePersonalizada;
        for (var i = 0; i < lista.length; i++) {
            this.indices[lista[i][this.chave]] = i;
        }
        this.listaOrigin = lista;
    }
    ArrayIndexador.prototype.get = function (chave) {
        var ret = this.listaOrigin[this.indices[chave]];
        return ret ? ret : null;
    };
    ArrayIndexador.prototype.append = function (lista) {
        this.listaOrigin = this.listaOrigin.slice(0);
        this.listaOrigin = this.listaOrigin.concat(lista);
        for (var i = this.listaOrigin.length - lista.length; i < this.listaOrigin.length; i++) {
            this.indices[this.listaOrigin[i][this.chave]] = i;
        }
    };
    ArrayIndexador.prototype.add = function (elem) {
        this.indices[elem[this.chave]] = this.listaOrigin.length;
        this.listaOrigin.push(elem);
    };
    /*update(elem) {
        this.listaOrigin[this.indices[elem[this.chave]]];
    }*/
    ArrayIndexador.prototype.remove = function (chave) {
        this.listaOrigin.splice(this.indices[chave], 1);
        this.indices = {};
        for (var i = 0; i < this.listaOrigin.length; i++) {
            this.indices[this.listaOrigin[i][this.chave]] = i;
        }
    };
    return ArrayIndexador;
}());



/***/ }),

/***/ "./src/app/dados.service.ts":
/*!**********************************!*\
  !*** ./src/app/dados.service.ts ***!
  \**********************************/
/*! exports provided: DadosService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DadosService", function() { return DadosService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");



var DadosService = /** @class */ (function () {
    function DadosService(http) {
        this.http = http;
        this.componentesHeight = [];
        this.componentesWidth = [];
        this.componentesPersonalizados = [];
        var _this = this;
        window.onresize = function () {
            _this.resizeFull();
        };
        jQuery(document).ready(function () {
            _this.resizeFull();
        });
    }
    DadosService.prototype.resizeTabelaLinhaFullHeight = function (redimensionavel) {
        var width = jQuery(window).height() - redimensionavel.base;
        if (redimensionavel.min != null && width < redimensionavel.min)
            width = redimensionavel.min;
        if (redimensionavel.max != null && width > redimensionavel.max)
            width = redimensionavel.max;
        if (jQuery(redimensionavel.elemento).hasClass('modal-body'))
            jQuery(redimensionavel.elemento).css('max-height', width);
        else
            jQuery(redimensionavel.elemento).css('height', width);
    };
    DadosService.prototype.resizeTabelaLinhaFullWidth = function (redimensionavel) {
        if (jQuery(window).width() >= 1200) {
            jQuery(redimensionavel.elemento).css('width', 780 - redimensionavel.base);
        }
        else if (jQuery(window).width() > 990) {
            jQuery(redimensionavel.elemento).css('width', 646 - redimensionavel.base);
        }
        else if (jQuery(window).width() > 748) {
            jQuery(redimensionavel.elemento).css('width', 750 - redimensionavel.base);
        }
        else
            jQuery(redimensionavel.elemento).css('width', jQuery(window).width() - redimensionavel.base);
    };
    DadosService.prototype.resizePersonalizado = function (redimensionavel) {
        var width = jQuery(window).height() - redimensionavel.base;
        if (redimensionavel.min != null && width < redimensionavel.min)
            width = redimensionavel.min;
        if (redimensionavel.max != null && width > redimensionavel.max)
            width = redimensionavel.max;
        redimensionavel.personalizado.parametros.tamanho = width;
        redimensionavel.executarPersonalizado();
    };
    DadosService.prototype.resizeFull = function () {
        var i;
        for (i = 0; i < this.componentesHeight.length; i++) {
            this.resizeTabelaLinhaFullHeight(this.componentesHeight[i]);
        }
        for (i = 0; i < this.componentesWidth.length; i++) {
            this.resizeTabelaLinhaFullWidth(this.componentesWidth[i]);
        }
        for (i = 0; i < this.componentesPersonalizados.length; i++) {
            this.resizePersonalizado(this.componentesPersonalizados[i]);
        }
    };
    DadosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], DadosService);
    return DadosService;
}());



/***/ }),

/***/ "./src/app/formatador-data.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/formatador-data.pipe.ts ***!
  \*****************************************/
/*! exports provided: FormatadorDataPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatadorDataPipe", function() { return FormatadorDataPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FormatadorDataPipe = /** @class */ (function () {
    function FormatadorDataPipe() {
    }
    FormatadorDataPipe.prototype.transform = function (value, time) {
        var date = new Date(value);
        return date.toLocaleDateString() + (time ? " " + date.toLocaleTimeString().substring(0, 5) : '');
    };
    FormatadorDataPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'formatadorData'
        })
    ], FormatadorDataPipe);
    return FormatadorDataPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/home.component.less":
/*!******************************************!*\
  !*** ./src/app/home/home.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.less */ "./src/app/home/home.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-static-top\">\n\t<div class=\"container\">\n\t\t<div class=\"navbar-header\">\n\n\t\t\t<!-- Collapsed Hamburger -->\n\t\t\t<button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#app-navbar-collapse\" aria-expanded=\"false\">\n\t\t\t\t<span class=\"sr-only\">Toggle Navigation</span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t</button>\n\n\t\t\t<!-- Branding Image -->\n\t\t\t<a class=\"navbar-brand\" href=\"/\" style=\"padding: 0px 15px;\">\n\t\t\t\t<img src=\"img/logo.png\" alt=\"Logo\" style=\"width: 75px;\">\n\t\t\t</a>\n\t\t\t<a class=\"navbar-brand\" href=\"/\">\n\t\t\t\t{{ appName }}\n\t\t\t</a>\n\t\t</div>\n\n\t\t<div class=\"collapse navbar-collapse\" id=\"app-navbar-collapse\">\n\t\t\t<!-- Left Side Of Navbar -->\n\t\t\t<ul class=\"nav navbar-nav\">\n\t\t\t\t<ng-container *ngIf=\"permissao && permissao != 'INATIVO'\">\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\t\t\t\tLinks\n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<ng-container *ngIf=\"permissao == 'USUARIO' || permissao == 'ADMINISTRADOR'\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"/\">\n\t\t\t\t\t\t\t\t\t\tPara User\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t\t<ng-container *ngIf=\"permissao == 'ADMINISTRADOR'\">\n\t\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t\t<a href=\"/\">\n\t\t\t\t\t\t\t\t\t\tPara Admin\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t</li>\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t</ng-container>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf=\"permissao && permissao == 'ADMINISTRADOR'\">\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\t\t\t\tAdministração \n\t\t\t\t\t\t</a>\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/users\">\n\t\t\t\t\t\t\t\t\tUsuários\n\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t\t&nbsp;\n\t\t\t</ul>\n\n\t\t\t<!-- Right Side Of Navbar -->\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\n\t\t\t\t<!-- Authentication Links -->\n\t\t\t\t<ng-container *ngIf=\"!isLogado\">\n\t\t\t\t\t<li><a href=\"/login\">Login</a></li>\n\t\t\t\t\t<li><a href=\"/register\">Cadastrar</a></li>\n\t\t\t\t</ng-container>\n\t\t\t\t<ng-container *ngIf=\"isLogado\">\n\t\t\t\t\t<li *ngIf=\"usuarioHackAdmin\"><a href=\"#\" style=\"background-color: red; color: white;\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\t\t\tAdministrador Logado como: </a></li>\n\t\t\t\t\t<li class=\"dropdown\">\n\t\t\t\t\t\t<a href=\"#\" [ngClass]=\"{vermelho: usuarioHackAdmin}\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-expanded=\"false\" aria-haspopup=\"true\" v-pre>\n\t\t\t\t\t\t\t{{ username }} \n\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\n\t\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t\t<a href=\"/logout\"\n\t\t\t\t\t\t\t\t\tonclick=\"event.preventDefault();\n\t\t\t\t\t\t\t\t\t\t\t\tdocument.getElementById('logout-form').submit();\">\n\t\t\t\t\t\t\t\t\tLogout\n\t\t\t\t\t\t\t\t</a>\n\n\t\t\t\t\t\t\t\t<form id=\"logout-form\" action=\"/logout\" method=\"POST\" style=\"display: none;\">\n\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</li>\n\t\t\t\t</ng-container>\n\t\t\t</ul>\n\t\t</div>\n\t</div>\n</nav>\n\n\n<div id=\"app\">\n\n\t\n\n</div>"

/***/ }),

/***/ "./src/app/menu/menu.component.less":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.less ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUvbWVudS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
        var divHiddens = document.getElementById('hiddens');
        var hAppName = document.getElementById('hidden-app-name');
        var hPermissao = document.getElementById('hidden-permissao');
        var hUsuarioHackAdmin = document.getElementById('hidden-usuario-hack-admin');
        var hUsername = document.getElementById('hidden-username');
        var hIsLogado = document.getElementById('hidden-is-logado');
        this.appName = hAppName ? hAppName.value : null;
        this.permissao = hPermissao ? hPermissao.value : null;
        this.usuarioHackAdmin = hUsuarioHackAdmin ? hUsuarioHackAdmin.value == "1" : false;
        this.username = hUsername ? hUsername.value : null;
        this.isLogado = hIsLogado ? hIsLogado.value == "1" : false;
        divHiddens.remove();
    };
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.less */ "./src/app/menu/menu.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/painel/painel.component.html":
/*!**********************************************!*\
  !*** ./src/app/painel/painel.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-6 col-md-offset-3\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Painel do Usuário</div>\n\t\t\t<div style=\"margin: 15px;\">\t\n\t\t\t\t<div class=\"alert alert-info  alert-dismissible show\" [ngClass]=\"{'alert-info': !erroAviso, 'alert-danger': erroAviso}\" *ngIf=\"aviso\">\n\t\t\t\t\t<strong *ngIf=\"!erroAviso\">Informação!</strong><strong *ngIf=\"erroAviso\">Falha!</strong> {{aviso}}\n\t\t\t\t\t<button type=\"button\" class=\"close\" aria-label=\"Close\" style=\"top: -9px;\" (click)=\"aviso = '';\">\n\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t</button>\n\t\t\t\t</div>\n\t\t\t\t<label for=\"login-edit\">Login</label>\n\t\t\t\t<input id=\"login-edit\" type=\"text\" [value]=\"usuario.login\" class=\"form-control\" name=\"login-edit\" autocomplete=\"login\" size=\"60\" disabled>\n\t\t\t\t<p></p>\t\n\n\t\t\t\t<label for=\"name-edit\">Nome</label>\n\t\t\t\t<input id=\"name-edit\" type=\"text\" [(ngModel)]=\"usuario.name\" class=\"form-control\" name=\"name-edit\" autocomplete=\"name\" size=\"60\" [disabled]=\"!editandoFlag || !editavel\">\n\t\t\t\t<p></p>\t\t\n\n\t\t\t\t<label for=\"email-edit\">Endereço de E-Mail</label>\n\t\t\t\t<input id=\"email-edit\" type=\"email\" [(ngModel)]=\"usuario.email\" class=\"form-control\" name=\"email-edit\" autocomplete=\"email\" size=\"60\" [disabled]=\"!editandoFlag || !editavel\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"panel-footer\">\n\t\t\t\t<button *ngIf=\"!editandoFlag\" type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"editandoFlag = true;\"  [disabled]=\"!editavel\">Editar</button>\n\t\t\t\t<button *ngIf=\"editandoFlag\" type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"editarUsuario()\" [disabled]=\"!editavel\">Confirmar</button>\n\t\t\t\t<button *ngIf=\"editandoFlag\" type=\"button\" class=\"btn btn-secondary botao-barra\" (click)=\"editandoFlag = false;\"  [disabled]=\"!editavel\">Cancelar</button>\n\t\t\t\t<button *ngIf=\"!editandoFlag\" type=\"button\" class=\"btn btn-warning\" [disabled]=\"!editavel\" style=\"float: right;\" data-toggle=\"modal\" data-target=\"#dialogResetSenha\">Redefinir Senha</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogResetSenha\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogResetSenhaTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" redimensionar=\"60\" style=\"overflow: hidden; width: 330px;\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Redefinir Senha</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" >\n\t\t\t\t<label for=\"password-edit\">Senha</label>\n\t\t\t\t<input id=\"password-edit\" type=\"password\" [(ngModel)]=\"usuario.password\" class=\"form-control\"\n\t\t\t\t\tname=\"password\" autocomplete=\"nova-senha\">\n\n\t\t\t\t<label for=\"password-confirm-edit\">Confirmar Senha</label>\n\t\t\t\t<input id=\"password-confirm-edit\" type=\"password\" [(ngModel)]=\"usuario.password_confirmation\"\n\t\t\t\t\tclass=\"form-control\" name=\"password_confirmation\" autocomplete=\"nova-senha\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"redefinirSenha()\"\n\t\t\t\t\t[disabled]=\"!editavel\">Confirmar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/painel/painel.component.less":
/*!**********************************************!*\
  !*** ./src/app/painel/painel.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhaW5lbC9wYWluZWwuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/painel/painel.component.ts":
/*!********************************************!*\
  !*** ./src/app/painel/painel.component.ts ***!
  \********************************************/
/*! exports provided: PainelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PainelComponent", function() { return PainelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");
/* harmony import */ var _users_user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users/user */ "./src/app/users/user.ts");
/* harmony import */ var _users_users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../users/users.service */ "./src/app/users/users.service.ts");





var PainelComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](PainelComponent, _super);
    function PainelComponent(usuarioService) {
        var _this = _super.call(this) || this;
        _this.usuarioService = usuarioService;
        _this.usuario = _users_user__WEBPACK_IMPORTED_MODULE_3__["User"].generate();
        _this.editandoFlag = false;
        return _this;
    }
    PainelComponent.prototype.editarUsuario = function () {
        var _this = this;
        this.editavel = false;
        this.usuarioService.editarUsuario(this.usuario)
            .then(function (user) {
            _this.editandoFlag = false;
            _this.editavel = true;
            _this.usuario = user;
            _this.aviso = "Usuário Atualizado!";
            _this.erroAviso = false;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    PainelComponent.prototype.redefinirSenha = function () {
        var _this = this;
        if (this.usuario.password == null || this.usuario.password_confirmation == null) {
            alert("Uma senha deve ser informada!");
            return;
        }
        if (this.usuario.password != this.usuario.password_confirmation) {
            alert("Senhas não Conferem!");
            return;
        }
        this.editavel = false;
        this.usuarioService.redefinirSenha(this.usuario)
            .then(function (response) {
            jQuery('#dialogResetSenha').modal('hide');
            _this.editavel = true;
            alert("Senha Alterada!");
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    PainelComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.usuarioService.usuarioLogado()
            .then(function (user) {
            _this.usuario = user;
            _this.status = _this.COMPLETE;
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            _this.aviso = _this.erroHttp(response);
            alert(_this.erroHttp(response));
            _this.erroAviso = true;
            console.log(response);
        });
    };
    PainelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-painel',
            template: __webpack_require__(/*! ./painel.component.html */ "./src/app/painel/painel.component.html"),
            styles: [__webpack_require__(/*! ./painel.component.less */ "./src/app/painel/painel.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], PainelComponent);
    return PainelComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_2__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/redimensionar.directive.ts":
/*!********************************************!*\
  !*** ./src/app/redimensionar.directive.ts ***!
  \********************************************/
/*! exports provided: RedimensionarDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedimensionarDirective", function() { return RedimensionarDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dados_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dados.service */ "./src/app/dados.service.ts");
/* harmony import */ var _redimensionavel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./redimensionavel */ "./src/app/redimensionavel.ts");




var RedimensionarDirective = /** @class */ (function () {
    function RedimensionarDirective(el, dadosService) {
        this.el = el;
        this.dadosService = dadosService;
        this.redimensionavel = null;
        jQuery(this.el.nativeElement).addClass('linha-full-height');
    }
    Object.defineProperty(RedimensionarDirective.prototype, "redimensionar", {
        get: function () {
            return this._redimensionar;
        },
        set: function (value) {
            this._redimensionar = value;
            this.processa();
        },
        enumerable: true,
        configurable: true
    });
    RedimensionarDirective.prototype.processa = function () {
        if (this.redimensionavel == null) {
            this.redimensionavel = new _redimensionavel__WEBPACK_IMPORTED_MODULE_3__["Redimensionavel"](this.el.nativeElement, this.redimensionar);
            this.dadosService.componentesHeight.push(this.redimensionavel);
        }
        else
            this.redimensionavel.base = this.redimensionar;
        this.dadosService.resizeFull();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Number])
    ], RedimensionarDirective.prototype, "redimensionar", null);
    RedimensionarDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[redimensionar]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _dados_service__WEBPACK_IMPORTED_MODULE_2__["DadosService"]])
    ], RedimensionarDirective);
    return RedimensionarDirective;
}());



/***/ }),

/***/ "./src/app/redimensionavel.ts":
/*!************************************!*\
  !*** ./src/app/redimensionavel.ts ***!
  \************************************/
/*! exports provided: Redimensionavel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Redimensionavel", function() { return Redimensionavel; });
var Redimensionavel = /** @class */ (function () {
    function Redimensionavel(elemento, base, min, max, personalizado) {
        this.elemento = elemento;
        this.base = parseInt(base);
        this.min = min != null ? parseInt(min) : null;
        this.max = max != null ? parseInt(max) : null;
        this.personalizado = personalizado;
    }
    Redimensionavel.prototype.executarPersonalizado = function () {
        this.personalizado.funcao(this.personalizado.parametros);
    };
    return Redimensionavel;
}());



/***/ }),

/***/ "./src/app/users/filtro-usuario.pipe.ts":
/*!**********************************************!*\
  !*** ./src/app/users/filtro-usuario.pipe.ts ***!
  \**********************************************/
/*! exports provided: FiltroUsuarioPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltroUsuarioPipe", function() { return FiltroUsuarioPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FiltroUsuarioPipe = /** @class */ (function () {
    function FiltroUsuarioPipe() {
    }
    FiltroUsuarioPipe.prototype.transform = function (value, criteria) {
        if (criteria == "")
            return value;
        var usuarios = [];
        for (var i in value) {
            if (this.filtro(value[i], criteria.toUpperCase()))
                usuarios.push(value[i]);
        }
        return usuarios;
    };
    FiltroUsuarioPipe.prototype.filtro = function (usuario, criteria) {
        if (usuario.name.toUpperCase().search(criteria) >= 0 ||
            usuario.email.toUpperCase().search(criteria) >= 0 ||
            usuario.permissao.startsWith(criteria))
            return true;
        return false;
    };
    FiltroUsuarioPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'filtroUsuario'
        })
    ], FiltroUsuarioPipe);
    return FiltroUsuarioPipe;
}());



/***/ }),

/***/ "./src/app/users/user.ts":
/*!*******************************!*\
  !*** ./src/app/users/user.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User(id, name, email, login, permissao) {
        if (typeof id == 'number') {
            this.id = id;
            this.name = name;
            this.login = login;
            this.email = email;
            this.permissao = permissao;
        }
        else {
            this.id = parseInt(id['id']);
            this.name = id['name'];
            this.login = id['login'];
            this.email = id['email'];
            this.permissao = id['permissao'];
        }
    }
    User.generateList = function (list) {
        var usuarioList = [];
        list.forEach(function (usuarioAny) {
            var usuario = new User(usuarioAny);
            usuarioList.push(usuario);
        });
        return usuarioList;
    };
    ;
    User.generate = function () {
        return new User(0, "", "", "", "");
    };
    User.prototype.aply = function (user) {
        this.id = user.id;
        this.name = user.name;
        this.login = user.login;
        this.email = user.email;
        this.permissao = user.permissao;
    };
    User.prototype.clone = function () {
        return new User(this);
    };
    return User;
}());



/***/ }),

/***/ "./src/app/users/users.component.html":
/*!********************************************!*\
  !*** ./src/app/users/users.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-md-10 col-md-offset-1\">\n\t\t<div class=\"panel panel-default\">\n\t\t\t<div class=\"panel-heading\">Usuários</div>\n\t\t\t<table class=\"table\">\n\t\t\t\t<caption>\n\t\t\t\t\t<table>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<td class=\"col-md-1\"><label for=\"filtro\" class=\"col-md-1 control-label\">Buscar:</label></td>\n\t\t\t\t\t\t\t<td class=\"col-md-8\"><input id=\"filtro\" type=\"text\" class=\"form-control\" name=\"filtro\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"criteria\" autofocus></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</table>\n\t\t\t\t</caption>\n\t\t\t\t<colgroup>\n\t\t\t\t\t<col width=\"50px\" />\n\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t<col width=\"170px\" />\n\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t<col width=\"135px\" />\n\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t<col width=\"135px\" />\n\t\t\t\t\t<col width=\"15px\" />\n\t\t\t\t</colgroup>\n\t\t\t\t<thead class=\"thead-light\">\n\t\t\t\t\t<tr>\n\t\t\t\t\t\t<th scope=\"col\">#</th>\n\t\t\t\t\t\t<th scope=\"col\">Nome</th>\n\t\t\t\t\t\t<th scope=\"col\">Login</th>\n\t\t\t\t\t\t<th scope=\"col\">Email</th>\n\t\t\t\t\t\t<th scope=\"col\">Permissão</th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t\t<th scope=\"col\"></th>\n\t\t\t\t\t</tr>\n\t\t\t\t</thead>\n\t\t\t</table>\n\t\t\t<div redimensionar=\"310\" style=\"overflow-y:scroll\">\n\t\t\t\t<table class=\"table\">\n\t\t\t\t\t<colgroup>\n\t\t\t\t\t\t<col width=\"50px\" />\n\t\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t\t<col width=\"170px\" />\n\t\t\t\t\t\t<col width=\"50%\" />\n\t\t\t\t\t\t<col width=\"135px\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"39px\" />\n\t\t\t\t\t\t<col width=\"135px\" />\n\t\t\t\t\t</colgroup>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let u of (usuarios | filtroUsuario:criteria)\">\n\t\t\t\t\t\t\t<td>{{u.id}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{u.name}}\">{{u.name}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{u.login}}\">{{u.login}}</td>\n\t\t\t\t\t\t\t<td class=\"celula-trunca-texto\" title=\"{{u.email}}\">{{u.email}}</td>\n\t\t\t\t\t\t\t<td *ngIf=\"usuarioTemp.id != u.id || !setPermissaoFlag\">{{u.permissao}}</td>\n\t\t\t\t\t\t\t<td *ngIf=\"usuarioTemp.id != u.id || !setPermissaoFlag\">\n\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-reduzido\" title=\"Alterar Permissão\"\n\t\t\t\t\t\t\t\t\t(click)=\"habilitarEdicaoPermissao(u.clone())\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-user\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td colspan=\"2\" *ngIf=\"usuarioTemp.id == u.id && setPermissaoFlag\">\n\t\t\t\t\t\t\t\t<select id=\"selectPermissao\" class=\"form-control form-control-micro\"\n\t\t\t\t\t\t\t\t\t(change)=\"alterarPermissao()\" (blur)=\"resetEdit()\"\n\t\t\t\t\t\t\t\t\t[(ngModel)]=\"usuarioTemp.permissao\">\n\t\t\t\t\t\t\t\t\t<option value=\"ADMINISTRADOR\">ADMINISTRADOR</option>\n\t\t\t\t\t\t\t\t\t<option value=\"USUARIO\">USUARIO</option>\n\t\t\t\t\t\t\t\t\t<option value=\"INATIVO\">INATIVO</option>\n\t\t\t\t\t\t\t\t</select>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button (click)=\"selecionarUsuario(u)\" class=\"btn btn-primary botao-reduzido\"\n\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\" data-target=\"#dialogEditarUsuario\" title=\"Editar\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-edit\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t<button (click)=\"selecionarUsuario(u)\" class=\"btn btn-primary botao-reduzido\"\n\t\t\t\t\t\t\t\t\tdata-toggle=\"modal\" data-target=\"#dialogResetSenha\" title=\"Redefinir Senha\">\n\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-list-alt\"></span>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t<td style=\"padding-left: 2px;\">\n\t\t\t\t\t\t\t\t<form name=\"form-logar-como-{{u.id}}\" action=\"/users/logarcomo/{{u.id}}\" method=\"GET\">\n\t\t\t\t\t\t\t\t\t<button (click)=\"submeterLogarComo(u.id)\" class=\"btn btn-primary botao-reduzido\"\n\t\t\t\t\t\t\t\t\t\tstyle=\"width: 125px;\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"glyphicon glyphicon-education\"></span>\n\t\t\t\t\t\t\t\t\t\tLOGAR COMO\n\t\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t\t</form>\n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<tfoot class=\"status-tabela\">\n\t\t\t\t\t\t<tr *ngIf=\"status == LOADING\">\n\t\t\t\t\t\t\t<td colspan=\"6\"><i>Carregando Usuários...</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"usuarios != null && (usuarios).length == 0 && status == COMPLETE\">\n\t\t\t\t\t\t\t<td colspan=\"6\"><i>Não Há Usuários para serem listadas</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t<tr *ngIf=\"status == ERROR\">\n\t\t\t\t\t\t\t<td class=\"erro\" colspan=\"6\"><i>Falha na obtenção de Usuários!</i></td>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tfoot>\n\t\t\t\t</table>\n\t\t\t</div>\n\t\t\t<div class=\"panel-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" data-toggle=\"modal\"\n\t\t\t\t\tdata-target=\"#dialogNovoUsuario\" (click)=\"resetEdit()\" [disabled]=\"!editavel\">Novo</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogNovoUsuario\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogNovoUsuarioTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" redimensionar=\"60\" style=\"overflow: hidden;\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Novo Usuário</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 500px;\">\n\n\t\t\t\t<label for=\"login\">Login</label>\n\t\t\t\t<input id=\"login\" type=\"text\" [(ngModel)]=\"usuarioTemp.login\" class=\"form-control\" name=\"login\"\n\t\t\t\t\tvalue=\"login\" autocomplete=\"login\" size=\"60\" autofocus>\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"name\">Nome</label>\n\t\t\t\t<input id=\"name\" type=\"text\" [(ngModel)]=\"usuarioTemp.name\" class=\"form-control\" name=\"name\"\n\t\t\t\t\tvalue=\"name\" autocomplete=\"name\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"email\">Endereço de E-Mail</label>\n\t\t\t\t<input id=\"email\" type=\"email\" [(ngModel)]=\"usuarioTemp.email\" class=\"form-control\" name=\"email\"\n\t\t\t\t\tvalue=\"email\" autocomplete=\"email\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"password\">Senha</label>\n\t\t\t\t<input id=\"password\" type=\"password\" [(ngModel)]=\"usuarioTemp.password\" class=\"form-control\"\n\t\t\t\t\tname=\"password\" autocomplete=\"new-password\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"password-confirm\">Confirmar Senha</label>\n\t\t\t\t<input id=\"password-confirm\" type=\"password\" [(ngModel)]=\"usuarioTemp.password_confirmation\"\n\t\t\t\t\tclass=\"form-control\" name=\"password_confirmation\" autocomplete=\"new-password\" size=\"60\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-primary botao-barra\" (click)=\"novoUsuario()\"\n\t\t\t\t\t[disabled]=\"!editavel\">Criar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogEditarUsuario\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogEditarUsuarioTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" redimensionar=\"60\" style=\"overflow: hidden;\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Editar Usuário</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" style=\"width: 500px;\">\n\t\t\t\t<label for=\"login-edit\">Login</label>\n\t\t\t\t<input id=\"login-edit\" type=\"text\" [(ngModel)]=\"usuarioTemp.login\" class=\"form-control\"\n\t\t\t\t\tname=\"login-edit\" autocomplete=\"login\" size=\"60\" autofocus>\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"name-edit\">Nome</label>\n\t\t\t\t<input id=\"name-edit\" type=\"text\" [(ngModel)]=\"usuarioTemp.name\" class=\"form-control\" name=\"name-edit\"\n\t\t\t\t\tautocomplete=\"name\" size=\"60\">\n\t\t\t\t<p></p>\n\n\t\t\t\t<label for=\"email-edit\">Endereço de E-Mail</label>\n\t\t\t\t<input id=\"email-edit\" type=\"email\" [(ngModel)]=\"usuarioTemp.email\" class=\"form-control\"\n\t\t\t\t\tname=\"email-edit\" autocomplete=\"email\" size=\"60\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"editarUsuario()\"\n\t\t\t\t\t[disabled]=\"!editavel\">Editar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"modal fade\" id=\"dialogResetSenha\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"dialogResetSenhaTitle\"\n\taria-hidden=\"true\">\n\t<div class=\"modal-dialog modal-dialog-centered\" redimensionar=\"60\" style=\"overflow: hidden; width: 330px;\" role=\"document\">\n\t\t<div class=\"modal-content\">\n\t\t\t<div class=\"modal-header\">\n\t\t\t\t<h5 class=\"modal-title\" id=\"exampleModalLongTitle\">Redefinir Senha</h5>\n\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"modal-body\" >\n\t\t\t\t<label for=\"password-edit\">Senha</label>\n\t\t\t\t<input id=\"password-edit\" type=\"password\" [(ngModel)]=\"usuarioTemp.password\" class=\"form-control\"\n\t\t\t\t\tname=\"password\" autocomplete=\"nova-senha\">\n\n\t\t\t\t<label for=\"password-confirm-edit\">Confirmar Senha</label>\n\t\t\t\t<input id=\"password-confirm-edit\" type=\"password\" [(ngModel)]=\"usuarioTemp.password_confirmation\"\n\t\t\t\t\tclass=\"form-control\" name=\"password_confirmation\" autocomplete=\"nova-senha\">\n\t\t\t\t<p></p>\n\t\t\t</div>\n\t\t\t<div class=\"modal-footer\">\n\t\t\t\t<button type=\"button\" class=\"btn btn-success botao-barra\" (click)=\"redefinirSenha()\"\n\t\t\t\t\t[disabled]=\"!editavel\">Confirmar</button>\n\t\t\t\t<button type=\"button\" class=\"btn btn-secondary botao-barra\" data-dismiss=\"modal\">Fechar</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/users/users.component.less":
/*!********************************************!*\
  !*** ./src/app/users/users.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/users/users.service.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user */ "./src/app/users/user.ts");
/* harmony import */ var _abstract_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../abstract-component */ "./src/app/abstract-component.ts");





var UsersComponent = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](UsersComponent, _super);
    function UsersComponent(usuarioService) {
        var _this = _super.call(this) || this;
        _this.usuarioService = usuarioService;
        _this.criteria = "";
        _this.usuarioTemp = _user__WEBPACK_IMPORTED_MODULE_3__["User"].generate();
        _this.setPermissaoFlag = false;
        return _this;
    }
    Object.defineProperty(UsersComponent.prototype, "usuarios", {
        get: function () {
            return this.usuarioService.usuarios;
        },
        set: function (usuarios) {
            this.usuarioService.usuarios = usuarios;
        },
        enumerable: true,
        configurable: true
    });
    UsersComponent.prototype.alterarPermissao = function () {
        var _this = this;
        this.usuarioService.alteraPermissao(this.usuarioTemp)
            .then(function (response) {
            if (response)
                alert(_this.erroHttp(response));
            else {
                _this.resetEdit();
            }
            _this.setPermissaoFlag = false;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.setPermissaoFlag = false;
        });
    };
    UsersComponent.prototype.habilitarEdicaoPermissao = function (usuario) {
        this.usuarioTemp = usuario.clone();
        this.setPermissaoFlag = true;
        setTimeout(function () {
            document.getElementById('selectPermissao').focus();
        }, 300);
    };
    UsersComponent.prototype.resetEdit = function () {
        this.usuarioTemp = _user__WEBPACK_IMPORTED_MODULE_3__["User"].generate();
    };
    UsersComponent.prototype.novoUsuario = function () {
        var _this = this;
        this.editavel = false;
        this.usuarioService.novoUsuario(this.usuarioTemp)
            .then(function (response) {
            jQuery('#dialogNovoUsuario').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    UsersComponent.prototype.selecionarUsuario = function (user) {
        this.usuarioTemp = user.clone();
        this.setPermissaoFlag = false;
    };
    UsersComponent.prototype.editarUsuario = function () {
        var _this = this;
        this.editavel = false;
        this.usuarioService.editarUsuario(this.usuarioTemp)
            .then(function (response) {
            jQuery('#dialogEditarUsuario').modal('hide');
            _this.editavel = true;
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    UsersComponent.prototype.redefinirSenha = function () {
        var _this = this;
        if (this.usuarioTemp.password == null || this.usuarioTemp.password_confirmation == null) {
            alert("Uma senha deve ser informada!");
            return;
        }
        if (this.usuarioTemp.password != this.usuarioTemp.password_confirmation) {
            alert("Senhas não Conferem!");
            return;
        }
        this.editavel = false;
        this.usuarioService.redefinirSenha(this.usuarioTemp)
            .then(function (response) {
            jQuery('#dialogResetSenha').modal('hide');
            _this.editavel = true;
            alert("Senha Alterada!");
        })
            .catch(function (response) {
            alert(_this.erroHttp(response));
            _this.editavel = true;
        });
    };
    UsersComponent.prototype.submeterLogarComo = function (uid) {
        document.forms["form-logar-como-" + uid].submit();
        //$('meta[name="csrf-token"]').attr('content')
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetEdit();
        this.usuarioService.listaUsuarios()
            .then(function (response) {
            _this.status = _this.COMPLETE;
            _this.editavel = true;
        })
            .catch(function (response) {
            _this.status = _this.ERROR;
            console.log(response);
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.less */ "./src/app/users/users.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"]])
    ], UsersComponent);
    return UsersComponent;
}(_abstract_component__WEBPACK_IMPORTED_MODULE_4__["AbstractComponent"]));



/***/ }),

/***/ "./src/app/users/users.service.ts":
/*!****************************************!*\
  !*** ./src/app/users/users.service.ts ***!
  \****************************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _array_indexador__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../array-indexador */ "./src/app/array-indexador.ts");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user */ "./src/app/users/user.ts");





var UsersService = /** @class */ (function () {
    function UsersService(http) {
        this.http = http;
        this.usuariosIndex = null;
    }
    UsersService.prototype.listaUsuarios = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var response;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get('users/lista')
                            .toPromise()];
                    case 1:
                        response = _a.sent();
                        this.usuarios = _user__WEBPACK_IMPORTED_MODULE_4__["User"].generateList(response.json());
                        this.usuariosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](this.usuarios);
                        return [2 /*return*/, this.usuarios];
                }
            });
        });
    };
    UsersService.prototype.novoUsuario = function (usuario) {
        var _this = this;
        return this.http.post('users', usuario).toPromise()
            .then(function (response) {
            _this.usuarios = _user__WEBPACK_IMPORTED_MODULE_4__["User"].generateList(response.json());
            _this.usuariosIndex = new _array_indexador__WEBPACK_IMPORTED_MODULE_3__["ArrayIndexador"](_this.usuarios);
            return _this.usuarios;
        });
    };
    UsersService.prototype.editarUsuario = function (usuario) {
        var _this = this;
        return this.http.put('users/' + usuario.id, usuario).toPromise()
            .then(function (response) {
            var u = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](response.json());
            if (_this.usuariosIndex != null)
                _this.usuariosIndex.get(u.id).aply(u);
            return u;
        });
    };
    UsersService.prototype.redefinirSenha = function (usuario) {
        var _this = this;
        return this.http.put('users/password/' + usuario.id, usuario).toPromise()
            .then(function (response) {
            var u = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](response.json());
            if (_this.usuariosIndex != null)
                _this.usuariosIndex.get(u.id).aply(u);
            return u;
        });
    };
    UsersService.prototype.alteraPermissao = function (usuario) {
        var _this = this;
        return this.http.put("users/permissao/" + usuario.id, usuario).toPromise()
            .then(function (response) {
            var u = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](response.json());
            /*for (var i in this.usuarios) {
                if (this.usuarios[i].id == u.id)
                    this.usuarios[i].permissao = u.permissao;
            }*/
            if (_this.usuariosIndex != null)
                _this.usuariosIndex.get(u.id).aply(u);
            return null;
        })
            .catch(function (response) {
            return response;
        });
    };
    UsersService.prototype.usuarioLogado = function () {
        return this.http.get("/logado").toPromise()
            .then(function (response) {
            var u = new _user__WEBPACK_IMPORTED_MODULE_4__["User"](response.json());
            return u;
        });
    };
    UsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], UsersService);
    return UsersService;
}());



/***/ }),

/***/ "./src/app/zeros.pipe.ts":
/*!*******************************!*\
  !*** ./src/app/zeros.pipe.ts ***!
  \*******************************/
/*! exports provided: ZerosPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ZerosPipe", function() { return ZerosPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ZerosPipe = /** @class */ (function () {
    function ZerosPipe() {
        this.ZERO = "0";
    }
    ZerosPipe.prototype.transform = function (value, casas) {
        var s = String(value);
        while (s.length < casas || s.length < 2) {
            s = this.ZERO + s;
        }
        return s;
    };
    ZerosPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'zeros'
        })
    ], ZerosPipe);
    return ZerosPipe;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\wamp64\www\tech-front\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map