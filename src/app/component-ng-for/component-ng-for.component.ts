import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-ng-for',
  templateUrl: './component-ng-for.component.html',
  styleUrls: ['./component-ng-for.component.css']
})
export class ComponentNgForComponent implements OnInit {

  public card:Boolean=false;
  
  public activeCard=()=>{if(!this.card){this.card=true}else{this.card=false}}
  constructor() { }

  ngOnInit(): void {
  }

}