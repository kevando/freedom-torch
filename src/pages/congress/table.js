import React, { useState, useEffect } from "react";
import { Table, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import _ from "lodash";

const COLS = {
  name: "Name",
  twitterHandle: "Handle",
  "twitterStats.followersCount": "Followers"
};

const StatesTable = ({ members }) => {
  const [column, setColumn] = useState(null);
  const [data, setData] = useState(members);
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
          {data.map(({ name, twitterHandle, docId, key, twitterStats, firstName, lastName }) => {
            return (
              <Table.Row key={docId}>
                <Table.Cell>
                  <Header as="h4" image>
                    <Header.Content>
                      <a href={`https://www.google.com/search?q=${firstName}+${lastName}+${key}`}>
                        {name} {key}{" "}
                      </a>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell textAlign="right" className="number">
                  {twitterHandle}
                </Table.Cell>
                <Table.Cell textAlign="right" className="number">
                  {twitterStats && twitterStats.followersCount}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default StatesTable;
