import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { GqlConstants } from 'src/app/services/gql-constants/gql-constants.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';

@Component({
  selector: 'app-create-policy',
  templateUrl: './create-policy.component.html',
  styleUrls: ['./create-policy.component.scss']
})
export class CreatePolicyComponent implements OnInit {
  @Output() policySaved: EventEmitter<any> = new EventEmitter()
  public Editor = ClassicEditor

  constructor() { }
  policy: any = {
    checklist: ''
  }

  ngOnInit(): void {
  }

  generateSlug() {
    console.log('change')
    if (this.policy.title) {
      this.policy.slug = this.policy.title.toLowerCase().replaceAll(' ', '-')
    }
  }

  async savePolicy() {
    try {
      const response = await GraphqlService.client?.request(GqlConstants.CREATE_POLICY, this.policy)
      // if the line below executes, that means the policy is saved.
      this.policySaved.emit(response.insert_policy_one)
    } catch (err){
      console.error(err)
      alert('failed to save the policy')
    }
    
  }
}
