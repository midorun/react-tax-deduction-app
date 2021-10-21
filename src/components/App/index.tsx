import Modal from 'components/Modal';
import React, { FC, useState } from 'react';

import * as ST from './styled';

export type TAppProps = {}

const App: FC<TAppProps> = () => {
  const [showModal, setShowModal] = useState(false)


  return (
    <ST.App>
      {showModal ?
        <Modal
          showModal={showModal}
          container={document.getElementById('root')!}
          closeModal={() => setShowModal(false)}
        />
        :
        <ST.ButtonWrapper>
          <ST.Button onClick={() => setShowModal(true)}>Налоговый вычет</ST.Button>
        </ST.ButtonWrapper>
      }
    </ST.App>
  );
};

export default App;
