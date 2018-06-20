import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Incident} from './incident';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class IncidentService {

  constructor(private http: HttpClient) { }

  private incidentsUrl = 'http://localhost:8090/incident/incidents';

  tmpGetIncident(): Observable<Incident[]> {
    return this.http.get<Incident[]>(this.incidentsUrl);
  }

/*
  getIncidents(): Observable<Incident[]> {

    return this.http.get(this.incidentsUrl).pipe(map(
      result => {
        return result.json().results.pipe(map(
        inci => {
          return new Incident(
            inci.id,
            inci.dateCreation,
            inci.dateModification,
            inci.description,
            inci.email,
            inci.is_open,
            inci.level,
            inci.progress,
            inci.titre,
            inci.type
          );
        }
      ));
      }
    ));
  }
*/

  getIncident(id: number): Observable<Incident> {
    console.log('Incident Service : fetched all incidents');
    const url = this.incidentsUrl + '/' + id;
    return this.http.get<Incident>(url);
  }

  addIncident (inci: Incident): Observable<any> {
    return this.http.post<Incident>(this.incidentsUrl, inci);
  }

  updateIncident(inci: Incident): Observable<any> {
    return this.http.put(this.incidentsUrl, inci);
  }
}
