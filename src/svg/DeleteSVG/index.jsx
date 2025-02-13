import styles from './DeleteSVG.module.scss';
import React, { Component } from 'react';
import Icon from '@mdi/react';
import { mdiDelete, mdiSetNone } from '@mdi/js';

const DeleteSVG = () => {
    
      return (
        <Icon path={mdiDelete} size={1.5}
        color='red' />
      );
    }
  

  export default DeleteSVG;

