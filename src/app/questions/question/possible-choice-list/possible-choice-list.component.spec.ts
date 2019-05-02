import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PossibleChoiceListComponent } from './possible-choice-list.component';

describe('PossibleChoiceListComponent', () => {
  let component: PossibleChoiceListComponent;
  let fixture: ComponentFixture<PossibleChoiceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PossibleChoiceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PossibleChoiceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
