import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Panda} from '../panda';
import {PandaService} from '../panda.service';

@Component({
  selector: 'app-panda-form',
  templateUrl: './panda-form.component.html',
  styleUrls: ['./panda-form.component.css']
})
export class PandaFormComponent implements OnInit {


  @Input() entree: Panda;
  @Output() sortie = new EventEmitter();
  pandaForm: FormGroup;
  formSubmitted = false;
  formtitle: string;
  buttontext: string;

  constructor(private fb: FormBuilder, private pandaService: PandaService) { }

  ngOnInit() {
    if (this.entree) {
      this.setFormInput();
    } else {
      this.setFormNoInput();
    }
  }

  setFormNoInput() {
    this.formtitle = 'Panda';
    this.buttontext = 'Add';
    this.pandaForm = this.fb.group({
      'name': [ '', Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      'age': [ '', Validators.compose([
        Validators.required
      ])],
      'continent': [ '', Validators.compose([
        Validators.required
      ])],
      'id': ['']
    });
  }

  setFormInput() {
    this.formtitle = 'Update';
    this.buttontext = 'Update';
    this.pandaForm = this.fb.group({
      'name': [ this.entree.name, Validators.compose([
        Validators.minLength(3),
        Validators.required
      ])],
      'age': [ this.entree.age, Validators.compose([
        Validators.required
      ])],
      'continent': [ this.entree.continent.valueOf, Validators.compose([
        Validators.required
      ])],
      'id': [this.entree.id]
    });
  }

  getToPost(): Panda {
    return new Panda(
      null,
      this.pandaForm.value['name'],
      this.pandaForm.value['continent'],
      this.pandaForm.value['age']
    );
  }
  getToUpdate(): Panda {
    return new Panda(
      this.pandaForm.value['id'],
      this.pandaForm.value['name'],
      this.pandaForm.value['continent'],
      this.pandaForm.value['age']
    );
  }

  submitForm() {
    this.formSubmitted = true;
    if (this.pandaForm.valid) {
      console.log('Formulaire envoyé');
      if (this.pandaForm.value['id'] === '') {
        this.pandaService.addPanda(this.getToPost()).subscribe(
          pandaCree => {
            console.log('Panda créé, id = ' + pandaCree.id);
            this.pandaForm.reset();
            this.formSubmitted = false;
            this.sortie.emit('INSERTED');
          }
        );
      } else {
        this.pandaService.updatePanda(this.getToUpdate()).subscribe(
          pandaMAJ => {
            console.log('Panda mis à jour, id = ' + pandaMAJ.id);
            this.pandaForm.reset();
            this.formSubmitted = false;
            this.sortie.emit('UPDATED');
          }
        );
      }
    }
  }

}
