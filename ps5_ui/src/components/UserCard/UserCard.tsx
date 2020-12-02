import React from 'react';
import { CardContainer, LastOnline, LoginButtonContent, PsPlus, UserContainer, UserImage, UserName } from './styled';
import Plus from '../../assets/plus.png';
import PsButton from '../PsButton/PsButton';
import MoreIcon from '../../assets/MoreIcon.png';
import GuestIcon from '../../assets/GuestIcon.png';

interface UserCardProps {
  username?: string;
  image?: string;
  type?: 'new' | 'guest' | 'user';
  isPlus?: boolean;
  mainColor?: string;
};

const UserCard: React.FC<UserCardProps> = ({
  username,
  image,
  type = 'user',
  isPlus,
  mainColor
}) => {

  const getImage = () => {
    switch(type) {
      case 'new': return MoreIcon;
      case 'guest': return GuestIcon;
      default: return image;
    }
  };

  const getUserName = () => {
    switch(type) {
      case 'new': return 'Create User';
      case 'guest': return 'Play as Guest';
      default: return username;
    }
  };

  const getSubTitle = () => {
    switch(type) {
      case 'new': return 'Add a new user to this console';
      case 'guest': return 'Data will be deleted after you log out';
      default: return 'Last online yesterday';
    }
  };

  return (
    <CardContainer type={type} mainColor={mainColor}>
      <UserImage src={getImage()} type={type} alt="User image"/>
      <UserContainer>
        <UserName> { getUserName() } </UserName>
        <LastOnline> 
          { getSubTitle() }
          { isPlus && <PsPlus src={Plus} alt="Plus"/> } 
        </LastOnline> 
        { type === 'user' && <LoginButtonContent> <PsButton/> </LoginButtonContent>}
      </UserContainer>
    </CardContainer>
  );
};

export default UserCard;