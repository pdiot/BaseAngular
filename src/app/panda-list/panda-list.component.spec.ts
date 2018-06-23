import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaListComponent } from './panda-list.component';

describe('PandaListComponent', () => {
  let component: PandaListComponent;
  let fixture: ComponentFixture<PandaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
