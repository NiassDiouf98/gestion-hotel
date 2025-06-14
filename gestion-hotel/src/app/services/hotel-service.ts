import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HotelService {
  private apiUrl = 'http://localhost:3000/api/hotels';

  constructor(private http: HttpClient) { }

  getHotels(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createHotel(hotel: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, hotel);
  }

  // Ajoute d'autres méthodes (update, delete, etc.)
}
