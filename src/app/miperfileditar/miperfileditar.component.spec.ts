import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiperfileditarComponent } from './miperfileditar.component';

describe('MiperfileditarComponent', () => {
  let component: MiperfileditarComponent;
  let fixture: ComponentFixture<MiperfileditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MiperfileditarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiperfileditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
