import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CageDialogComponent } from './cage-dialog.component';

describe('CageDialogComponent', () => {
  let component: CageDialogComponent;
  let fixture: ComponentFixture<CageDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CageDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CageDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
