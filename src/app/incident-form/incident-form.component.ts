import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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

  constructor(private fb: FormBuilder, private incidentService: IncidentService) { }


  ngOnInit() {
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

  submitForm() {
    this.formSubmitted = true;
    if (this.incidentForm.valid) {
      console.log('Formulaire envoyé');

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

    }
  }

}
