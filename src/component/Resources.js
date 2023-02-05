import React from 'react';
import styled from 'styled-components';

const Resources = ({resources,loading}) => {
  if (loading) {
    return(
      <div className="ui active centered inline loader"></div>
    );
  }
  return(
    <Container>
      {resources.map((resource, index) => 
        <UserList key={index}>
          <ListItem><img src={resource.picture.large} alt="顔写真" /></ListItem>
          <ListItem>名前：{resource.name.title} {resource.name.first} {resource.name.last}</ListItem>
          <ListItem>性別：{resource.gender}</ListItem>
          <ListItem>メール：{resource.email}</ListItem>
          <ListItem>電話番号：{resource.phone}</ListItem>
          <ListItem>町：{resource.location.city}</ListItem>
          <ListItem>州：{resource.location.state}</ListItem>
        </UserList>
      )}
    </Container>
  );
};

export default Resources;

const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 50px;
`;

const UserList = styled.ul`
  max-width: 190px;
  list-style: none;
  margin: 0 auto;
`;

const ListItem = styled.li`
  font-size: 15px;
  margin-bottom: 5px;
  img{
    width: 100%;
    margin-bottom: 15px;
  }
`;