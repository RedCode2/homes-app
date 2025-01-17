import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  template: `
   <main>
    <header class="brand-name">
      <img class="brand-logo" src="assets/icons/logo.svg" alt="logo" aria-hidden="true">
    </header>
   </main>
  `,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'homes-app';
}
