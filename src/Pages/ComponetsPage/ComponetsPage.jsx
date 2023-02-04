import React from 'react';

import { Button, Tabs } from '../../components/ui';

import withUser from '../../hoc/withUser';

export default function ComponentsPage() {
  return (
    <div className="root">

      <div>
        <Tabs />
      </div>

      <div>
        <Button />
      </div>
      
    </div>
  );
}
