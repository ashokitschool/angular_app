import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCaseworkersComponent } from './view-caseworkers.component';

describe('ViewCaseworkersComponent', () => {
  let component: ViewCaseworkersComponent;
  let fixture: ComponentFixture<ViewCaseworkersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewCaseworkersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewCaseworkersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
