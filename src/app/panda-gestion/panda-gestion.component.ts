import { Component, OnInit } from '@angular/core';
import {PandaService} from '../panda.service';

@Component({
  selector: 'app-panda-gestion',
  templateUrl: './panda-gestion.component.html',
  styleUrls: ['./panda-gestion.component.css']
})
export class PandaGestionComponent implements OnInit {

  continents = ['Europe', 'Amerique du Nord', 'Amerique du Sud', 'Afrique', 'Asie', 'Oceanie', 'Antarctique'];

  constructor(private pandaService: PandaService) { }

  ngOnInit() {

  }

}
