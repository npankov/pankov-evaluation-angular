import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAddStatistiqueComponent } from './page-add-statistique.component';

describe('PageAddStatistiqueComponent', () => {
  let component: PageAddStatistiqueComponent;
  let fixture: ComponentFixture<PageAddStatistiqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageAddStatistiqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageAddStatistiqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
