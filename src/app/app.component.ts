import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PersonTableComponent } from './components/person-table/person-table.component';

@Component({
  selector: 'app-root',
  imports: [PersonTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  name = 'Nikos'

  person = {
    givenName: 'Nikos',
    surName : 'Baxevanis',
    age : 31,
    email : 'baxemb@aueb.gr'
  }
}
