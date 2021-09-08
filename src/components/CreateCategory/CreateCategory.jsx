import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { addCategory } from '../../redux/actions/index';
import { useDispatch } from 'react-redux';

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'El nombre de la categoría es obligatorio.';
  } else if (!/([A-Z]|[a-z])\w+/.test(input.name)) {
    errors.name = 'El nombre de la categoría es inválido.';
  }
  return errors;
};

export default function addCategories () {

  const dispatch = useDispatch();
  const history = useHistory();
  const [input, setInput] = useState({
    name: '',
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCategory(input));
    alert("Categoría creada exitosamente.");
    setInput({
      name: '',
    });
    history.push('/create');
  };

  return (
    <div>
      <h1>Cargar categoría:</h1>
      <form onSubmit={e => {handleSubmit(e)}}>
        <div>
          <label>Nombre de la categoría:</label>
          <input
            type='text'
            value={input.name}
            name='name'
            className={`${errors.name && 'danger'}`}
            onChange={e => handleChange(e)}>
              {errors.name && (<p className="danger">{errors.name}</p>)}
          </input>
        </div>
        <div>
          <button type='submit'>Crear categoria</button>
        </div>
      </form>
    </div>
  );
};