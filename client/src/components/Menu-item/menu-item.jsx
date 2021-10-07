import React from 'react';
import { withRouter } from 'react-router';
import {
    MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    ContentTitle,
    ContentSubtitle
  } from './menuitem.styled';

export default withRouter(function Menuitems({title ,imageUrl , size , linkUrl , history , match}) {
    return (
        <MenuItemContainer
    size={size}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <BackgroundImageContainer
      className='background-image'
      imageUrl={imageUrl}
    />
    <ContentContainer className='content'>
      <ContentTitle>{title.toUpperCase()}</ContentTitle>
      <ContentSubtitle>SHOP NOW</ContentSubtitle>
    </ContentContainer>
  </MenuItemContainer>
    )
})
