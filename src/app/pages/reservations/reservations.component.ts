import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { MatCalendar } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-reservations',
  imports: [MatCalendar, MatCardModule,ReactiveFormsModule, MatInputModule,MatDatepickerModule,MatNativeDateModule,MatFormFieldModule],
  templateUrl: './reservations.component.html',
  styleUrl: './reservations.component.scss',
  standalone:true,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservationsComponent implements OnInit {
  FomContact!: FormGroup
  selected = signal<Date | null>(new Date);

  constructor(private fb:FormBuilder){}

  onSelect($event:Date):void{
    console.log("pego evento mesmo??",$event);
    this.selected.set($event)
    
  }

  ngOnInit():void{
      this.FomContact = this.fb.group({
        nome:['',[Validators.required]],
        email:['',[Validators.email]],
        telefone:['',[Validators.required]],
        data:[null,[Validators.required]],
        totalPessoas:[null,[Validators.required]],
        mensagem:['',[Validators.required]]

      })
  }
  Enviar():void{
    this.FomContact.valueChanges.subscribe(valor=> console.log("Olha os valores",valor)
    )
  }
  
}
