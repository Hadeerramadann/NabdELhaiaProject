import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostContentCommentComponent } from './post-content-comment.component';

describe('PostContentCommentComponent', () => {
  let component: PostContentCommentComponent;
  let fixture: ComponentFixture<PostContentCommentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostContentCommentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostContentCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
