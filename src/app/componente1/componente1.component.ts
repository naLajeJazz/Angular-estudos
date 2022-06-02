import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  public titulo:string="Eu vou vencer"

  constructor() { }

  ngOnInit(): void {
    
  }

}
