import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeReactiveFormComponent } from './type-reactive-form.component';

describe('TypeReactiveFormComponent', () => {
  let component: TypeReactiveFormComponent;
  let fixture: ComponentFixture<TypeReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TypeReactiveFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
