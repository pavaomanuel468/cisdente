import { Component, inject } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import {ButtonGroupModule} from 'primeng/buttongroup';
import { DatePicker } from "primeng/datepicker";
import { SelectModule } from 'primeng/select';
import { FormsModule } from '@angular/forms';
import { TextareaModule } from 'primeng/textarea';
import{TableModule} from 'primeng/table';
import { InputText } from "primeng/inputtext";
import { SectionSixComponent } from "../main/section-six/section-six.component";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-consultas',
  imports: [ButtonModule, ButtonGroupModule, DatePicker, SelectModule, FormsModule, TextareaModule, TableModule, InputText, SectionSixComponent, RouterLink],
  templateUrl: './consultas.component.html',
  styleUrl: './consultas.component.css'
})
export class ConsultasComponent {

  dataSelecionada: Date | null = null;

  opcaoSelecionada: any = null

  descricao: string=''

  router = inject(Router)

  opcoes = [
    {nome: 'HOJÊ', valor:1},
    {nome: 'AMANHÃ', valor:2},
    {nome: 'FINAL DE SEMANA', valor:3}
  ]
  horas = [
    {value: '08:30', valor: 1}, 
    {value: '12: 30', valor: 2},
    {value: '15:30', valor:3}
  ]

  procedimentos = [
    'Consulta geral',
    'Consulta de avaliação',
    'Consulta de dentária'
  ]; 

  consultas = [
    {
      data: 'Segunda-Feira',
      horario: '08:00',
      paciente: '',
      procedimento: null,
      concluido: false
    },
    {
      data: 'Terça-Feira',
      horario: '08:00',
      paciente: '',
      procedimento: null,
      concluido: false
    },
    {
      data: 'Quarta-Feira',
      horario: '08:00',
      paciente: '',
      procedimento: null,
      concluido: false
    },
    {
      data: 'Quinta-Feira',
      horario: '08:00',
      paciente: '',
      procedimento: null,
      concluido: false
    },
    {
      data: 'Sexta-Feira',
      horario: '08:00',
      paciente: '',
      procedimento: null,
      concluido: false
    }
  ];

  selecionarHorario(index: number){
    const consulta = this.consultas[index]

    console.log("Horario: " + consulta.horario)
    console.log("Dia: " + consulta.data)
  }

  alterarEstado(index: number){
    this.consultas[index].concluido =! this.consultas[index].concluido
  }

  enviarAgendamento(){
    console.log("AGENDAMENTOS:")
    console.log(this.consultas)

    console.log('DESCRIÇÃO DO PACIENTE: ')
    console.log(this.descricao)

    this.router.navigate(['/marcarConsulta'])
  }

}
