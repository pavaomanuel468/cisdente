import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonDirective } from "primeng/button";
import { InputText } from "primeng/inputtext";
import { Checkbox } from "primeng/checkbox";
import { Toast } from "primeng/toast";
import { Router } from '@angular/router';
import { RegisterComponent } from '../account/register/register.component';
import { UserServisseService } from '../../User/user-servisse.service';
import { login } from './login';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule,ButtonDirective, InputText, Checkbox, Toast],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loading=false
  lembrar = new FormControl()

  register = new RegisterComponent();
  router = inject(Router)

  userServisse = inject(UserServisseService)

  formulario = new FormGroup({
    login: new FormControl(''),
    password: new FormControl('')
  })

  login(){
    console.log("rota")
    let login = this.formulario.value as login

    this.userServisse.log(login.login, login.password) 
  
  }

  frutas(){
    this.userServisse.frutas().subscribe(frutas => frutas.forEach(f => console.log(f)))
    /*let frutas = [this.userServisse.frutas()]
    frutas.forEach(fruta => fruta.forEach(f => console.log(f)));*/
  }

  logout(){
    this.userServisse.logout()
  }

}
