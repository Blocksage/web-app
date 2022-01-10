import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { GraphQLClient } from 'graphql-request';
import { GqlConstants } from 'src/app/services/gql-constants/gql-constants.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  user: any = {}
  err = ''
  registerButtonLabel = 'Register'

  constructor(private gql: GraphqlService, private storage: StorageService, private router: Router) { }

  ngOnInit(): void {
  }

  async register() {
    this.registerButtonLabel = 'Completing registration...'
    try {
      const response = await GraphqlService.publicClient.request(GqlConstants.REGISTER, this.user)
      const token = response.register.token
      const jwt = new JwtHelperService()
      const user = jwt.decodeToken(token)
      this.storage.setItem('jwt', token)
      this.storage.setItem('user', user)
      GraphqlService.client = new GraphQLClient(environment.gqlEndpoint, {headers: {'Authorization': 'Bearer ' + token}})
      this.router.navigate(['app', 'dashboard'])
      // Do something with the new user
    } catch (err) {
      this.registerButtonLabel = 'Register'
      this.err = 'Could not create account. Please try with a different email address.'
    }
  }

}
