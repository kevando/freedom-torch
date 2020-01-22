import React, { useState, useEffect } from "react";
import { Image, Table, Header } from "semantic-ui-react";
import { Link } from "react-router-dom";
import _ from "lodash";

const COLS = {
  name: "Name",
  party: "Party",
  endTerm: "End Term",
  'twitterStats.followersCount': "Followers"
};

const MembersTable = ({ members = [], columns = COLS }) => {
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
            {_.map(columns, (label, col) => (
              <Table.HeaderCell
                key={col}
                sorted={column === col ? direction : null}
                onClick={handleSort(col)}
              >
                {label}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map(({ docId, name, party, chamber, endTerm, twitterInfo = {}, twitterStats }) => {
            return (
              <Table.Row key={name}>
                <Table.Cell>
                  <Header as="h3" image>
                  <Image src={twitterInfo.profileImageUrl} rounded size='large' />
                    <Header.Content>
                      <Link to={`/m/${docId}`}>{name}</Link>
                      <Header.Subheader>{chamber === "sen" ? "Senator" : "Representative"}</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>

                <Table.Cell width={1}>{party}</Table.Cell>
                <Table.Cell >{endTerm}</Table.Cell>
                <Table.Cell >{twitterStats && twitterStats.followersCount.toLocaleString()}</Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default MembersTable;
