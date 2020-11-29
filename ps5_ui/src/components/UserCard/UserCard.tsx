import React from 'react';
import { CardContainer, LastOnline, PsPlus, UserContainer, UserImage, UserName } from './styled';
import BlueUser from '../../assets/Blueuser.png';
import Plus from '../../assets/plus.png';

const UserCard: React.FC = () => {
  return (
    <CardContainer>
      <UserImage src={BlueUser} alt="User image"/>
      <UserContainer>
        <UserName> evebanigo </UserName>
        <LastOnline> 
          Last online yesterday 
          <PsPlus src={Plus} alt="Plus"/>
        </LastOnline>
      </UserContainer>
    </CardContainer>
  );
};

export default UserCard;