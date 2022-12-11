import React, { ReactElement } from 'react';
import { Trainer } from '../../models/Trainer';
import './trainer-list.css';
import { PokemonList } from '../pokemon-list/pokemon-list';

type TrainerListProps = {
  trainers: Trainer[];
}

export function TrainerList({trainers} : TrainerListProps): ReactElement {
  const trainerElements = trainers.map((t) => {
    return (<div>
      <span>{t.id}</span>
      <span>{t.name}</span>
      <span>{t.email}</span>
      <span>{t.phoneNumber}</span>
      <PokemonList pkmnTeam={t.pkmnTeam} />
    </div>);
  });

  return <div className="trainer-list">
    {trainers.length ? trainerElements : <div>No registered trainers found</div>}
  </div>
}