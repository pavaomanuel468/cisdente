import { Component } from '@angular/core';
import { Menubar } from 'primeng/menubar';
import { Menu } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { SidebarModule } from 'primeng/sidebar';
import { MenuItem } from 'primeng/api';
import { ButtonDirective, ButtonIcon, ButtonModule} from "primeng/button";
import { InputTextModule } from 'primeng/inputtext';
import { TextareaModule } from 'primeng/textarea';

@Component({
  selector: 'app-section-seven',
  imports: [ButtonModule, ButtonDirective, MenubarModule, SidebarModule, ButtonDirective, InputTextModule, TextareaModule],
  templateUrl: './section-seven.component.html',
  styleUrl: './section-seven.component.css'
})
export class SectionSevenComponent {


  items: MenuItem[] = [

    {
      label:'Trabalhos',
    }

  ]


  
}
