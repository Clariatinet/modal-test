import React, { useState } from 'react';
import MyModal from './components/MyModal';

const App = () => {
  const [modalButton, setModalButton] = useState(false);
  const [name, setName] = useState('');
  console.log(name);
  const showModal = () => {
    return setModalButton(true);
  };
  console.log(modalButton);
  return (
    <div>
      <button onClick={showModal}>모달입니다.</button>
      {modalButton && <MyModal setModalButton={setModalButton} />}
      <input
        type='text'
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
    </div>
  );
};

export default App;
