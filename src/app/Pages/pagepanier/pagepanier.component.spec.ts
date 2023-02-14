import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagepanierComponent } from './pagepanier.component';

describe('PagepanierComponent', () => {
  let component: PagepanierComponent;
  let fixture: ComponentFixture<PagepanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagepanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagepanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
