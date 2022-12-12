import axios from 'axios';
import { Pokemon } from '../models/Pokemon';

export async function getAllPokemon(): Promise<any> {
  const result = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=60');
  return result.data.results.map((p: any) => mapToUiModel(p.name));
}

export async function mapToUiModel(name: string): Promise<Pokemon> {
  const result = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);

  return {
    id: result.data.id,
    name: name,
    imgUrl: result.data.sprites.front_default,
  }
}

