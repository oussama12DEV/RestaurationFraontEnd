import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaddieComponent } from './caddie.component';

describe('CaddieComponent', () => {
  let component: CaddieComponent;
  let fixture: ComponentFixture<CaddieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CaddieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CaddieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
