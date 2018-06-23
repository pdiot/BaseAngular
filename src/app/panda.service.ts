import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Panda} from './panda';

@Injectable({
  providedIn: 'root'
})

export class PandaService {

  constructor(private http: HttpClient) {}

  private pandaURL = 'http://localhost:8082/panda/api/pandas';

  pandaGet(): Observable<Panda[]> {
    return this.http.get<Panda[]>(this.pandaURL);
  }

  pandaGetOne(id: number): Observable<Panda> {
    return this.http.get<Panda>(this.pandaURL + '/' + id);
  }

  pandaGetByContinent(id: number): Observable<Panda[]> {
    return this.http.get<Panda[]>(this.pandaURL + '/continent/' + id);
  }

  nbContGet(): Observable<number> {
    return this.http.get<number>(this.pandaURL + '/continents');
  }

  addPanda(panda: Panda): Observable<Panda> {
    return this.http.post<Panda>(this.pandaURL, panda);
  }

  updatePanda(panda: Panda): Observable<Panda> {
    return this.http.put<Panda>(this.pandaURL, panda);
  }

  deletePanda(panda: number): Observable<Panda> {

    return this.http.delete<Panda>(this.pandaURL + '/' + panda);
  }


}
