import React from 'react';
import { useSelector } from 'react-redux';

const cart: React.FC = () => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const state = useSelector(state => state);

  console.log(state);

  return(
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
          <th>Subtotal</th>
        </tr>
      </thead>
    </table>
  );
}

export default cart;