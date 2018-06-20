import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output, SimpleChanges} from '@angular/core';
import {Incident} from '../incident';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IncidentService} from '../incident.service';

@Component({
  selector: 'app-incident-form',
  templateUrl: './incident-form.component.html',
  styleUrls: ['./incident-form.component.css']
})
export class IncidentFormComponent implements OnInit {

  @Output() sortie = new EventEmitter();

  @Input() entree: Incident;

  incidentForm: FormGroup;
  formSubmitted = false;
  formtitle = 'Incident';
  buttontext = 'Add';

  constructor(private fb: FormBuilder, private incidentService: IncidentService, private ref: ChangeDetectorRef) { }

  // Méthode d'interface, elle est déclenché lors du changement d'état d'une propriété,

  // Dans la cas d'une mise a jour de la propriété input lors d'un edit par exemple,

  // Déclenchement d'un evenement lors d'une assignation

  ngOnInit() {
    if (this.entree) {
      console.log('entree trouvée');
      let level: number;
      switch (this.entree.level) {
        case 'MINOR':
          level = 3;
          break;
        case 'MEDIUM':
          level = 2;
          break;
        case 'ERROR':
          level = 1;
          break;
        case 'FATAL':
          level = 0;
          break;
      }
      let type: number;
      switch (this.entree.type) {
        case 'FEATURE':
          type = 1;
          break;
        case 'BUG':
          type = 0;
          break;
      }
      this.formtitle = 'Update';
      this.buttontext = 'Update';
      this.incidentForm = this.fb.group({
        'titre': [ this.entree.titre, Validators.compose([
          Validators.minLength(3),
          Validators.required
        ])],
        'mail': [ this.entree.email, Validators.compose([
          Validators.required
        ])],
        'progress': [ this.entree.progress, Validators.compose([
          Validators.required
        ])],
        'level': [ level, Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(3)
        ])],
        'type': [ type, Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(1)
        ])],
        'id': [this.entree.id],
        'desc': [this.entree.description]
      });
    } else {
      this.formtitle = 'Incident';
      this.buttontext = 'Add';
      console.log('pas d\'entrée trouvée');
      this.incidentForm = this.fb.group({
        'titre': [ '', Validators.compose([
          Validators.minLength(3),
          Validators.required
        ])],
        'mail': [ '', Validators.compose([
          Validators.required
        ])],
        'progress': [ '', Validators.compose([
          Validators.required
        ])],
        'level': [ '', Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(3)
        ])],
        'type': [ '', Validators.compose([
          Validators.required,
          Validators.min(0),
          Validators.max(1)
        ])],
        'id': [''],
        'desc': ['']
      });
    }


  }

  submitForm() {
    this.formSubmitted = true;
    if (this.incidentForm.valid) {
      console.log('Formulaire envoyé');
        if (this.incidentForm.value['id'] === '') {
          this.incidentService.addIncident(new Incident(
            null,
            new Date(Date.now()),
            null,
            this.incidentForm.value['desc'],
            this.incidentForm.value['mail'],
            true,
            this.incidentForm.value['level'],
            this.incidentForm.value['progress'],
            this.incidentForm.value['titre'],
            this.incidentForm.value['type']
          )).subscribe(
            incidentCree => {
              console.log('Incident créé, id = ' + incidentCree.id);
              this.incidentForm.reset();
              this.formSubmitted = false;
              this.sortie.emit('INSERTED');
            }
          );
        } else {
          this.incidentService.updateIncident(new Incident(
            this.entree.id,
            this.entree.dateCreation,
            new Date(Date.now()),
            this.incidentForm.value['desc'],
            this.incidentForm.value['mail'],
            this.entree.open,
            this.incidentForm.value['level'],
            this.incidentForm.value['progress'],
            this.incidentForm.value['titre'],
            this.incidentForm.value['type']
          )).subscribe(
            incidentCree => {
              console.log('Incident créé, id = ' + incidentCree.id);
              this.incidentForm.reset();
              this.formSubmitted = false;
              this.sortie.emit('UPDATED');
            }
          );
        }


    }
  }

}
