import React, { ReactElement } from 'react';
import { Trainer } from '../../models/Trainer';
import './trainer-list.css';

type TrainerListProps = {
  trainers: Trainer[];
}

export function TrainerList({trainers} : TrainerListProps): ReactElement {

  const trainerElements = trainers.map((t) => {
    const pokemonTeam = t.pkmnTeam.map((p) => <div>{p.id}</div>)
    return (<div>
      <span>{t.id}</span>
      <span>{t.name}</span>
      <span>{t.email}</span>
      <span>{t.phoneNumber}</span>
      {pokemonTeam}
    </div>);
  });

  return <div className="trainer-list">
    {trainers.length ? trainerElements : <div>No registered trainers found</div>}
  </div>
}