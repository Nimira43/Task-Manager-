import { Component } from '@angular/core'
import { USERS } from '../users'

const randomIndex = Math.floor(Math.random() * USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  selectedUser = USERS[randomIndex]
  
  get imagePath() {
    return 'assets/users/' + this.selectedUser.image
  }

  onSelectUser() {
    const randomIndex = Math.floor(Math.random() * USERS.length)
    this.selectedUser = USERS[randomIndex]
  }
}