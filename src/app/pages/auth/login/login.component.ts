import { Component, OnInit } from '@angular/core';
import { GqlConstants } from 'src/app/services/gql-constants/gql-constants.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: any = {}
  err: string = ''
  constructor(private gql: GraphqlService, private storage: StorageService, private router: Router) { }

  ngOnInit(): void {
  }

  async login() {
    try {
      const response = await this.gql.publicClient.request(GqlConstants.LOGIN, {
        email: this.user.email, 
        password: this.user.password
      })
      const token = response.login.token
      const jwt = new JwtHelperService()
      const user = jwt.decodeToken(token)
      this.storage.setItem('jwt', token)
      this.storage.setItem('user', user)
      this.router.navigate(['app', 'dashboard'])
    } catch(err) {
      console.error(err)
      this.err = 'Sorry! Could not find a user with the given details.'
    }
  }

  resetError() {
    this.err = ''
  }

}
