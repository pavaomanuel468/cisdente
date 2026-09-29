import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Button } from "primeng/button";

@Component({
  selector: 'app-section-three',
  imports: [CardModule, Button],
  templateUrl: './section-three.component.html',
  styleUrl: './section-three.component.css'
})
export class SectionThreeComponent {

  items = [
    {
      title: 'Dr. Emiliano',
      subtitle: 'Tecnico Dentista',
      texto: 'O melhor de boa qualidade noque faz. Tratando os seus dentes para uma boa qualidade.',
      image: 'emi.jpg'
    },
    {
      title: 'Dr. V',
      subtitle: 'Especialista Dentario',
      texto: 'O melhor de boa qualidade noque faz. Tratando os seus dentes para uma boa qualidade.',
      image: 'dotor V.jpg'
    },
    {
      title: 'Dr. Emiliano',
      subtitle: 'Tecnico Dentista',
      texto: 'O melhor de boa qualidade noque faz. Tratando os seus dentes para uma boa qualidade.',
      image: 'emi.jpg'
    },
    {
      title: 'Dr. Emiliano',
      subtitle: 'Tecnico Dentista',
      texto: 'O melhor de boa qualidade noque faz. Tratando os seus dentes para uma boa qualidade.',
      image: 'emi.jpg'
    },
    {
      title: 'Dr. Emiliano',
      subtitle: 'Tecnico Dentista',
      texto: 'O melhor de boa qualidade noque faz. Tratando os seus dentes para uma boa qualidade.',
      image: 'emi.jpg'
    },
    {
      title: 'Dr. Emiliano',
      subtitle: 'Tecnico Dentista',
      texto: 'O melhor de boa qualidade noque faz. Tratando os seus dentes para uma boa qualidade.',
      image: 'emi.jpg'
    },
    {
      title: 'Dr. Emiliano',
      subtitle: 'Tecnico Dentista',
      texto: 'O melhor de boa qualidade noque faz. Tratando os seus dentes para uma boa qualidade.',
      image: 'emi.jpg'
    }
  ]
 
}
