import React, {Fragment}from 'react';
import Header from '../Header';
import Uploader from './Uploader';
import ImageGrid from './ImageGrid'
function Admin() {
  return (
    <Fragment>
      <Header/>
      <div className="admin">
        <Uploader/>
        <ImageGrid/>
      </div>
    </Fragment>
  );
}

export default Admin;
//kn