
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
  }`,

  CREATE_POLICY: `mutation CreatePolicy($checklist:String, $details:String, $slug:String, $title: String) {
    insert_policy_one(object: {checklist: $checklist, details: $details, slug: $slug, title: $title}) {
      id
      title
    }
  }`,

  CREATE_KEY: `mutation CreateKey {
    insert_keys_one(object: {}) {
      id
    }
  }`,

  LIST_KEYS: `query ListKeys {
    keys {
      id
      createdAt
    }
  }`,

  DELETE_KEY: `mutation DeleteKey($key:uuid!) {
    delete_keys_by_pk(id: $key) {
      id
    }
  }`
  
  
} as const
