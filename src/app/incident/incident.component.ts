import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Incident} from '../incident';
import {IncidentService} from '../incident.service';

@Component({
  selector: '[app-incident]',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  @Input() incident: Incident;

  @Output() sortie = new EventEmitter();

  constructor(private incidentService: IncidentService) { }

  ngOnInit() {
  }

  edit() {
    this.sortie.emit('EDIT_' + this.incident.id);
  }

  close() {
    this.incident.open = true;
    this.incidentService.updateIncident(this.incident).subscribe(
      _ => this.sortie.emit('UPDATEME')
    );
  }

}
