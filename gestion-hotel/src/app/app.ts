import { Component } from '@angular/core';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Navbar } from './core/navbar/navbar';
import { Sidebar } from './core/sidebar/sidebar';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, CommonModule, Navbar, Sidebar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  showHeaderAndHeader = false;
  initialized = false;
  hiddenRoutes = ['/login', '/register', '/forgot-password'];

  constructor(private router: Router) {
    // Initialise la valeur dès le départ
    this.showHeaderAndHeader = !this.hiddenRoutes.includes(this.router.url);
    this.initialized = true;

    // Mets à jour à chaque navigation
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showHeaderAndHeader = !this.hiddenRoutes.includes(event.urlAfterRedirects);
        this.initialized = true;
      });
  }
}
