import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecoverUserInformationComponent } from './recover-user-information.component';

describe('RecoverUserInformationComponent', () => {
  let component: RecoverUserInformationComponent;
  let fixture: ComponentFixture<RecoverUserInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecoverUserInformationComponent]
    });
    fixture = TestBed.createComponent(RecoverUserInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
