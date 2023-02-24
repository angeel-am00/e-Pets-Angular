import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComentariopubliComponent } from './comentariopubli.component';

describe('ComentariopubliComponent', () => {
  let component: ComentariopubliComponent;
  let fixture: ComponentFixture<ComentariopubliComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComentariopubliComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComentariopubliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
