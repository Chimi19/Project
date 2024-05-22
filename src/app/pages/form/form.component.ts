import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Form } from './form.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  @Output() registered = new EventEmitter<Form>();

logForm = new FormGroup({
  firstname: new FormControl('', Validators.required),
  lastname: new FormControl('', Validators.required),
  emailaddress: new FormControl('', Validators.email),
  password: new FormControl('', ([Validators.minLength(6), Validators.maxLength(12)]))
})
register(){
  console.log(this.logForm.value)
  this.registered.emit(this.logForm.value as Form);
  alert('Account Registered')
  this.logForm.reset({
    firstname: '',
    lastname: '',
    emailaddress: '',
    password: ''
  });
}

}
