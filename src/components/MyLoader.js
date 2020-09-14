import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import React from 'react';

export default function MyLoader() {
  return <Loader type="TailSpin" color="#3f51b5" height={100} width={100} />;
}
