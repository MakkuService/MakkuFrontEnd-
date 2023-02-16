import React from 'react';
import { Link } from 'react-router-dom';

export default function OauthPage() {
  return (
    <div className="not-found">
      <h2 className="title title_not-found">
        OAUTH
      </h2>
      <Link className="link" to="/">
        На главную
      </Link>
    </div>
  );
}
