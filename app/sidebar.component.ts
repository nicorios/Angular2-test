import { Component } from '@angular/core';

@Component({
	selector:	'sidebar',
	template:	`
		<aside id="left-sidebar-nav">
          <ul id="slide-out" class="side-nav fixed leftside-navigation">
            <li class="user-details cyan darken-2">
              <div class="row">
                <div class="col col s4 m4 l4">
                  <img src="images/avatar.jpg" alt="" class="circle responsive-img valign profile-image">
                </div>
                <div class="col col s8 m8 l8">
                  <a class="btn-flat dropdown-button waves-effect waves-light white-text profile-btn" href="user-profile-page.html">Facu Silvestre</a>
                  <p class="user-roal">Emprendedor</p>
                </div>
              </div>
            </li>
            <li><a href="index.html"><i class="mdi-action-home"></i> Principal</a>
            </li>
            <li><a href="page-socios.html"><i class="mdi-action-accessibility"></i> Socios</a></li>
            <li><a href="page-404.html"><i class="mdi-content-sort"></i> Estad&iacutesticas</a>
              <li><a href="page-404.html"><i class="mdi-action-settings"></i> Ajustes</a>
              </li>
              <li class="divider"></li>
              <li><a href="user-lock-screen.html"><i class="mdi-action-lock-outline"></i> Lock</a>
              </li>
              <li><a href="user-login.html"><i class="mdi-hardware-keyboard-tab"></i> Salir</a>
              </li>
              <li class="li-hover"><div class="divider"></div></li>
              <li class="li-hover"><p class="ultra-small margin more-text">Ingresos de hoy</p></li>
              <li class="li-hover">
                <div class="row">
                  <div class="col s12 m12 l12">
                    <div class="sample-chart-wrapper">                            
                      <div class="ct-chart ct-golden-section" id="ct2-chart"></div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <a href="#" data-activates="slide-out" class="sidebar-collapse btn-floating btn-medium waves-effect waves-light hide-on-large-only cyan"><i class="mdi-navigation-menu"></i></a>
          </aside>
          <script type="text/javascript" src="js/materialize.js"></script>
	`
})

export class SidebarComponent{ }