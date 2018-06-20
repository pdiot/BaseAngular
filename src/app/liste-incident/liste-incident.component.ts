import {Component, ElementRef, OnInit, TemplateRef, ViewChild} from '@angular/core';
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

  @ViewChild('content') content;
  private incidentsOuverts: Incident[];
  private incidentsClos: Incident[];
  private modalRef;
  private incidentToEdit: Incident;

  ngOnInit() {
    this.incidentsOuverts = new Array<Incident>();
    this.incidentService.getOpen().subscribe(
      incis => {
        const tmp = incis;
        console.log('Incident Service : fetched all incidents');
        for (const inci of tmp) {
          this.incidentsOuverts.push(new Incident(
            inci.id,
            inci.dateCreation,
            inci.dateModification,
            inci.description,
            inci.email,
            inci.open,
            inci.level,
            inci.progress,
            inci.titre,
            inci.type
          ));
        }
      }
    );
    this.incidentsClos = new Array<Incident>();
    this.incidentService.getClosed().subscribe(
      incis => {
        const tmp = incis;
        console.log('Incident Service : fetched all incidents');
        for (const inci of tmp) {
          this.incidentsClos.push(new Incident(
            inci.id,
            inci.dateCreation,
            inci.dateModification,
            inci.description,
            inci.email,
            inci.open,
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
      this.modalRef = this.modalService.open(content).result.then((result) => {
          console.log(`result :  ${result}`);
        },
        (reason) => {
          console.log(`reason :  ${reason}`);
          this.incidentToEdit = null;
        });
    } else {
      this.incidentService.getIncident(id).subscribe(
        inci => {
          console.log('Fetched incident id : ' + inci.id);
          this.incidentToEdit = inci;
          this.modalRef = this.modalService.open(content);
        }
      );
    }
  }

  updateValue(event) {
    if (event === 'INSERTED') {
      this.ngOnInit();
      this.modalRef.close();
    } else if (event === 'UPDATED') {
      this.incidentToEdit = null;
      this.ngOnInit();
      this.modalRef.close();
    } else if (event.substr(0, 5) === 'EDIT_') {
      const id = +event.substr(5);
      console.log('Callback : EDIT_' + id);
      this.open(this.content, id);
    } else if (event === 'UPDATEME') {
      this.ngOnInit();
    }
  }

  // Exemple d'utilisation de <ng-content> dans le html pour interpréter du html au sein d'un component
  edit(id: number): void {
    this.open(this.content, id);
  }

}
