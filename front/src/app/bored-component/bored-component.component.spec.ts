import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoredComponentComponent } from './bored-component.component';

describe('BoredComponentComponent', () => {
  let component: BoredComponentComponent;
  let fixture: ComponentFixture<BoredComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoredComponentComponent]
    });
    fixture = TestBed.createComponent(BoredComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
