import { Component } from '@angular/core';
import { Form } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bored-component',
  templateUrl: './bored-component.component.html',
  styleUrls: ['./bored-component.component.css']
})

export class BoredComponentComponent {
  boredActivity: string = '';
  number:number=0;
  selectedActivityType: string ='';
  activType:string='';
  numberOfParticipants: number =1;
  activityTypes:string[]=[
    "education","recreationnal","social","diy","charity","cooking","relaxation","music","busywork"
  ]

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getBoredActivity();
  }

  getBoredActivity() {
    const apiUrl = `https://www.boredapi.com/api/activity?type=${this.selectedActivityType}&participants=${this.numberOfParticipants}`;

    
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        this.boredActivity = data.activity;

        if(this.selectedActivityType === ""){
          this.activType = data.type
        }

        if(this.numberOfParticipants < 0){
          this.numberOfParticipants = 0
        } else if (this.numberOfParticipants > 9 ){
          this.numberOfParticipants = 8
        }
        this.number = data.participants
      })
      .catch(error => {
        console.error('Erreur lors de la récupération de l\'activité:', error);
      });
  }

  onFormSubmit(){
    this.getBoredActivity()
  }


  navigateToHome() {
    this.router.navigate(['']); // Rediriger vers la page d'accueil
  }
  
  navigateToCreate() {
    this.router.navigate(['/create']); // Rediriger vers la page de création
  }


}