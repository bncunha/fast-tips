import React from 'react';
import PS5Logo from '../../assets/PS5_logo.png';
import { DateTime, Container, Logo, TitleContainer, DualsenseBackground } from './styled';
import moment from 'moment';
import UserCard from '../../components/UserCard/UserCard';

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

      <div>
        <UserCard>

        </UserCard>

      </div>
    </Container>
  )
}