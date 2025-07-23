import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailProduit } from './detail-produit';

describe('DetailProduit', () => {
  let component: DetailProduit;
  let fixture: ComponentFixture<DetailProduit>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailProduit]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProduit);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
