import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { HeaderComponent } from "../../header/header.component";
import { HeaderTwoComponent } from "../../secondHeader/header-two.component";

@Component({
  selector: 'app-section-one',
  imports: [CardModule, HeaderComponent, HeaderTwoComponent],
  templateUrl: './section-one.component.html',
  styleUrl: './section-one.component.css'
})
export class SectionOneComponent {

}
