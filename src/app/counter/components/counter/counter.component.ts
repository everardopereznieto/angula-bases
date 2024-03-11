import { Component} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
<h2>Contador {{ counter }}</h2>
<button (click)="increaseBy(1)">+1</button>
<button (click)="increaseBy(-1)">-1</button>
<button (click)="reset(10)">Reset</button>

  `

})

export class CounterComponent  {
  constructor() { }
  public title:string = 'Mi primer componente';
  public subTitle:string = 'En algular';
  public counter:number =10;

  increaseBy(value:number):void{
    this.counter +=value;
  }

  reset(value:number):void{
    this.counter =value;
  }

}
// import { Component } from "@angular/core";

// @Component({
//   selector:'app-counter',
//   template:'<h1>hola</h1>'
// })
// export class CounterComponent{

// }
