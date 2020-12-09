import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const baseUrl = 'http://localhost:8080/api/clerk/';
@Injectable({
  providedIn: 'root'
})
export class AdditionalEquipmentService {

  constructor(private http: HttpClient) { }

  updateQuantity(id:any, data:any): Observable<any> {
    return this.http.put(`${baseUrl}/updateQuantity/${id}`, data);
  }

  findAllAvailable(id:any, data:any): Observable<any> {
    return this.http.get(`${baseUrl}/findAllAvailable`, data);
  }
  
  getAllAEquipments(): Observable<any> {
    return this.http.get(baseUrl);
  }

  getAEquipment(id:any): Observable<any> {
    return this.http.get(`${baseUrl}/updateBookingStatus/${id}`);
  }

  createAEquipment(data:any): Observable<any> {
    return this.http.post(baseUrl,data);
  }

  deleteAEquipment(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAllAEquipments(): Observable<any> {
    return this.http.delete(baseUrl);
  }

}