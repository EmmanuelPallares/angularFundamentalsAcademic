import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  items: any[] = [
    ['Platano', 10],
    ['Manzana', 15],
    ['Aguacate', 30],
  ]; //Reto *ngFor
  newItem = ''; //Reto *ngFor
  newPrice = ''; //Reto *ngFor

  addItem() {
    this.items.push([this.newItem, this.newPrice]);
    this.newItem = '';
    this.newPrice = '';
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  name = 'Nicolas';
  age = 18;
  img = 'https://www.w3schools.com/howto/img_avatar.png';
  btnDisabled = true;
  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age += 1;
  }
  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
}
