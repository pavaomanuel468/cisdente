import { Component, inject } from '@angular/core';
import { Button} from "primeng/button";
import { InputText } from "primeng/inputtext";
import { Checkbox } from "primeng/checkbox";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';
import { DatePicker } from "primeng/datepicker";
import { DropdownModule } from 'primeng/dropdown';
import { SelectModule } from 'primeng/select';
import { SelectButtonModule } from 'primeng/selectbutton';

import { UserServisseService } from '../../../User/user-servisse.service';
import { User } from '../User';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ButtonModule, Button, InputText, Checkbox, DatePicker,  ReactiveFormsModule, SelectModule, SelectButtonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  router = inject(Router)
  userServisse = inject(UserServisseService)
  users = new Array<User>()

  nome: string= 'Nome'

  generoSelecionado!:string

  formulario = new FormGroup({
    nome: new FormControl(''),
    numero: new FormControl(''),
    email: new FormControl(''),
    genero: new FormControl(''),
    dataNascimento: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''), 
  })
  
  generos = [
    {
      label: 'Masculino', value:'MASCULINO'
    },
    {
      label: 'Femenino', value: 'FEMENINO'
    }
  ]

  criarConta(){

    let user = this.formulario.value as User
    
    this.userServisse.novoUsuario(user)

    console.log(user)

    //this.router.navigate(['/main'])
  }

  usersList(){

   // console.log(this.usuarios)

   /*/ this.usuarios.forEach((e)=>{
      e.forEach((v)=>{
        console.log(v)
      })
    })*/

  }

}
