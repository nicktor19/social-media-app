import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegLandingComponent } from './reg-landing.component';

describe('RegLandingComponent', () => {
  let component: RegLandingComponent;
  let fixture: ComponentFixture<RegLandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegLandingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
