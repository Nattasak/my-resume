import React from 'react';
import styled from 'styled-components';

const CheckboxLabel = styled.label`
  margin-right: 35px;
  &:hover {
    color: #fff;
  }
`;

const Input = styled.input`
  position: relative;
  top: 3px;
  width: 18px;
  height: 18px;
  margin: 0 10px 0 0;
`;

const Checkbox = props => (
  <CheckboxLabel className="checkbox">
    <Input type="checkbox" />
    <label>{props.label}</label>
  </CheckboxLabel>
);

export default Checkbox;

/*
How to use

<Checkbox label="Facebook" />
<Checkbox label="Twitter" />

*/
