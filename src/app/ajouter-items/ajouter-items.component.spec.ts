import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AjouterItemsComponent } from './ajouter-items.component';

describe('AjouterItemsComponent', () => {
  let component: AjouterItemsComponent;
  let fixture: ComponentFixture<AjouterItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AjouterItemsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AjouterItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
