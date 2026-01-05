import { ChangeDetectionStrategy, Component } from '@angular/core';


export interface Cards{
  id: number;
  title: string;
  description: string;
  image: string;
  imgAlt: string
}
export interface Jornada{
  id: number;
  title: string;
  description:string;
  image:string;
  imgAlt: string
}
@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class HomeComponent {
   arrayCards: Cards[] = [
    {
      id: 1,
      title: 'Jardim Encantado',
      description: 'Paisagens exuberantes e flores vibrantes criam o cenário perfeito para cerimônias ao ar livre cheias de encanto e romance.',
      image: '/jardim.svg',
      imgAlt:'Jardim Encantado'
    },
    {
      id: 2,
      title: 'Gazebo Encantador',
      description: 'Um elegante ponto focal, ideal para votos íntimos e registros fotográficos inesquecíveis.',
      image: '/gazebo.svg',
      imgAlt:'Gazebo Encantador'
    },
    {
      id: 3,
      title: 'Salão de Eventos Coberto',
      description: 'Um espaço amplo e sofisticado para recepções memoráveis, com versatilidade para se adaptar a qualquer estilo de evento.',
      image: '/salaoEventos.svg',
      imgAlt:'Salão de Eventos Coberto'
    },
    {
      id: 4,
      title:'Piscina & Lounge',
      description: 'Ambiente descontraído e charmoso, perfeito para coquetéis e celebrações sob o céu estrelado.',
      image: '/piscina.svg' ,
      imgAlt:'Piscina'
    }
  ];

  arrayJornada: Jornada[] = [{
    id: 1,
    title: 'Visita',
    description: 'Agende um tour personalizado pelo nosso local encantador.',
    image: '/visita.svg',
    imgAlt:'Visita'
  },
  {
    id: 2,
    title: 'Orçamento',
    description: 'Receba uma proposta personalizada que reflita o evento dos seus sonhos.',
    image: '/orcamento.svg',
    imgAlt:'Orçamento'
  },
  {
    id: 3,
    title: 'Reserva',
    description: 'Confirme sua data e comece a planejar o seu dia inesquecível.',
    image: '/reserva.svg',
    imgAlt:'Reserva'
  }
  ];
}
