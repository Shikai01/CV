import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaveBarMainComponent } from './nave-bar-main.component';

describe('NaveBarMainComponent', () => {
  let component: NaveBarMainComponent;
  let fixture: ComponentFixture<NaveBarMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaveBarMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaveBarMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
