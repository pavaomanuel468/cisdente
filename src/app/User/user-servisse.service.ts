import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { User } from '../auth/account/User';
import { catchError, delay, ErrorObserver, Observable, of, pipe, take, tap } from 'rxjs';
import { login } from '../auth/login/login';
import { LoginResponse } from '../auth/login/LoginResponse';
import { Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserServisseService {

  private readonly API = 'auth'

  private router = inject(Router)

  constructor(private httpClient: HttpClient) { }

  token: string = ''

  logar(loguin: string, password:string){
    this.httpClient.post<LoginResponse>(`${this.API}/login`, {login: loguin, password:password})
    .pipe(catchError((e:ErrorObserver<HttpErrorResponse>)=>{
     console.log(e.error)
      return of()
    })).subscribe(pipe((r)=>{localStorage.setItem('token', r.token);
    }))
  }

  log(loguin: string, password:string){
    this.httpClient.post<LoginResponse>(`${this.API}/login`, {login: loguin, password:password})
    .subscribe(

      pipe((r)=>{
        {
          next:{
            this.router.navigate(['/main']) 
            localStorage.setItem('token', r.token);
            console.log(r.token)
          }
          error: (erro:ErrorObserver<HttpErrorResponse>)=>{
            console.log(erro.error)
          }
        }
      })

    )
  }

  novoUsuario(user: User){
    return this.httpClient.post<User>( `${this.API}/login`, user).subscribe()
  }

  logout():void{
      localStorage.removeItem('token')
  }

  getToken(): string | null{
    return localStorage.getItem('token')
  }


  frutas(){
     return this.httpClient.get<string[]>(this.API.concat(`/frutas`))
  }
  
}
