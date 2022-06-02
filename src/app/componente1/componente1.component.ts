import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  public titulo:string="Clique na bolinha";
  public jumpBall ="https://piskel-imgstore-b.appspot.com/img/c8ec5978-e2ac-11ec-bdbc-8d97f02f2eb1.gif"
  
public muda=()=>{
  this.jumpBall="https://piskel-imgstore-b.appspot.com/img/f8376a02-e2a6-11ec-b05e-8d97f02f2eb1.gif"
}

  constructor() { }

  ngOnInit(): void {
    
  }

}
