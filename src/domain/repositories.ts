export interface RepositoryItemProps {
  full_name: string;
  title: string;
  description: string;
  owner: {
    avatar_url: string;
  };
  url: string;
}
