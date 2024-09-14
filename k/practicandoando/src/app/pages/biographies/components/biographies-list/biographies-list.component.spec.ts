import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BiographiesListComponent } from './biographies-list.component';

describe('BiographiesListComponent', () => {
  let component: BiographiesListComponent;
  let fixture: ComponentFixture<BiographiesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BiographiesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BiographiesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
