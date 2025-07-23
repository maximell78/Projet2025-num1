import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienDetail } from './lien-detail';

describe('LienDetail', () => {
  let component: LienDetail;
  let fixture: ComponentFixture<LienDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LienDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LienDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
