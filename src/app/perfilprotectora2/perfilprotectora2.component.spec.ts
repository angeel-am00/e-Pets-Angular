import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Perfilprotectora2Component } from './perfilprotectora2.component';

describe('Perfilprotectora2Component', () => {
  let component: Perfilprotectora2Component;
  let fixture: ComponentFixture<Perfilprotectora2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Perfilprotectora2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Perfilprotectora2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
