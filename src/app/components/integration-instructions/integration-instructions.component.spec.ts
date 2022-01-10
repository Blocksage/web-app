import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegrationInstructionsComponent } from './integration-instructions.component';

describe('IntegrationInstructionsComponent', () => {
  let component: IntegrationInstructionsComponent;
  let fixture: ComponentFixture<IntegrationInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegrationInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IntegrationInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
