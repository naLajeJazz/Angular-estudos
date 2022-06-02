import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jump-ball',
  templateUrl: './jump-ball.component.html',
  styleUrls: ['./jump-ball.component.css']
})
export class JumpBallComponent implements OnInit {

  
  public jumpBall ="https://piskel-imgstore-b.appspot.com/img/c8ec5978-e2ac-11ec-bdbc-8d97f02f2eb1.gif"
  
public muda=()=>{
  this.jumpBall="https://piskel-imgstore-b.appspot.com/img/f8376a02-e2a6-11ec-b05e-8d97f02f2eb1.gif"

setTimeout(()=>{this.jumpBall="https://piskel-imgstore-b.appspot.com/img/c8ec5978-e2ac-11ec-bdbc-8d97f02f2eb1.gif"},2250)

}


  constructor() { }

  ngOnInit(): void {
  }

}
