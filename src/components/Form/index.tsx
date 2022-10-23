import React, { useState } from 'react';
import { Container } from './styled';

function Form() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [attribute1, setAttribute1] = useState(0);
  const [attribute2, setAttribute2] = useState(0);
  const [attribute3, setAttribute3] = useState(0);
  const [image, setImage] = useState('');
  const [rare, setRare] = useState('');
  const [trunfo, setTrunfo] = useState(false);

  return (
    <Container>
      <fieldset>
        <legend>Adicionar nova carta</legend>

        <div>
          <label htmlFor="name">
            Nome
            <input
              type="text"
              name="name"
              data-testid="name-input"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="description">
            Descrição
            <textarea
              name="description"
              id="description"
              cols={30}
              rows={10}
              data-testid="description-input"
              value={description}
              onChange={({ target }) => setDescription(target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="name">
            Atributo 1
            <input
              type="number"
              name="attribute1"
              data-testid="attr1-input"
              value={attribute1}
              onChange={({ target }) => setAttribute1(parseInt(target.value))}
            />
          </label>
        </div>

        <div>
          <label htmlFor="attribute2">
            Atributo 2
            <input
              type="number"
              name="attribute2"
              data-testid="attr2-input"
              value={attribute2}
              onChange={({ target }) => setAttribute2(parseInt(target.value))}
            />
          </label>
        </div>

        <div>
          <label htmlFor="attribute3">
            Atributo 3
            <input
              type="number"
              name="attribute3"
              data-testid="attr3-input"
              value={attribute3}
              onChange={({ target }) => setAttribute3(parseInt(target.value))}
            />
          </label>
        </div>

        <div>
          <label htmlFor="image">
            Imagem
            <input
              type="text"
              name="image"
              data-testid="image-input"
              value={image}
              onChange={({ target }) => setImage(target.value)}
            />
          </label>
        </div>

        <div>
          <label htmlFor="rare">
            Raridade
            <select
              name="rare"
              id="rare"
              data-testid="rare-input"
              value={rare}
              onChange={({ target }) => setRare(target.value)}
            >
              <option value=""></option>
              <option value="normal">normal</option>
              <option value="raro">raro</option>
              <option value="muito raro">muito raro</option>
            </select>
          </label>
        </div>

        <div>
          <label htmlFor="trunfo-input">
            <input
              type="checkbox"
              name="trunfo-input"
              id="trunfo-input"
              data-testid="trunfo-input"
              onChange={() => setTrunfo(!trunfo)}
            />{' '}
            Super Trunfo
          </label>
        </div>

        <button type="button" data-testid="save-button">
          Salvar
        </button>
      </fieldset>
    </Container>
  );
}

export default Form;
