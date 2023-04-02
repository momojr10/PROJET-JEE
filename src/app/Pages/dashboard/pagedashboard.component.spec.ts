import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagedashboardComponent } from './pagedashboard.component';

describe('PagedashboardComponent', () => {
  let component: PagedashboardComponent;
  let fixture: ComponentFixture<PagedashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagedashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagedashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
