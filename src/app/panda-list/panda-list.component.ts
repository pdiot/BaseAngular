import {Component, Input, OnInit} from '@angular/core';
import {PandaService} from '../panda.service';
import {Panda} from '../panda';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panda-list',
  templateUrl: './panda-list.component.html',
  styleUrls: ['./panda-list.component.css']
})
export class PandaListComponent implements OnInit {

  @Input() continent: number;

  pandas: Panda[];

  pandaToEdit: Panda;
  private modalRef;

  constructor(private pandaService: PandaService, private modalService: NgbModal) { }

  ngOnInit() {
    this.pandas = new Array<Panda>();
    this.pandaService.pandaGetByContinent(this.continent).subscribe(
      pandas => {
        for (const panda of pandas) {
          this.pandas.push(panda);
        }
        console.log('Fetched all pandas from continent ' + this.continent);
      }
    );
  }

  edit(panda: Panda, content) {
    this.pandaToEdit = panda;
    this.open(content);
  }

  open(content): void {
    this.modalRef = this.modalService.open(content);
  }

  remove(panda: number): void {
    this.pandaService.deletePanda(panda).subscribe(
      pandaDel => {
        console.log('Deleted panda id = ' + pandaDel.id);
        this.ngOnInit();
      }
    );
  }

  updateValue(event): void {
    if (event === 'INSERTED') {
      this.modalRef.close();
      this.ngOnInit();
    } else if (event === 'UPDATED') {
      this.pandaToEdit = null;
      this.modalRef.close();
      this.ngOnInit();
    }
  }


}
