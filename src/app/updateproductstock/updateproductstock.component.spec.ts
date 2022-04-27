import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateproductstockComponent } from './updateproductstock.component';

describe('UpdateproductstockComponent', () => {
  let component: UpdateproductstockComponent;
  let fixture: ComponentFixture<UpdateproductstockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateproductstockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateproductstockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
