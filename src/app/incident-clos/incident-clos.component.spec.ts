import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentClosComponent } from './incident-clos.component';

describe('IncidentClosComponent', () => {
  let component: IncidentClosComponent;
  let fixture: ComponentFixture<IncidentClosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentClosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentClosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
