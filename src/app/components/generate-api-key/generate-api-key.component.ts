import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { GqlConstants } from 'src/app/services/gql-constants/gql-constants.service';
import { GraphqlService } from 'src/app/services/graphql/graphql.service';

@Component({
  selector: 'app-generate-api-key',
  templateUrl: './generate-api-key.component.html',
  styleUrls: ['./generate-api-key.component.scss']
})
export class GenerateApiKeyComponent implements OnInit {

  @Output() completed: EventEmitter<any> = new EventEmitter()

  keys: any
  constructor() { }

  ngOnInit() {
    this.getAllKeys()
  }

  async getAllKeys() {
    try {
      const response = await GraphqlService.client?.request(GqlConstants.LIST_KEYS)
      this.keys = response.keys
    } catch(err) {
      alert('error')
      console.error(err)
    }
  }

  async deleteKey(key:string) {
    try {
      const response = await GraphqlService.client?.request(GqlConstants.DELETE_KEY, { key })
    } catch(err) {
      alert('error')
      console.error(err)
    } finally {
      this.getAllKeys()
    }
  }

  async generateKey() {
    try {
      const response = await GraphqlService.client?.request(GqlConstants.CREATE_KEY)
      const key = response.insert_keys_one.id
    } catch(err) {
      alert('error')
      console.error(err)
    } finally {
      this.getAllKeys()
    }
  }

  emitComplete() {
    this.completed.emit({})
  }
}
