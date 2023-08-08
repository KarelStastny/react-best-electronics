

import React, { useState } from 'react';
import useLoadData from '../../Back-End/LoadDataFirebase'; // Importujte komponentu useLoadData

const Produkt = () => {
  const products = useLoadData();

  return (
    <div>
      <h1>Seznam produktů</h1>

   
    </div>
  );
};

export default Produkt;