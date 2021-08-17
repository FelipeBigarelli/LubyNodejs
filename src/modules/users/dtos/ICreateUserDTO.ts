interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  locale: string;
  avatar?: string;
  username: string;
  bio: string;
}

export { ICreateUserDTO };
