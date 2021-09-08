import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { addProduct, getCategories } from '../../redux/actions/index';
import { useDispatch, useSelector } from 'react-redux';

export function validate(input) {
  let errors = {};
  if (!input.name) {
    errors.name = 'El nombre del producto es obligatorio.';
  } else if (!/([A-Z]|[a-z])\w+/.test(input.name)) {
    errors.name = 'El nombre del producto es inválido.';
  }
  if (!input.description) {
    errors.description = 'La descripción del producto es obligatoria.';
  } else if (!/([A-Z]|[a-z])|\w+/.test(input.description)) {
    errors.description = 'La descripción del producto es invalida.';
  }
  if (!input.price) {
    errors.price = 'El precio del producto es obligatorio.';
  } else if (!/[0-9]+,[0-9]{2}/.test(input.price)) {
    errors.price = 'El precio del producto es invalido.';
  }
  if (!input.image_url) {
    errors.image_url = 'La imagen del producto es obligatoria.';
  } else if (!/(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|png)/.test(input.image_url)) {
    errors.image_url = 'La ruta de imagen del producto es invalida.';
  }
  return errors;
};

export default function addProdcts () {

  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector(e => e.categories);
  const [input, setInput] = useState({
    image_url: '',
    name: '',
    description:'',
    price: '',
    categories: [],
  });
  const [errors, setErrors] = React.useState({});

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name] : e.target.value
    });
  };

  function handleSelect(e) {
    setInput({
      ...input,
      categories: [
        ...input.categories,
        e.target.value
      ]
    });
  };

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addProduct(input));
    alert("Producto creado exitosamente.");
    setInput({
      image_url: '',
      name: '',
      description: '',
      price: '',
      categories: [],
    });
    history.push('/addProducts');
  };

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <h1>Cargar productos:</h1>
      <form onSubmit={e => {handleSubmit(e)}}>
        <div>
          <label>Nombre del producto:</label>
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
          <label>Precio:</label>
          <input
            type='number'
            value={input.price}
            name='price'
            className={`${errors.price && 'danger'}`}
            onChange={e => handleChange(e)}>
              {errors.price && (<p className="danger">{errors.price}</p>)}
          </input>
        </div>
        <div>
          <label>Descripción:</label>
          <input
            type='text'
            value={input.description}
            name='description'
            className={`${errors.description && 'danger'}`}
            onChange={e => handleChange(e)}>
              {errors.description && (<p className="danger">{errors.description}</p>)}
          </input>
        </div>
        <div>
          <label>Imagen:</label>
          <input
            type='text'
            value={input.image_url}
            name='image_url'
            className={`${errors.image_url && 'danger'}`}
            onChange={e => handleChange(e)}>
              {errors.image_url && (<p className="danger">{errors.image_url}</p>)}
          </input>
        </div>
        <div>
          <select onChange={e => handleSelect(e)}>
            {categories.map(i => (
                <option value={i.name}>
                  {i.name}
                </option>
            ))}
            <ul>
              <li>{input.categories.map(i => i + ", ")}</li>
            </ul>
          </select>
          <button type='submit'>Cargar producto</button>
        </div>
      </form>
    </div>
  );
};