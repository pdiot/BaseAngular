import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaGestionComponent } from './panda-gestion.component';

describe('PandaGestionComponent', () => {
  let component: PandaGestionComponent;
  let fixture: ComponentFixture<PandaGestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandaGestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandaGestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
