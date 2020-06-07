import React, { FunctionComponent } from 'react';

interface Props {
  children: React.ReactNode;
}

const Button: FunctionComponent<Props> = (props) => {
  return <button>{props.children}</button>;
};

export default Button;
