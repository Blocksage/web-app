import { Injectable } from '@angular/core';
import { request, GraphQLClient } from 'graphql-request'
import { environment } from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class GraphqlService {

  public client?: GraphQLClient
  public publicClient: GraphQLClient = new GraphQLClient(environment.gqlEndpoint, {})

  constructor() {
    this.client = new GraphQLClient(environment.gqlEndpoint, {
      headers: {
        'Authorization': 'Bearer '
      }
    })
  }


}
