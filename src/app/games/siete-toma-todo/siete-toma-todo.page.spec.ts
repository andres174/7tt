import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SieteTomaTodoPage } from './siete-toma-todo.page';

describe('SieteTomaTodoPage', () => {
  let component: SieteTomaTodoPage;
  let fixture: ComponentFixture<SieteTomaTodoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SieteTomaTodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
