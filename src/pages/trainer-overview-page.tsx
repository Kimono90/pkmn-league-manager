import React, { ReactElement, useEffect, useState } from 'react';
import { Trainer } from '../models/Trainer';
import './trainer-overview-page.css'
import { TrainerList } from '../components/trainer-list/trainer-list';

export function TrainerOverviewPage(): ReactElement {
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    setTrainers([])
  }, [])

  return (<div className="trainer-overview-page">
    <div className="trainer-overview-header">
      <h1>Official Pokemon League trainer registration</h1>
      <h3>Gotta register 'em all</h3>
    </div>
    <div className="poke-ball-container">
      <div className="poke-ball" />
    </div>
    <TrainerList trainers={trainers} />
  </div>)

}