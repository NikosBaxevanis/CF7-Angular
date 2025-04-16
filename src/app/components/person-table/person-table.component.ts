import { Component } from '@angular/core';

@Component({
  selector: 'app-person-table',
  imports: [],
  templateUrl: './person-table.component.html',
  styleUrl: './person-table.component.css'
})
export class PersonTableComponent {
  name = "Nikolas"

  person = {
    givenName: "Nikolas",
    surName: "Baxevanios",
    age : 31,
    email: "nikos@aueb.gr"
  }
}
