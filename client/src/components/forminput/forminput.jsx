import React from "react";
import {
    GroupContainer,
    FormInputContainer,
    FormInputLabel
  } from './forminput.styled';

function Forminput({handleChange ,label , ...otherprops }) {
    return (
        <GroupContainer>
        <FormInputContainer onChange={handleChange} {...otherprops} />
        {label ? (
          <FormInputLabel className={otherprops.value.length ? 'shrink' : ''}>
            {label}
          </FormInputLabel>
        ) : null}
      </GroupContainer>
    )
}

export default Forminput

