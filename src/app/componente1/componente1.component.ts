import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  public text:string="";
  public valor:Boolean=false
  public valor2:Boolean=true
  public active=()=>{this.valor=true;this.valor2=false}
  public disable=()=>{this.valor=false;this.valor2=true}
  
  constructor() { }

  ngOnInit(): void {
    
  }

}
