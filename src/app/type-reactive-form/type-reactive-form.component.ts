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
  email = new FormControl('abc@gm.com', {nonNullable:true});
  resetForm() { 
    this.email.reset(); // if nonNullable is true; on Reset  ,it will have default value provided
    console.log(this.email.value);
    
  }
}
