import * as React from 'react';
import { useEffect } from 'react';
import { initialize } from '../dev-portal';

const DevPortalReact: React.FC = () => {
  useEffect(() => {
    initialize();
  }, []);

  return null;
};

export default DevPortalReact;
