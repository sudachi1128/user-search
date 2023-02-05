import React from 'react';
import styled from 'styled-components';

const SelectGender = ({handleGender})=>{

  return(
    <Container>
      <Title>性別で絞り込み</Title>
      <select onChange={handleGender} className="ui dropdown selection">
        <option value="all">全て</option>
        <option value="male">男性</option>
        <option value="female">女性</option>
      </select>
    </Container>
  );
};

export default SelectGender;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 50px auto;
  display: flex;
  align-items: baseline;
`;

const Title = styled.h4`
  margin-right: 25px;
`;