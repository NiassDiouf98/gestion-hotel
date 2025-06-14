import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CardDash } from '../../core/card-dash/card-dash';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, CardDash, CommonModule],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  cards = [
    {
      icon: 'fa-solid fa-envelope-open',
      count: 125,
      title: 'Formulaires',
      description: 'Je ne sais pas quoi mettre',
      color: 'violet'
    },
    {
      icon: '',
      count: 40,
      title: 'Messages',
      description: 'Je ne sais pas quoi mettre',
      color: 'teal',
      circle: 'P'
    },
    {
      icon: 'fa-solid fa-users',
      count: 600,
      title: 'Utilisateurs',
      description: 'Je ne sais pas quoi mettre',
      color: 'yellow'
    },
    {
      icon: 'fa-solid fa-envelope',
      count: 25,
      title: 'E-mails',
      description: 'Je ne sais pas quoi mettre',
      color: 'red'
    },
    {
      icon: '',
      count: 40,
      title: 'Hôtels',
      description: 'Je ne sais pas quoi mettre',
      color: 'purple',
      circle: 'P'
    },
    {
      icon: 'fa-solid fa-users',
      count: '02',
      title: 'Entités',
      description: 'Je ne sais pas quoi mettre',
      color: 'blue'
    }
  ];
}
