import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCaseworkerComponent } from './delete-caseworker.component';

describe('DeleteCaseworkerComponent', () => {
  let component: DeleteCaseworkerComponent;
  let fixture: ComponentFixture<DeleteCaseworkerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteCaseworkerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeleteCaseworkerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
