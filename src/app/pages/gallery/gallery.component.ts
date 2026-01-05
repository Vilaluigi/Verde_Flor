import { ChangeDetectionStrategy, Component, signal, Signal } from '@angular/core';
import { galleryCategoria } from '../../shared/models/gallery.model';
import { NgClass } from '@angular/common';
import { Spaces } from '../../shared/models/spaces.model';

@Component({
  selector: 'app-gallery',
  imports: [NgClass],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GalleryComponent {
  ValorCategoria= signal<galleryCategoria> ('Todos')
  categorias: galleryCategoria[] = [
    'Todos',
    'Cerimônia',
    'Recepção',
    'Decoração',
    'Noite'
  ]

  MudarCategoria(item: galleryCategoria): void {
    this.ValorCategoria.set(item);
  }



  spaces: Spaces[]=[{
      id:1,
      capacity:200,
      image:'/jardim.webp', 
      description:"Um santuário natural para cerimônias e recepções ao ar livre, banhado pela luz do sol e perfumado por flores.",
      title:"Jardim",
      imgAlt:"Flores Jardim"
  
    },
    {
      id:2,
      capacity:100,
      image:'/gazebo.webp',
      description:"Um ambiente intimista para votos, com vista para a paisagem deslumbrante, perfeito para momentos memoráveis.",
      title:"Gazebo",
      imgAlt:"Gazebo"
    },
  
    {
      id:3,
      capacity:50,
      image:'/piscina.webp', 
      description:"Um espaço encantador para coquetéis ou encontros descontraídos à beira da água, que adiciona um toque refrescante ao seu evento.",
      title:"Piscina",
      imgAlt:"Piscina"
  
    },
    {
      id:4,
      capacity:0,
      image:'/Cozinha.webp',
      description:"Totalmente equipada para receber seus eventos, garantindo excelência culinária e serviço impecável para eventos de qualquer porte.",
      title:"Cozinha",
      imgAlt:"Cozinha"
    },
     {
      id:5,
      capacity:100,
      image:'/estacionamento.webp',
      description:"Estacionamento amplo e seguro disponível para todos os seus convidados, garantindo comodidade e tranquilidade.",
      title:"Estacionamento",
      imgAlt:"Estacionamento"
    },
  ]
}
