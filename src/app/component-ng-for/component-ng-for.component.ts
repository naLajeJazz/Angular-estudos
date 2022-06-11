import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-for',
  templateUrl: './component-ng-for.component.html',
  styleUrls: ['./component-ng-for.component.css']
})
export class ComponentNgForComponent implements OnInit {

  public card:Boolean=false;
  public lista:Array<{nome:string,valor:number}>=[
    {nome:"x-box",valor:100},
    {nome:"playstation",valor:500},
    {nome:"nintendo",valor:100}]
  
  public activeCard=()=>{if(!this.card){this.card=true}else{this.card=false}};
  public add=()=>{this.lista.push({nome:"atari",valor:1000}) };
  public eventAdd=(event:number)=>{this.lista.splice(event,1)}


  constructor() { }

  ngOnInit(): void {
  }

}
