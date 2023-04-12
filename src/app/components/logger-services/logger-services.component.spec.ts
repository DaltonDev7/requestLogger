import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggerServicesComponent } from './logger-services.component';

describe('LoggerServicesComponent', () => {
  let component: LoggerServicesComponent;
  let fixture: ComponentFixture<LoggerServicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoggerServicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoggerServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
