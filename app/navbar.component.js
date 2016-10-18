"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent = __decorate([
        core_1.Component({
            selector: 'navbar',
            template: "\n\t\t<header id=\"header\" class=\"page-topbar\">\n        <!-- start header nav-->\n        <div class=\"navbar-fixed\">\n            <nav class=\"navbar-color\">\n                <div class=\"nav-wrapper\">\n                    <ul class=\"left\">                      \n                      <li><h1 class=\"logo-wrapper\"><a href=\"index.html\" class=\"brand-logo darken-1\"><img src=\"images/materialize-logo.png\" alt=\"materialize logo\"></a> <span class=\"logo-text\">Materialize</span></h1></li>\n                    </ul>\n                    <div class=\"header-search-wrapper hide-on-med-and-down\">\n                        <i class=\"mdi-action-search\"></i>\n                        <input type=\"text\" name=\"Search\" class=\"header-search-input z-depth-2\" placeholder=\"Buscar\"/>\n                    </div>\n                    <ul class=\"right hide-on-med-and-down\">\n                        <li><a href=\"javascript:void(0);\" class=\"waves-effect waves-block waves-light toggle-fullscreen\"><i class=\"mdi-action-settings-overscan\"></i></a>\n                        </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n        <!-- end header nav-->\n  </header>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], NavbarComponent);
    return NavbarComponent;
}());
exports.NavbarComponent = NavbarComponent;
//# sourceMappingURL=navbar.component.js.map