import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayTab: string = 'recipes';

  getSelectedTab(tabName: string) {
    this.displayTab = tabName;
  }

}
