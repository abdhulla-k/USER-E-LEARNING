import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePartsComponent } from './home-parts.component';

describe('HomePartsComponent', () => {
  let component: HomePartsComponent;
  let fixture: ComponentFixture<HomePartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
