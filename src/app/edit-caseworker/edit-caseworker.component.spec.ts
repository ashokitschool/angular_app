import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCaseworkerComponent } from './edit-caseworker.component';

describe('EditCaseworkerComponent', () => {
  let component: EditCaseworkerComponent;
  let fixture: ComponentFixture<EditCaseworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditCaseworkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditCaseworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
