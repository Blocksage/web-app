import { Component, OnInit } from '@angular/core';
import { GqlConstants } from 'src/app/services/gql-constants/gql-constants.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: any = {}
  err = ''
  registerButtonLabel = 'Register'

  constructor(private gql: GraphqlService) { }

  ngOnInit(): void {
  }

  async register() {
    this.registerButtonLabel = 'Saving your details'
    try {
      const response = await this.gql.publicClient.request(GqlConstants.REGISTER, this.user)
      const newUser = response.insert_user_one
      // Do something with the new user
    } catch (err) {
      this.err = 'Could not create account. Please try with a different email address.'
    }
    this.registerButtonLabel = 'Registration Complete. Sending you to the login page'
  }

}
