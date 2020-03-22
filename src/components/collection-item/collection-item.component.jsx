import React from 'react';
import './collection-item.styles.scss';

const CollectionItem = ({name, imageUrl, price}) => (
  <div className="collection-item">
    <div className="image" style={{backgroundImage: `url(${imageUrl})`}} />
    <div className="footer">
      <span>{name}</span>
      <span>${price}</span>
    </div>
  </div>
);

export default CollectionItem;
