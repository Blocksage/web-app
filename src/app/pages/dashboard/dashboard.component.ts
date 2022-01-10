import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphQLClient } from 'graphql-request';
import { GqlConstants } from 'src/app/services/gql-constants/gql-constants.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  user: any
  constructor(private storage: StorageService, private router: Router) { }

  async ngOnInit() {
    try {
      const response = await GraphqlService.client?.request(GqlConstants.POLICY_COUNT)    
      const numPolicies = response.policy_aggregate.aggregate.count 
      if (!numPolicies) {
        this.router.navigate(['app/onboarding'])
        return
      }
    } catch(err) {

    }
    this.user = this.storage.getItem('user')
  }

}
