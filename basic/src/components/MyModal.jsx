import React, { useState } from 'react';
import styled from 'styled-components';

const MyModal = ({ setModalButton }) => {
  const closeModal = () => {
    setModalButton(false);
  };

  return (
    <div>
      <StyledModal onClick={closeModal}>모달창입니다.</StyledModal>
    </div>
  );
};

export default MyModal;

const StyledModal = styled.div`
  width: 300px;
  background-color: pink;
`;
