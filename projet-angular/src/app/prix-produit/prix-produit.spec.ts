import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrixProduit } from './prix-produit';

describe('PrixProduit', () => {
  let component: PrixProduit;
  let fixture: ComponentFixture<PrixProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrixProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrixProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
