import { Component } from '@angular/core';
import { Button } from "primeng/button";
import { ButtonModule } from 'primeng/button';

import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-img-team',
  imports: [Button, ButtonModule, CarouselModule],
  templateUrl: './img-team.component.html',
  styleUrl: './img-team.component.css'
})
export class ImgTeamComponent {


  items = [
    {
      title: 'Cisdente',
      text: 'A melhor do pais',
      titulo: 'PLANOS DE SAÚDE DA CISDENTE',
      subTitulo: 'Temos o plano certo para si',
      dialogo: 'Oferecemos planos de saúde pensados para cuidar de você e da sua familia com qualidade.',
      image: 'teamC.png'
    }, 
      {
      title: 'Cisdente',
      text: 'A melhor do pais',
      titulo: 'PORQUE ESCOLHER A NÓS ?',
      subTitulo: 'Somos os melhores no que fazemos.',
      dialogo: 'Priorizamos a saúde e satisfação dos nossos pacientes em cada atendimento com muito cuidado.',
      image: 'teste.jpg'
    }, 
      {
      title: 'Cisdente',
      text: 'A melhor do pais',
      titulo: 'COMO NÓS TRABALHAMOS?',
      dialogo: 'Nosso processo é simples, rápido e focado no paciente, agendamos consuiltas de forma prática e organizada.',
      subTitulo: 'Fazemos o melhor para o paciente.',
      image: 'dente.jpg'
    }, 
      {
      title: 'Cisdente',
      text: 'A melhor do pais',
      titulo: 'NOSSA EQUIPE DE DOCTORES',
      subTitulo: 'Profissionais capacitados para si.',
      dialogo: 'Nossa equipe é formadam por médicos experientes e dedicados, profissionais comprometidos com excelência no atendimento.', 
      image: 'crianca.jpg'
    }
  ]

}
