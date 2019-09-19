import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContintComponent } from './contint.component';

describe('ContintComponent', () => {
  let component: ContintComponent;
  let fixture: ComponentFixture<ContintComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
