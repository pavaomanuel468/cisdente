import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';
import { Button } from 'primeng/button';
import { ButtonModule } from 'primeng/button';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-section-five',
  imports: [CardModule, Button, ButtonModule, CarouselModule],
  templateUrl: './section-five.component.html',
  styleUrl: './section-five.component.css'
})
export class SectionFiveComponent {

   items = [
    {
      title: 'Pagamento Único',
      subtitle: 'Gerencie sua consultas', 
      oldPrice: '2.500,00 kz',
      newPrice: '1.500,00kz'
    },
     {
      title: 'Plano Mensal',
      subtitle: 'Pagamentos recorrentes sem taxas', 
      oldPrice: '5.500,00 kz',
      newPrice: '1.500,00kz'
    },
     {
      title: 'Plano anual',
      subtitle: 'Marque sua consulta sempre que quiser', 
      oldPrice: '15.500,00 kz',
      newPrice: '10,500,00kz'
    },
     {
      title: 'Plano Familiar',
      subtitle: 'Para toda a sua familia com beneficios', 
      oldPrice: '25.000,00 kz',
      newPrice: '20.850,00kz'
    },
  ]

}
