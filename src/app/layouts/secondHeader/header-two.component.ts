import { Component, inject } from '@angular/core';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import {ToolbarModule} from 'primeng/toolbar';
import { RouterLink } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-header-two',
  imports: [ToolbarModule,  MenubarModule, MenuModule,
       MenuModule, RouterLink, AvatarModule],
  templateUrl: './header-two.component.html',
  styleUrl: './header-two.component.css'
})
export class HeaderTwoComponent {

  items = [
    {
      label: 'Marcar Consultas',
      routerLink: '/marcarConsulta'
    },
    {
      label: 'LogIn',
      routerLink: '/login'
    },
    {
      label: 'Tabela De Consultas',
      routerLink: '/tabelaConsultas'
    },
    {
      label: 'Criar Minha Conta',
      routerLink: '/novaConta'
    }
  ]
 
}
