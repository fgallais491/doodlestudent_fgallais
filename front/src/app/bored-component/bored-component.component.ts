import { Component } from '@angular/core';

@Component({
  selector: 'app-bored-component',
  templateUrl: './bored-component.component.html',
  styleUrls: ['./bored-component.component.css']
})

export class BoredComponentComponent {
  boredActivity: string = '';

  constructor() { }

  ngOnInit(): void {
    this.getBoredActivity();
  }

  getBoredActivity() {
    const apiUrl = 'https://www.boredapi.com/api/activity';

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.boredActivity = data.activity;
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de l\'activité:', error);
      });
  }








  
}