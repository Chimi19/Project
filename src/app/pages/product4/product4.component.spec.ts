import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Product4Component } from './product4.component';

describe('Product4Component', () => {
  let component: Product4Component;
  let fixture: ComponentFixture<Product4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Product4Component]
    });
    fixture = TestBed.createComponent(Product4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
