import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FicheProduit } from './fiche-produit';

describe('FicheProduit', () => {
  let component: FicheProduit;
  let fixture: ComponentFixture<FicheProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FicheProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FicheProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
