
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { routes } from './app/app.routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[RouterOutlet],
  template: '<router-outlet />'
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
  providers:[provideRouter(routes)]
});
