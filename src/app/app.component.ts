import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./layouts/header/header.component";
import { ImgTeamComponent } from './layouts/img-team/img-team.component';
import { SectionOneComponent } from "./layouts/main/section-one/section-one.component";
import { SectionTwoComponent } from "./layouts/main/section-two/section-two.component";
import { SectionThreeComponent } from "./layouts/main/section-three/section-three.component";
import { SectionFourComponent } from "./layouts/main/section-four/section-four.component";
import { SectionFiveComponent } from "./layouts/main/section-five/section-five.component";
import { SectionSixComponent } from "./layouts/main/section-six/section-six.component";
import { SectionSevenComponent } from "./layouts/main/section-seven/section-seven.component";
import { RodapeComponent } from "./layouts/rodape/rodape.component";
import { HeaderTwoComponent } from "./layouts/secondHeader/header-two.component";
import { MobileHeroComponent } from "./layouts/mobile-hero/mobile-hero.component";


@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet, HeaderComponent, ImgTeamComponent, SectionOneComponent, SectionTwoComponent, SectionThreeComponent, 
  SectionFourComponent, SectionFiveComponent, SectionSixComponent, SectionSevenComponent, RodapeComponent, HeaderTwoComponent, MobileHeroComponent,
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cisdente';
}
