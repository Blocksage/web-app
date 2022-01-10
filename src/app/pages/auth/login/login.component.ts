import { Component, OnInit } from '@angular/core';
import { GqlConstants } from 'src/app/services/gql-constants/gql-constants.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';
import { GraphQLClient } from 'graphql-request';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {}
  err: string = ''
  loginLabel = 'Login'

  constructor(private gql: GraphqlService, private storage: StorageService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    this.loginLabel = 'Logging in...'
    try {
      const response = await GraphqlService.publicClient.request(GqlConstants.LOGIN, {
        email: this.user.email, 
        password: this.user.password
      })
      const token = response.login.token
      const jwt = new JwtHelperService()
      const user = jwt.decodeToken(token)
      this.storage.setItem('jwt', token)
      this.storage.setItem('user', user)
      GraphqlService.client = new GraphQLClient(environment.gqlEndpoint, {headers: {'Authorization': 'Bearer ' + token}})
      this.router.navigate(['app', 'dashboard'])
    } catch(err) {
      console.error(err)
      this.err = 'Sorry! Could not find a user with the given details.'
    } finally {
      this.loginLabel = 'Login'
    }
  }

  resetError() {
    this.err = ''
  }

}
