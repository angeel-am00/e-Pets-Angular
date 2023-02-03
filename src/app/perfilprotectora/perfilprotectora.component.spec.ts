import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilprotectoraComponent } from './perfilprotectora.component';

describe('PerfilprotectoraComponent', () => {
  let component: PerfilprotectoraComponent;
  let fixture: ComponentFixture<PerfilprotectoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilprotectoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilprotectoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
