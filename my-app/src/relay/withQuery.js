import React from 'react';
import { QueryRenderer } from 'react-relay';
import environment from './Environment';
// import Loading from '../components/Loading';

export default config => WrappedComponent => {
  const { variables, query } = config;

  const hocComponent = ({ ...wrapperProps }) => {
    const finalVariables =
      variables instanceof Function ? variables(wrapperProps) : variables;
    return (
      <QueryRenderer
        query={query}
        variables={finalVariables}
        environment={environment}
        render={({ props, error }) => {
          if (error) {
            return <div> Erro</div>;
          }

          if (props) {
            return <WrappedComponent {...wrapperProps} {...props} />;
          }

          return <div>Loading...</div>;
        }}
      />
    );
  };

  return hocComponent;
};
