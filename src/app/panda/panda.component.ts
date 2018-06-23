import {Component, Input, OnInit} from '@angular/core';
import {Panda} from '../panda';

@Component({
  selector: '[app-panda]',
  templateUrl: './panda.component.html',
  styleUrls: ['./panda.component.css']
})
export class PandaComponent implements OnInit {

  @Input() panda: Panda;

  constructor() { }

  ngOnInit() {
  }

}
