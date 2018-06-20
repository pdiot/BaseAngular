import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../incident.service';
import {Incident} from '../incident';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-liste-incident',
  templateUrl: './liste-incident.component.html',
  styleUrls: ['./liste-incident.component.css']
})
export class ListeIncidentComponent implements OnInit {

  constructor(private incidentService: IncidentService, private modalService: NgbModal) { }

  private incidents: Incident[];
  private modalRef;

  ngOnInit() {
    this.incidents = new Array<Incident>();
    this.incidentService.tmpGetIncident().subscribe(
      incis => {
        const tmp = incis;
        console.log('Incident Service : fetched all incidents');
        for (const inci of tmp) {
          this.incidents.push(new Incident(
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
          ));
        }
      }
    );
  }

  open(content, id: number): void {

    this.modalRef = this.modalService.open(content);
  }

  updateValue(event) {
    if (event === 'INSERTED') {
      this.ngOnInit();
      this.modalRef.close();
    }
  }

}
