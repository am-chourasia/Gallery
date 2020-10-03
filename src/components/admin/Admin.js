import React, {Fragment}from 'react';
import Header from '../Header';
import Uploader from './Uploader';

function Admin() {
  return (
    <Fragment>
      <Header/>
      <div className="admin">
        <Uploader/>
      </div>
    </Fragment>
  );
}

export default Admin;
//kn