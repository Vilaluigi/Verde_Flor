import { ChangeDetectionStrategy, Component } from '@angular/core';
import { motivosCategoria } from '../../shared/models/motivos.model';


@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
  standalone:true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutComponent {
   motivos: motivosCategoria[]=[{
    id: 1,
    title:'Exclusividade Total',
    description: 'O espaço é inteirinho seu! Aqui, sua festa é a única prioridade e você aproveita cada segundo com total privacidade.',
    image: '/exclusividade.svg'
  },
  {
    id: 2,
    title:'Estilo com Alma',
    description: 'Unimos o rústico ao moderno para criar um ambiente lindo e natural, perfeito para fotos e memórias inesquecíveis.',
    image: '/estilo.svg'
  },
  {
     id: 3,
    title:'Cuidado em cada Detalhe',
    description: 'Nossa equipe cuida de tudo para que o evento tenha a sua cara e você só precise se preocupar em se divertir.',
    image: '/reserva.svg'
  }
]
NossosFundadores: any[] =[{
  id:1,
  titulo:'Luciano & Adriana',
  descricao:'Título do fundador 1',
   image: ''
}]


}
