import React from 'react';
import { Link } from 'react-router-dom';

export default function TextLink(props) {
  return(
    <div class="text-link-container">
      <Link
        to={ props.href }
        className="link"
      >{ props.text ? props.text : props.children }</Link>
    </div>
  );
}
