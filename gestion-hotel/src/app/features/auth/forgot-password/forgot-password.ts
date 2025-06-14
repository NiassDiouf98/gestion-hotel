import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './forgot-password.html',
  styleUrls: ['./forgot-password.css', '../login/login.css']
})
export class ForgotPassword {
  constructor(private router: Router) {}

  onSend() {
    // la logique d'envoi plus tard
    this.router.navigate(['/login']);
  }
}
