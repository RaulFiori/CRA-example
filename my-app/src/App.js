import React from 'react';
import './App.css';
import { withQuery } from './relay';
import graphql from 'babel-plugin-relay/macro';

function App(props) {
  const { files } = props;

  return (
    <div className="App">
      <h2 className="font">Dropbox</h2>
      <div >
        <div className="header">
          <div className="cell">
            <p className="font">Nome</p>
          </div>
          <div className="cell">
            <p className="font">Criado em</p>
          </div>
          <div className="cell" />
        </div>
        {files.map(file => {
          const { id, name, docType, createdAt } = file;
          return (
            <div className="row" key={id}>
              <div className="cell">
                <p className="font">{`${name}${docType}`}</p>
              </div>
              <div className="cell">
                <p className="font">{createdAt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default withQuery({
  query: graphql`
    query AppQuery {
      files {
        id
        name
        createdAt
        docType
      }
    }
  `,
  variables: {}
})(App);
