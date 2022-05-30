import { Component, OnInit } from "@angular/core";
import { Animal } from "src/app/Animal";


@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css'],
})
export class ListRenderComponent implements OnInit {

  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 2 },
    { name: 'Tom', type: 'Cat', age: 8 },
    { name: 'Frida', type: 'Dog', age: 4 },
    { name: 'Bob', type: 'Horse', age: 10 }
  ];

  animalsDetails = '';

  constructor() {}

  ngOnInit(): void {}

  showAge(animal: Animal): void{
    this.animalsDetails = `o pet ${animal.name} têm ${animal.age} anos!`;
  }
}
