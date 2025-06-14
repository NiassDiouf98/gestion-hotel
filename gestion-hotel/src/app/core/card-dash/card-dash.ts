import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-dash',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-dash.html',
  styleUrl: './card-dash.css'
})
export class CardDash {
  @Input() icon: string = '';
  @Input() count: number | string = '';
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() color: string = '';
}
