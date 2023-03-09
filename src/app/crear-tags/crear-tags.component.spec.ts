import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearTagsComponent } from './crear-tags.component';

describe('CrearTagsComponent', () => {
  let component: CrearTagsComponent;
  let fixture: ComponentFixture<CrearTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearTagsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
