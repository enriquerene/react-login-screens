import React from 'react';
import { Link } from 'react-router-dom';

export default function IconLink(props) {
  return(
    <div class="icon-link-container">
      <Link
        to={ props.href }
        className="link"
      >
        <div className="icon">{ props.icon }</div>
        <div className="text">{ props.text }</div>
      </Link>
    </div>
  );
}
