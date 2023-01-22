import React from 'react';
import styled from 'styled-components';

const MyModal = ({ setModalButton }) => {
  const closeModal = () => {
    setModalButton(false);
  };
  return <StyledModal onClick={closeModal}>모달창입니다.</StyledModal>;
};

export default MyModal;

const StyledModal = styled.div`
  width: 300px;
  background-color: pink;
`;
