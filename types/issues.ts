import { Repository } from "./repo";

export interface Issue {
  id: number;
  title: string;
  body: string;
  labels: string[];
  ailabels?: string[];
  owner: string;
  name: string;
  state?: string;
  url: string;
  createdAt: string;
  comments: number;
  repo: Repository;
  repoId: number;
  htmlBody?: string;
  summary?: string;
  cause?: string;
  skills?: string[];
  githubId?: string;
  githubUrl?: string;
  difficulty?: string;
}
