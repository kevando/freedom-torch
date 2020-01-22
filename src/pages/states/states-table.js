import React, { useState, useEffect } from "react";
import { Table, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import _ from "lodash";

const COLS = {
  stateName: "Name",
  population: "Population",
  populationChange: "Population Growth",
  houseSeatsCount: "House Seats"
};

const StatesTable = ({ states }) => {
  const [column, setColumn] = useState(null);
  const [data, setData] = useState(states);
  const [direction, setDirection] = useState(null);

  const handleSort = clickedColumn => () => {
    if (column !== clickedColumn) {
      setColumn(clickedColumn);
      setData(_.sortBy(data, [clickedColumn]));
      setDirection("ascending");

      return;
    }
    setData(data.reverse());
    setDirection(direction === "ascending" ? "descending" : "ascending");
  };

  return (
    <div className="states table">
      <Table celled padded compact sortable>
        <Table.Header>
          <Table.Row>
            {_.map(COLS, (label, col) => (
              <Table.HeaderCell
                key={col}
                sorted={column === col ? direction : null}
                onClick={handleSort(col)}
                textAlign="center"
              >
                {label}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(
            ({
              stateName,
              population,
              houseSeatsCount,
              populationChange,
              docId
            }) => {
              return (
                <Table.Row key={docId}>
                  <Table.Cell>
                    <Header as="h2" image>
                      <Header.Content>
                        <Link to={`states/${docId}`}>{stateName}</Link>
                      </Header.Content>
                    </Header>
                  </Table.Cell>
                  <Table.Cell textAlign="right" className="number">
                    {population.toLocaleString()}
                  </Table.Cell>
                  <Table.Cell textAlign="right" className="number">{populationChange}</Table.Cell>
                  <Table.Cell width={1}>
                    <Header as="h4" textAlign="center">
                      {houseSeatsCount}
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
