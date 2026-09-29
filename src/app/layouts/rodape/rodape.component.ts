import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { ButtonModule } from 'primeng/button';
import { BadgeDirective } from "primeng/badge";

@Component({
  selector: 'app-rodape',
  imports: [Button, BadgeDirective, ButtonModule],
  templateUrl: './rodape.component.html',
  styleUrl: './rodape.component.css'
})
export class RodapeComponent {

}
