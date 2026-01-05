import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
   standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent implements OnInit {

    form!:FormGroup
  constructor(private fb:FormBuilder){}


   ngOnInit():void{
    this.form = this.fb.group({
      nome: ['',Validators.required],
      email:['',Validators.email],
      telefone: ['',[Validators.required,Validators.minLength(11)] ],
      mensagem: ['', [Validators.required, Validators.minLength(3)]]
    })
   }

   Enviar():void{
    //this.form.valueChanges.subscribe(vlaor =>{ console.log("Como funciona isso mesmo?",vlaor); }
    //)
   }


}
