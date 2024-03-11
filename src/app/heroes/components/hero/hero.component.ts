import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 10;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }
  public getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }
  public changeAge():void {
    this.age = 45;
  }
  public changeHeroe():void {
    this.name = 'Ever';
  }
  public resetForm():void{
    this.name='ironma';
    this.age=10;
  }
}
