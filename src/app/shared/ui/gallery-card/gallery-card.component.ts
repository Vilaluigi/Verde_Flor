import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Spaces } from '../../models/spaces.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-gallery-card',
  imports: [RouterLink],
  templateUrl: './gallery-card.component.html',
  styleUrl: './gallery-card.component.scss',
   changeDetection: ChangeDetectionStrategy.OnPush,
   standalone:true
})
export class GalleryCardComponent {
   @Input({required:true}) space!:Spaces
}
