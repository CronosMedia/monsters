import React from 'react';
import './card.styles.css';

export const Card = props => (
    <div className="card-container">
        <img
      alt='monster'
      src={`https://robohash.org/${props.monster.id}?set=set3`}
    />
        <h2>{ props.monster.name }</h2>
        <p><strong>Phone: </strong> { props.monster.phone }</p>
        <p><strong>Website: </strong> { props.monster.website }</p>
        <p><strong>Email: </strong> { props.monster.email }</p>
        <p><strong>Company: </strong> { props.monster.company.name }</p>
    </div>
)