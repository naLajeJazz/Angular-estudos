import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JumpBallComponent } from './jump-ball.component';

describe('JumpBallComponent', () => {
  let component: JumpBallComponent;
  let fixture: ComponentFixture<JumpBallComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JumpBallComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JumpBallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
