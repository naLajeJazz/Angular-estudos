import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jump-ball',
  templateUrl: './jump-ball.component.html',
  styleUrls: ['./jump-ball.component.css']
})
export class JumpBallComponent implements OnInit {
  
  public valor:Boolean=false;
  public valor2:Boolean=true;
  public jumpBall ="https://piskel-imgstore-b.appspot.com/img/c8ec5978-e2ac-11ec-bdbc-8d97f02f2eb1.gif"
  public card:Boolean=false;
  
  public activeCard=()=>{if(!this.card){this.card=true}else{this.card=false}}  
  public muda=()=>{
  this.jumpBall="https://piskel-imgstore-b.appspot.com/img/f8376a02-e2a6-11ec-b05e-8d97f02f2eb1.gif"
  setTimeout(()=>{this.jumpBall="https://piskel-imgstore-b.appspot.com/img/c8ec5978-e2ac-11ec-bdbc-8d97f02f2eb1.gif"},2250)
  }
  public active=()=>{this.valor=true;this.valor2=false}
  public disable=()=>{this.valor=false;this.valor2=true}

  constructor() { }

  ngOnInit(): void {
  }

}
