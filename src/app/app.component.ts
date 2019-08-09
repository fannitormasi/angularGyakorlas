import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'first-projekt';

  events = ['sziget', 'sound', 'fezen', 'szin', 'efott'];

  show = true;
  klikkeljunke = false;

  toggle() {
    this.show = !this.show;
  }

  demo(ev: MouseEvent) {
    console.log(ev.screenX);
  }
}
