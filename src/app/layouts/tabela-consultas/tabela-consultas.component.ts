import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { ImgTeamComponent } from "../img-team/img-team.component";
import { SectionSixComponent } from "../main/section-six/section-six.component";
import { TableModule } from 'primeng/table';
import { ButtonDirective } from "primeng/button";
import { RouterLink } from "@angular/router";

interface Consulta{
  tipoDeConsulta: string
  descricao: string
  duracao: number
  preco: number
}
@Component({
  selector: 'app-tabela-consultas',
  imports: [HeaderComponent, SectionSixComponent, TableModule, ButtonDirective, RouterLink],
  templateUrl: './tabela-consultas.component.html',
  styleUrl: './tabela-consultas.component.css'
})

export class TabelaConsultasComponent {

  agendar(consulta: Consulta){
    console.log(consulta)
  }

  consultas: Consulta[] = [
    {
      tipoDeConsulta: 'Consulta Geral',
      descricao: 'Avaliação geral do estado de saúde do paciente',
      duracao: 30,
      preco: 5000 
    },
    {
      tipoDeConsulta: 'Analise Dentária',
      descricao: 'Controle e analise dos dentes',
      duracao: 15,
      preco: 2500 
    },
    {
      tipoDeConsulta: 'Exame bocal',
      descricao: 'Avaliação geral da boca paciente',
      duracao: 25,
      preco: 3000 
    },
    {
      tipoDeConsulta: 'Consulta Medical',
      descricao: 'Controle medical e analise dos dentes',
      duracao: 10,
      preco: 3500 
    },
    {
      tipoDeConsulta: 'Controle do paciente',
      descricao: 'Avaliação geral do estado de saúde do paciente',
      duracao: 45,  
      preco: 4000 
    },
    {
      tipoDeConsulta: 'Odontologia',
      descricao: 'Resultados rápidos e confiaveis para um diagnostico preciso',
      duracao: 35,
      preco: 8000 
    },
    {
      tipoDeConsulta: 'Check Up do paciente',
      descricao: 'Cuidados da sua higiene bocal diariamente para o seu bem',
      duracao: 15,
      preco: 15000 
    },{
      tipoDeConsulta: 'Exame medico',
      descricao: 'Prevenção, diagnóstico e tratamento dos problemas bocal',
      duracao: 25,
      preco: 25000 
    }
  ]

  

  
}
