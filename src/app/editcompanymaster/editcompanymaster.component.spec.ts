import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditcompanymasterComponent } from './editcompanymaster.component';

describe('EditcompanymasterComponent', () => {
  let component: EditcompanymasterComponent;
  let fixture: ComponentFixture<EditcompanymasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditcompanymasterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditcompanymasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
