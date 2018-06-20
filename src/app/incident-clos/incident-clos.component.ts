import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Incident} from '../incident';
import {IncidentService} from '../incident.service';

@Component({
  selector: '[app-incident-clos]',
  templateUrl: './incident-clos.component.html',
  styleUrls: ['./incident-clos.component.css']
})
export class IncidentClosComponent implements OnInit {

  @Input() incident: Incident;

  @Output() sortie = new EventEmitter();

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
  }

  open() {
    this.incident.open = false;
    this.incidentService.updateIncident(this.incident).subscribe(
      _ => this.sortie.emit('UPDATEME')
    );
  }

}
