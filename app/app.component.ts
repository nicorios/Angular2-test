import {Component} from '@angular/core';

@Component({
	selector: 'my-app',
	template: `
			<navbar></navbar>
			<div id="main">
				<div class="wrapper">
					<sidebar></sidebar>
				</div>
			</div>
			`
})

export class AppComponent { }