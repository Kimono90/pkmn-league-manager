import React, { ReactElement, useEffect, useState } from 'react';
import { Trainer } from '../models/Trainer';

export function TrainerOverviewPage(): ReactElement {
  const [trainers, setTrainers] = useState<Trainer[]>([]);

  useEffect(() => {
    setTrainers([])
  }, [])

  const trainerElements = trainers.map((t) => <div>{t.name}</div>)

  return <div>
    <h1>Registered trainers</h1>
    {trainerElements}
  </div>

}