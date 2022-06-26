import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'laith-academy_angular-cc';
  newMemberName = "";
  members: string[] = [];
  // number or empty string
  numberOfTeams: number | "" = "";
  teams:  string[][] = []
  errorMessage: string = "";

  onInput(member: string) {
    this.newMemberName = member;
    
  } 

  onInputTeamNumber(team: string) {
    this.numberOfTeams = Number(team);
    console.log(this.numberOfTeams)
  }

  addMember() {
    // If Falsy
    if(!this.newMemberName) {
      this.errorMessage = "Name can't be empty" 
      return
    }

    this.members.push(this.newMemberName)
    this.newMemberName = ""
    this.errorMessage = ""
  }

  generateTeams() {
    if(!this.numberOfTeams || this.numberOfTeams <= 0) {
      this.errorMessage = "Invalid bumber of teams"
      return
    }

    // if member less than number of team
    if(this.members.length < this.numberOfTeams) {
      this.errorMessage = "Not Enought members"
      return
    }

    this.errorMessage = "";
    const allMembers = [...this.members]

    // while allMembers still exists execute logic
    while(allMembers.length) {
      for(let i = 0; i < this.numberOfTeams; i++ ) {
        // randoming
        const randomIndex = Math.floor(Math.random() * allMembers.length)
        const member = allMembers.splice(randomIndex, 1)[0]
        
        // if member undefined
        if(!member) break;

        if(this.teams[i]) {
          this.teams[i].push(member)
        } else {
          this.teams[i] = [member]
        }
  
      }
    }

    // Clear after generate
    this.members = [];
    this.numberOfTeams  = ""

  }
}
