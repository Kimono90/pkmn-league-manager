import { Pokemon } from './Pokemon';

export type Trainer = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  pkmnTeam: Pokemon[];
}