import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerprotectoraComponent } from './serprotectora.component';

describe('SerprotectoraComponent', () => {
  let component: SerprotectoraComponent;
  let fixture: ComponentFixture<SerprotectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerprotectoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SerprotectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
