import React from 'react';
import { Link } from 'react-router-dom';
import { x } from '@xstyled/emotion';
import './index.css'

interface Props {}

const PageNotFound: React.FC<Props> = () => {
  return (
    <x.div className='main-container'>
      <x.div className='content'>
        <x.h1 className='info-text'>
          The page you are looking for does no seem to exist
        </x.h1>

        <Link to='/' className='goback-link'>
          <x.button className='default-button'>
            Go Back Home
          </x.button>
        </Link>
      </x.div>
    </x.div>
  );
};

export default PageNotFound;
