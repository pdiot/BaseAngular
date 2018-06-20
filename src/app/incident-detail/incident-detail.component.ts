import {Component, Input, OnInit} from '@angular/core';
import {IncidentService} from '../incident.service';
import {Incident} from '../incident';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-incident-detail',
  templateUrl: './incident-detail.component.html',
  styleUrls: ['./incident-detail.component.css']
})
export class IncidentDetailComponent implements OnInit {

  private id;
  private incident: Incident;

  constructor(private service: IncidentService, private route: ActivatedRoute, private location: Location) {
    route.params.subscribe(
      params => this.id = params['id']
    );
  }

  ngOnInit() {
    this.service.getIncident(this.id).subscribe(
      inci => {
        this.incident = inci;
        console.log('Fetched incident id : ' + inci.id);
      });
  }

  goBack(): void {
    this.location.back();
  }

}
