import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-type-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './type-reactive-form.component.html',
  styleUrl: './type-reactive-form.component.scss'
})
export class TypeReactiveFormComponent {
  email = new FormControl(null);
  resetForm() { 
    this.email.setValue('Rama'); // throws error infer type null so
    
  }
}
