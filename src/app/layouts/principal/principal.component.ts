import { Component } from '@angular/core';
import { ImgTeamComponent } from "../img-team/img-team.component";
import { SectionOneComponent } from "../main/section-one/section-one.component";
import { SectionTwoComponent } from "../main/section-two/section-two.component";
import { SectionThreeComponent } from "../main/section-three/section-three.component";
import { SectionFourComponent } from "../main/section-four/section-four.component";
import { SectionFiveComponent } from "../main/section-five/section-five.component";
import { SectionSixComponent } from "../main/section-six/section-six.component";
import { SectionSevenComponent } from "../main/section-seven/section-seven.component";

@Component({
  selector: 'app-principal',
  imports: [ImgTeamComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, SectionFourComponent, SectionFiveComponent, SectionSixComponent, SectionSevenComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {

}
