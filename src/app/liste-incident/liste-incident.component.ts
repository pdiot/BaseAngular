import {Component, ElementRef, OnInit} from '@angular/core';
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
    if (id === -1) {
      this.modalRef = this.modalService.open(content);
    } else {
      let inciToEdit;
      this.incidentService.getIncident(id).subscribe(
        inci => {
          console.log('Fetched incident id : ' + inci.id);
          inciToEdit = inci;
        }
      );
    }
  }

  updateValue(event) {
    if (event === 'INSERTED') {
      this.ngOnInit();
      this.modalRef.close();
    } else if (event.substr(0, 5) === 'EDIT_') {
      const id = +event.substr(5);
      this.open('content', id);
    }
  }

}
