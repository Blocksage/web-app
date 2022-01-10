import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreatePolicyComponent } from 'src/app/components/create-policy/create-policy.component';
import { GqlConstants } from 'src/app/services/gql-constants/gql-constants.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';

@Component({
  selector: 'app-policies',
  templateUrl: './policies.component.html',
  styleUrls: ['./policies.component.scss']
})
export class PoliciesComponent implements OnInit {

  policies: any = {}
  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
    this.loadPolicies()
  }

  async loadPolicies() {
    try {
      const response = await GraphqlService.client?.request(GqlConstants.GET_POLICIES)
      this.policies = response.policy
    }catch(err) {
      alert('Error fetching policies')
      console.error(err)
    }
  }

  async createNewPolicy() {
    const modalRef = this.modalService.open(CreatePolicyComponent).result.then((result) => {
      // this.loadPolicies()
    }, (reason) => {
      this.loadPolicies()
    })
  }
}
