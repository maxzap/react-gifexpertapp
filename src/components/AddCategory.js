import PropTypes from "prop-types";
import React, { useState } from 'react';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    }

    const handleSubmit = ( e ) => {
        // Buscasr que hace el preventDefault()
        e.preventDefault();

        if(inputValue.trim().length > 2) {
            setCategories( categories => [ inputValue, ...categories ] );
            setInputValue('');
        }

    }

  return (
      <form onSubmit={ handleSubmit }>
        <input
            type="text"
            value={ inputValue }
            onChange={ handleInputChange }
        />
      </form>
  )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
