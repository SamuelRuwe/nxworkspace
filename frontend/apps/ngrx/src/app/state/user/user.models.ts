export interface UserModel {
  id?: number | null;
  firstName: string;
  lastName: string;
}

export class User implements UserModel {

  id?: number | null;
  firstName: string;
  lastName: string;

  constructor({id, firstName, lastName}: UserModel) {
    this.id = id ?? null;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
