import { Component, OnInit } from '@angular/core';
import { UserFormServiceService } from '../services/user-form-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
