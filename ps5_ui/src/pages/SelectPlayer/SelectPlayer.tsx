import React from 'react';
import PS5Logo from '../../assets/PS5_logo.png';
import { DateTime, Container, Logo, TitleContainer, UsersList, UserItem } from './styled';
import moment from 'moment';
import UserCard from '../../components/UserCard/UserCard';
import BlueUser from '../../assets/Blueuser.png';
import Skulluser from '../../assets/Skulluser.png';

export default function SelectPlayer() {

  return (
    <Container className="container-fluid">
      <div className="row">
        <div className="col-lg-6">
          <Logo src={PS5Logo} alt="Playstation Logo"/>
        </div>
        <div className="col-lg-6 justigy-">
          <DateTime> { moment().format('HH:mm') } </DateTime>
        </div>
      </div>

      <TitleContainer className="row">
        <div className="col-lg-6 offset-lg-3">
          <span> DualSense connected </span>
          <h1 className="font-weight-bold"> Who is using the controller? </h1>
        </div>
      </TitleContainer>

      <UsersList>
        <UserItem>
          <UserCard type="new"/>
        </UserItem>
        <UserItem>
          <UserCard username="Jo-Accord" image={Skulluser} isPlus={true} mainColor="#feda3f"/>
        </UserItem>
        <UserItem>
          <UserCard username="evebanigo" image={BlueUser} mainColor="#00aed1"/>
        </UserItem>
        <UserItem>
          <UserCard type="guest"/>
        </UserItem>
      </UsersList>
    </Container>
  )
}