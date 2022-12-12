import React, { ReactElement, useState } from 'react';
import { Trainer } from '../../models/Trainer';
import './trainer-list.css';
import { PokemonList } from '../pokemon-list/pokemon-list';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import ReactModal from 'react-modal';

type TrainerListProps = {
  trainers: Trainer[];
}

export function TrainerList({trainers} : TrainerListProps): ReactElement {
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [showPokemon, setShowPokemon] = useState<boolean>(false);

  const trainerElements = trainers.map((t) => {
    return (<div className="trainer-item" key={t.id} onClick={() => setShowPokemon(!showPokemon)}>
        <div className="trainer-details" >
          <span id="trainer-id">ID {t.id}</span>
          <span id="trainer-name">{t.name}</span>
          <span id="trainer-email">{t.email}</span>
          <span id="trainer-phone-number">{t.phoneNumber}</span>
          <span className="edit-button"><FontAwesomeIcon onClick={() => setIsEditModalOpen(true)} icon={faPencil} /></span>
        </div>
      {showPokemon ? <PokemonList pkmnTeam={t.pkmnTeam} /> : null}
      </div>
    );
  });

  return <>
    <div className="trainer-list">
      {trainers.length ? trainerElements : <div>No registered trainers found</div>}
    </div>
    <ReactModal
      onRequestClose={() => setIsEditModalOpen(false)}
      isOpen={isEditModalOpen}
    >
      Edit modal for trainer info
    </ReactModal>
  </>
}