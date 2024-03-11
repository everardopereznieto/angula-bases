import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Superman'];
  public deleteHeroe?: string = '';
  removeLasHeroe(): void {
    this.deleteHeroe = this.heroNames.pop();
  }
}
