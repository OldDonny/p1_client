import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignviewComponent } from './signview.component';

describe('SignviewComponent', () => {
  let component: SignviewComponent;
  let fixture: ComponentFixture<SignviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
