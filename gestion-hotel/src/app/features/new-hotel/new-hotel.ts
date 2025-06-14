import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-hotel',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-hotel.html',
  styleUrl: './new-hotel.css'
})
export class NewHotel {
  @Input() showModal = false;
  @Output() close = new EventEmitter<void>();
  @Output() create = new EventEmitter<any>();

  hotel = {
    name: '',
    address: '',
    email: '',
    phone: '',
    price: '',
    devise: ''
  };

  imageFile: File | null = null;
  imagePreview: string | null = null;

  closeModal() {
    this.close.emit();
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.imageFile = file;

      // Génère un aperçu de l'image
      const reader = new FileReader();
      reader.onload = e => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(file);
    }
  }

  submit() {
    const formData = new FormData();
    Object.entries(this.hotel).forEach(([key, value]) => {
      formData.append(key, value as string);
    });
    if (this.imageFile) {
      formData.append('image', this.imageFile);
    }
    this.create.emit(formData);
    this.closeModal();

    // Réinitialise le formulaire et l'image
    this.hotel = { name: '', address: '', email: '', phone: '', price: '', devise: '' };
    this.imageFile = null;
    this.imagePreview = null;
  }
}
