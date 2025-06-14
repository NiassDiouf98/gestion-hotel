import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewHotel } from "../new-hotel/new-hotel";
import { HotelService } from '../../services/hotel-service';
import { response } from 'express';

@Component({
  selector: 'app-list-hotel',
  standalone: true,
  imports: [CommonModule, RouterModule, NewHotel],
  templateUrl: './list-hotel.html',
  styleUrl: './list-hotel.css'
})
export class ListHotel implements OnInit {

  hotels: any[] = [];
  showModal = false;
  successMessage = '';
  errorMessage = '';

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.getHotels().subscribe({
      next: data => {
        console.log('Liste des hôtels chargée:', data);
        this.hotels = data;
      },
      error: err => {
        console.error('Erreur lors du chargement des hôtels:', err);
        this.errorMessage = "Erreur lors du chargement des hôtels.";
        setTimeout(() => this.errorMessage = '', 3000);
      }
    });
  }

  addHotel(hotelFormData: FormData) {
    console.log('Données envoyées:', hotelFormData);
    this.hotelService.createHotel(hotelFormData).subscribe({
      next: (response) => {
        console.log('Réponse API:', response);
        if (response && response.hotel) {
          this.hotels.unshift(response.hotel);
          this.successMessage = "Hôtel créé avec succès !";
          this.errorMessage = '';
          setTimeout(() => this.successMessage = '', 3000);
        } else {
          this.errorMessage = "Erreur inattendue lors de la création.";
          this.successMessage = '';
          setTimeout(() => this.errorMessage = '', 3000);
        }
      },
      error: (err) => {
        console.error('Erreur API:', err);
        this.errorMessage = "Erreur lors de la création de l'hôtel.";
        this.successMessage = '';
        setTimeout(() => this.errorMessage = '', 3000);
      }



    });
  }

  getImageUrl(image: string) {
    if (!image) return 'assets/default-hotel.jpg'; // image par défaut si besoin
    if (image.startsWith('http')) return image; // si déjà une URL complète
    return `http://localhost:3000/uploads/${image}`;
  }


  openModal() {
    this.showModal = true;
    this.successMessage = '';
    this.errorMessage = '';
  }

  closeModal() {
    this.showModal = false;
  }
}
