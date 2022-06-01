import { Component, OnInit } from '@angular/core';
import { Animal } from 'src/app/Animal';
import { ListService } from 'src/app/service/list.service';

@Component({
  selector: 'app-list-render',
  templateUrl: './list-render.component.html',
  styleUrls: ['./list-render.component.css']
})
export class ListRenderComponent implements OnInit {
  animals: Animal[] = [
    { name: 'Turca', type: 'Dog', age: 2 },
    { name: 'Tom', type: 'Cat', age: 8 },
    { name: 'Frida', type: 'Dog', age: 4 },
    // { name: 'Bob', type: 'Horse', age: 10 },
    // { name: 'Bob', type: 'Horse', age: 10 },
    { name: 'Bob', type: 'Horser', age: 10 }
  ];

  animalsDetails = '';

  constructor(private listService: ListService) {}

  ngOnInit(): void {}

  showAge(animal: Animal): void {
    this.animalsDetails = `O pet ${animal.name} têm ${animal.age} anos!`;
  }
  removeAnimal(animal: Animal) {
    console.log('Removendo animal');
    // this.animals = this.listService.remove(this.animals, animal)
    this.animals = this.listService.remove(this.animals, animal);
  }
}
