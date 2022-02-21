import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import listClinic from '../interface/IClinic';
import { environment } from 'src/environments/environment';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class ClinicService {
  constructor(private http: HttpClient) {}

  getClinic(): Observable<listClinic> {
    return this.http.get<listClinic>(`${API_URL}/clinic`);
  }
}
