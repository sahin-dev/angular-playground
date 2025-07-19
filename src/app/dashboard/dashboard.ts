import { Component, signal } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    template:`<h1 [class]=  "classes" [class] = "buttonClicked" [class.class3] = "isCLicked"  (click)="setName('Siraj')">Dashboard {{name}}</h1>`,
    styleUrl: './dashboard.css'
})
export class Dashboard {
  // Dashboard component logic goes here
  name = "Sahin";
  classes = ["my-class", "my-class2"];
  isCLicked = false;

  onClick() {
    console.log('Dashboard clicked');
  }

  getName() {
    return 'My App';
  }
  buttonClicked = {
    'button-class':  true,
  }
  setName(newName: string) {
    this.name = newName;
    this.isCLicked = !this.isCLicked;
  }
}