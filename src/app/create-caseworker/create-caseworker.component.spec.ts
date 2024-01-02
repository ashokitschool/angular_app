import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCaseworkerComponent } from './create-caseworker.component';

describe('CreateCaseworkerComponent', () => {
  let component: CreateCaseworkerComponent;
  let fixture: ComponentFixture<CreateCaseworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCaseworkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateCaseworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
