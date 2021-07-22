import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector:'app-header',
  templateUrl:'./header.component.html'
})
export class HeaderComponent {
  @Output() tabSelected = new EventEmitter<string>();

  onTabSelected(tabName: string) {
    this.tabSelected.emit(tabName);
  }
}