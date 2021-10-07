import React from 'react';
// import Custombtn from '../customButton/custombtn';
import { addCart } from '../../redux/cart/cart.actions';
import { connect } from 'react-redux';
import {
  CollectionItemContainer,
  CollectionFooterContainer,
  AddButton,
  BackgroundImage,
  NameContainer,
  PriceContainer
} from "./shopItem.styles"

function Shopitem({item , addCart}) {
    const {name , price , imageUrl} = item;
    return (
      <CollectionItemContainer>
      <BackgroundImage className='image' imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton onClick={() => addCart(item)} inverted>
        Add to cart
      </AddButton>
    </CollectionItemContainer>
    )
}
const mapDispatchToProps = dispatch => ({
    addCart: item => dispatch(addCart(item))
  });
export default connect(null,mapDispatchToProps)(Shopitem)
