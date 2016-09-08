import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<div class="container">
    			<div class="row" id="header">
  					<a [routerLink]="['/']" [routerLinkActive]="['active']" [routerLinkActiveOptions]="{ exact: true }">Home</a>
	  				<a [routerLink]="['/add']" [routerLinkActive]="['active']">Add</a>
	  				<a [routerLink] = "['/games']" [routerLinkActive]="['active']">Game</a>
				</div>
    		<div class="outer-outlet">
      		<router-outlet></router-outlet>
    		</div>
    		</div>`,
    styles: [`
    
    #headers a{
    text-decoration: none;
    width: 70px;
    background: #ccc;
    height: 59px;
    border-radius: 8px;
    padding: 5px;
    }
  `]
})
export class AppComponent { 
}
