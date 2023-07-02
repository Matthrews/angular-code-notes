import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'directive-demo-1';
  authProfile = [ { r: 'admin_config', a: ['view'] } ]
  highlighted = true;
}
