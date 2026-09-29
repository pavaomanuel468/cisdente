import { Component, inject } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button'
import {TabViewModule} from 'primeng/tabview';
import {ToolbarModule} from 'primeng/toolbar';
import { Menubar } from "primeng/menubar";

import { MenubarModule } from 'primeng/menubar';

import { InputTextModule } from 'primeng/inputtext';

import { AvatarModule } from 'primeng/avatar';
import { MenuModule } from "primeng/menu";
import { OverlayPanelModule } from "primeng/overlaypanel";
import { BadgeModule } from "primeng/badge";
import { RouterLink } from "@angular/router";
import { UserServisseService } from '../../User/user-servisse.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  standalone: true,
  imports: [ButtonModule, TabViewModule, ToolbarModule, Menubar, MenubarModule,
    InputTextModule, AvatarModule, MenuModule, OverlayPanelModule, BadgeModule, RouterLink],
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  [x: string]: any;

    items: MenuItem[] = [
      {
        label: 'Serviços', 
        icon: 'pi pi-home',
        routerLink: ['/dashboard']
      },
      {
        label: 'On-line',
        icon: 'pi pi-box',
        items: [
          {
            label:'login',
            icon: 'pi pi-user',
            routerLink: ['/login'],
             command: ()=>{
              this.logout()
            }
          },
          {
            label: 'logout', 
            icon: 'pi pi-list',
            routerLink: ['/login'],
            command: ()=>{
              this.logout()
            }
          },
          {
            label: 'Criar nova conta',
            icon: 'pi pi-users',
            routerLink: ['/novaConta']
          }
        ]
      },
      {
        label: 'Especiais',
        icon: 'pi pi-users',
        items: [
          {
            label:'Conheça Dentistas',
            icon: 'pi pi-users'
          },
          {
            label: 'Marcar Consulta',
            icon: 'pi pi-list',
            routerLink: ['/marcarConsulta']
          }
        ]
      },
      {
        label:'Produtos',
        icon:'pi pi-chart-bar',
        items: [
          {
            label: 'Tabela de consultas',
            icon: 'pi pi-box',
            routerLink: ['/tabelaConsultas'],
          },
          {
            label: 'Conheça a Agência',
            icon: 'pi pi-chart-line'
          }
        ]
      }
    ];
    
    userMenuItems: MenuItem[]= [
      {
        label:'Perfil',
        icon:'pi pi-user',
        command: ()=>{
          //Abrir configurações
        }
      },
      {
        label:'Configurações',
        icon: 'pi pi-cog',
        command: ()=>{
          //faz algo
        }
      },
      {
        separator: true
      },
      {
        label: 'Sair',
        icon: 'pi pi-sign-out',
        command: ()=>{
          //faz algo
        }
      }
    ]

    notificationItems: MenuItem[] = [
      {
        label: '3 novas mensagens',
        icon: 'pi pi-envelope'
      },
      {
        label: 'Atualização disponivel',
        icon: 'pi pi-download'
      }
    ]
    
  userServisse = inject(UserServisseService)
  logout(){
    this.userServisse.logout()
  }

}
