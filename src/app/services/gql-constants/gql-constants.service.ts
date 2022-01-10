
export const GqlConstants = {
  LOGIN: `mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      error
    }
  }`,

  REGISTER: `mutation Register ($email: String!, $password: String!, $firstName:String!, $lastName:String!){
    register(email: $email, firstName: $firstName, lastName: $lastName, password: $password) {
      error
      token
    }
  }`,

  POLICY_COUNT: `query PolicyCount {
    policy_aggregate {
      aggregate {
        count
      }
    }
  }`
  
  
} as const
