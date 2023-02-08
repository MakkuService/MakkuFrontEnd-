import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h2 className="title title_not-found">
        Страница не найдена
      </h2>
      <Link className="link" to="/">
        На главную
      </Link>
    </div>
  );
}
