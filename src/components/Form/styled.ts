import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  fieldset {
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  input[type='text'],
  input[type='number'],
  textarea,
  select {
    display: block;
    width: 100%;
    margin-bottom: 10px;
  }
`;
