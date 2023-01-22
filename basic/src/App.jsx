import React, { useState } from 'react';
import MyModal from './components/MyModal';

const App = () => {
  const [modalButton, setModalButton] = useState(false);
  const showModal = () => {
    return setModalButton(true);
  };
  console.log(modalButton);
  return (
    <div>
      <button onClick={showModal}>모달입니다.</button>
      {modalButton && <MyModal setModalButton={setModalButton} />}
    </div>
  );
};

export default App;
