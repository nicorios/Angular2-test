import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar.component';
import {SidebarComponent} from './sidebar.component';

@NgModule({
	imports: [
		BrowserModule,		
	],
	declarations: [
		AppComponent,
		NavbarComponent,
		SidebarComponent
	],
	bootstrap: [AppComponent]
})

export class AppModule {}