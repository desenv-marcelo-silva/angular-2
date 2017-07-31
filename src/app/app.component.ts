import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <h1>{{title}}</h1>
  <h2>{{hero.name}} details!</h2>
  <div><label>id: </label>{{hero.id}}</div>
  <div><label>name: </label>{{hero.name}}</div>
  `,
})
export class AppComponent  { 
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };  
  title = 'Tour of Heroes';
}

export class Hero {
  id: number;
  name: string;
}