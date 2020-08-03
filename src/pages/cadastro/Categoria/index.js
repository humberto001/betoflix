import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categories, setCategories] = useState([]);
  const categoryStartValues = {
    name: '',
    color: '#cbd1ff',
    description: '',
  };
  const [categoryValues, setCategoryValues] = useState(categoryStartValues);

  function setValue(key, value) {
    setCategoryValues({
      ...categoryValues,
      [key]: value,
    });
  }

  function handleChange(info) {
    // const { getAttribute, value } = info.target; Didn't work!
    setValue(
      info.target.getAttribute('name'),
      info.target.value,
    );
  }

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://betoflixx.herokuapp.com/categories';

    fetch(URL).then(async (response) => {
      const result = await response.json();
      console.log(result);
      setCategories([...result]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {categoryValues.name}
      </h1>

      <form onSubmit={function handleSubmit(infos) {
        infos.preventDefault();
        setCategories([
          ...categories, categoryValues,
        ]);
        setCategoryValues(categoryStartValues);
      }}
      >

        <FormField
          label="Nome da Categoria :"
          type="text"
          name="name"
          value={categoryValues.name}
          onChange={handleChange}
        />

        <FormField
          label="Cor :"
          type="color"
          name="color"
          value={categoryValues.color}
          onChange={handleChange}
        />

        <FormField
          label="Descrição :"
          type="textarea"
          name="description"
          value={categoryValues.description}
          onChange={handleChange}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      {categories.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categories.map((category) => (
          <li key={category.id}>
            {category.name}
          </li>
        ))}

      </ul>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
