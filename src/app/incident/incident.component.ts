import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Incident} from '../incident';

@Component({
  selector: '[app-incident]',
  templateUrl: './incident.component.html',
  styleUrls: ['./incident.component.css']
})
export class IncidentComponent implements OnInit {

  @Input() incident: Incident;

  @Output() sortie = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  edit() {
    this.sortie.emit('EDIT_1');
  }

}
