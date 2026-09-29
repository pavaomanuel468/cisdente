import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PrincipalComponent } from './layouts/principal/principal.component';
import { RegisterComponent } from './auth/account/register/register.component';
import { ConsultasComponent } from './layouts/consultas/consultas.component';
import { TabelaConsultasComponent } from './layouts/tabela-consultas/tabela-consultas.component';

export const routes: Routes = [
    {path: '', component: PrincipalComponent },
    {path: 'login', component: LoginComponent },
    {path: 'main', component: PrincipalComponent },
    {path: 'novaConta', component: RegisterComponent},
    {path: 'editar/:id', component: RegisterComponent},
    {path: 'marcarConsulta', component: ConsultasComponent},
    {path: 'tabelaConsultas', component: TabelaConsultasComponent}
];
     