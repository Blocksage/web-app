
export const GqlConstants = {
  LOGIN: `mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }`,

  REGISTER: `mutation Register($email: String!, $password: String!, $firstName:String, $lastName:String) {
    insert_user_one(object: {email: $email, password: $password, firstName:$firstName, lastName:$lastName}) {
      id
    }
  }`
  
  
} as const
