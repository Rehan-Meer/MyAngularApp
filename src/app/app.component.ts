import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  selectedModule: string = "Recipes";

  onNavigate(_module: string)
  {
    console.log('Navigating to module:', _module);
    this.selectedModule = _module;
  }

}
