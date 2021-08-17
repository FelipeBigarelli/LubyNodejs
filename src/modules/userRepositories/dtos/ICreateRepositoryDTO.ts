interface ICreateRepositoryDTO {
  user_id: string;
  name: string;
  description: string;
  publico: boolean;
  slug: string;
}

export { ICreateRepositoryDTO };
