import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PandaFormComponent } from './panda-form.component';

describe('PandaFormComponent', () => {
  let component: PandaFormComponent;
  let fixture: ComponentFixture<PandaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PandaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PandaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
