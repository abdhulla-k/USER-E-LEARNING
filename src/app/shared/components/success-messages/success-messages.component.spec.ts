import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessMessagesComponent } from './success-messages.component';

describe('SuccessMessagesComponent', () => {
  let component: SuccessMessagesComponent;
  let fixture: ComponentFixture<SuccessMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SuccessMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
