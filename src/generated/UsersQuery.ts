/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: UsersQuery
// ====================================================

export interface UsersQuery_users {
  __typename: "users";
  first_name: string | null;
  last_name: string | null;
}

export interface UsersQuery {
  /**
   * fetch data from the table: "users"
   */
  users: UsersQuery_users[];
}
