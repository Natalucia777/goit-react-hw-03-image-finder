import React from 'react';
import PropTypes from 'prop-types';
import { FormButton } from './Button.styled';
function Button ({onClick}){
    return (
        <FormButton type="button" onClick={onClick}>Load more</FormButton>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default Button;