import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentNgClassComponent } from './component-ng-class.component';

describe('ComponentNgClassComponent', () => {
  let component: ComponentNgClassComponent;
  let fixture: ComponentFixture<ComponentNgClassComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentNgClassComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentNgClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
