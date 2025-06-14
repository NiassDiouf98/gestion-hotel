import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.html',
  styleUrls: ['./register.css', '../login/login.css']
})
export class Register {
  constructor(private router: Router) {}

  onRegister() {
    // la logique d'inscription plus tard
    this.router.navigate(['/login']);
  }
}
