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
var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'sidebar',
            template: "\n\t\t<aside id=\"left-sidebar-nav\">\n          <ul id=\"slide-out\" class=\"side-nav fixed leftside-navigation\">\n            <li class=\"user-details cyan darken-2\">\n              <div class=\"row\">\n                <div class=\"col col s4 m4 l4\">\n                  <img src=\"images/avatar.jpg\" alt=\"\" class=\"circle responsive-img valign profile-image\">\n                </div>\n                <div class=\"col col s8 m8 l8\">\n                  <a class=\"btn-flat dropdown-button waves-effect waves-light white-text profile-btn\" href=\"user-profile-page.html\">Facu Silvestre</a>\n                  <p class=\"user-roal\">Emprendedor</p>\n                </div>\n              </div>\n            </li>\n            <li><a href=\"index.html\"><i class=\"mdi-action-home\"></i> Principal</a>\n            </li>\n            <li><a href=\"page-socios.html\"><i class=\"mdi-action-accessibility\"></i> Socios</a></li>\n            <li><a href=\"page-404.html\"><i class=\"mdi-content-sort\"></i> Estad&iacutesticas</a>\n              <li><a href=\"page-404.html\"><i class=\"mdi-action-settings\"></i> Ajustes</a>\n              </li>\n              <li class=\"divider\"></li>\n              <li><a href=\"user-lock-screen.html\"><i class=\"mdi-action-lock-outline\"></i> Lock</a>\n              </li>\n              <li><a href=\"user-login.html\"><i class=\"mdi-hardware-keyboard-tab\"></i> Salir</a>\n              </li>\n              <li class=\"li-hover\"><div class=\"divider\"></div></li>\n              <li class=\"li-hover\"><p class=\"ultra-small margin more-text\">Ingresos de hoy</p></li>\n              <li class=\"li-hover\">\n                <div class=\"row\">\n                  <div class=\"col s12 m12 l12\">\n                    <div class=\"sample-chart-wrapper\">                            \n                      <div class=\"ct-chart ct-golden-section\" id=\"ct2-chart\"></div>\n                    </div>\n                  </div>\n                </div>\n              </li>\n            </ul>\n            <a href=\"#\" data-activates=\"slide-out\" class=\"sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan\"><i class=\"mdi-navigation-menu\"></i></a>\n          </aside>\n          <script type=\"text/javascript\" src=\"js/materialize.js\"></script>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;
//# sourceMappingURL=sidebar.component.js.map