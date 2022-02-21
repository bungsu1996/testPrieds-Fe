import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import listClinic from '../interface/IClinic';
import inputVisitor from '../interface/IVisitors';
import { environment } from 'src/environments/environment';
import { IVisitor } from '../visitor-list/IVisitor';

const API_URL = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class VisitorsService {
  constructor(private http: HttpClient) {}

  inputNewVisitor(
    visitorName: string,
    visitorBirthDate: string,
    visitorAge: string,
    visitorContact: string,
    clinic: listClinic,
    visitorWeight: string,
    visitorHeight: string,
    visitorBlood: string,
    visitorAdres: string,
    visitorAdres2: string,
    visitorAnamnesis: string,
    visitorTreatment: string
  ): Observable<inputVisitor> {
    const visitor = {
      visitorName,
      visitorBirthDate,
      visitorAge,
      visitorContact,
      clinic,
      visitorWeight,
      visitorHeight,
      visitorBlood,
      visitorAdres,
      visitorAdres2,
      visitorAnamnesis,
      visitorTreatment,
    };
    return this.http.post<inputVisitor>(
      `${API_URL}/visitors/input-visitor`,
      visitor
    );
  }

  getVisitors(): Observable<inputVisitor> {
    return this.http.get<inputVisitor>(`${API_URL}/visitors`);
  }

  searchByName(visitorName: string): Observable<IVisitor> {
    const visitor = { visitorName };
    return this.http.post<IVisitor>(
      `${API_URL}/visitors/search-byname`,
      visitor
    );
  }
}
