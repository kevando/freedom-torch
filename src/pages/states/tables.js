import React, { useState, useEffect } from "react";
import { Table, Header } from "semantic-ui-react";
import { Link } from 'react-router-dom'
import _ from "lodash";

// import "./styles.scss";

const StatesTable = ({states}) => {


  return (
    <div className="states table">
      <Table celled padded compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={1}>Name</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {states.map(
            ({
              name,
            }) => {
              return (
                <Table.Row key={name}>
                  <Table.Cell>
                    <Header as="h4" image>
                      <Header.Content>
                        <Link to={`state/${name.toLowerCase()}`}>{name}</Link>
                        <Header.Subheader>capital</Header.Subheader>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                </Table.Row>
              );
            }
          )}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StatesTable;
