import { Component, OnInit, NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

@NgModule({
  declarations: [
  ],
  imports: [
    MatIconModule
  ],
  providers: [],
  bootstrap: []
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openFullMenu() {
    document.getElementById('menuButton').classList.add("close");
    document.getElementById('fullMenu').classList.toggle("hidden");
    //document.getElementById('closeButton').classList.toggle('hidden');
  }
}
