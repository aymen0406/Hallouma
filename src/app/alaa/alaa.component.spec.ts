import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlaaComponent } from './alaa.component';

describe('AlaaComponent', () => {
  let component: AlaaComponent;
  let fixture: ComponentFixture<AlaaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlaaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlaaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
