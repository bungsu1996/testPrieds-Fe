import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import ITIcket from '../interface/ITicket';
import { environment } from '../../environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class TicketService {
  constructor(private http: HttpClient) {}

  getTicket(): Observable<ITIcket> {
    return this.http.get<ITIcket>(`${API_URL}/ticket/print`);
  }
}
