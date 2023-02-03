import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilusersComponent } from './perfilusers.component';

describe('PerfilusersComponent', () => {
  let component: PerfilusersComponent;
  let fixture: ComponentFixture<PerfilusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
