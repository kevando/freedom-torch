import React from "react";
import { Header, Table, Icon } from "semantic-ui-react";

const topSenators = [
  ["VT", "Bernie Sanders", "8,793,048", "493,535", "17.8x", "SenSanders", "D"],
  [
    "MA",
    "Elizabeth Warren",
    "5,488,909",
    "4,887,325",
    "1.1x",
    "SenWarren",
    "D"
  ],
  [
    "KY",
    "Senator Rand Paul",
    "2,573,503",
    "3,313,805",
    "0.7x",
    "RandPaul",
    "R"
  ],
  [
    "NY",
    "Chuck Schumer",
    "1,962,487",
    "13,605,860",
    "0.1x",
    "SenSchumer",
    "D"
  ],
  [
    "CA",
    "Senator Dianne Feinstein",
    "1,388,094",
    "24,582,595",
    "0.0x",
    "SenFeinstein",
    "D"
  ],
  [
    "TX",
    "Senator Ted Cruz",
    "1,336,639",
    "17,177,630",
    "0.0x",
    "SenTedCruz",
    "R"
  ],
  [
    "SC",
    "Lindsey Graham",
    "1,230,782",
    "3,620,830",
    "0.3x",
    "LindseyGrahamSC",
    "R"
  ]
];

const TableExamplePadded = () => (
  <div className="senate-table">
    <Table padded  compact  basic='very' unstackable>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="left">State</Table.HeaderCell>
          <Table.HeaderCell>Senator</Table.HeaderCell>
          <Table.HeaderCell  textAlign="right">Followers</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {topSenators.map(s => {
          return (
            <Table.Row className={`sen-${s[5]}`}>
              <Table.Cell>
                <Header as="h4" textAlign="left">
                  {s[0]}
                </Header>
              </Table.Cell>
              <Table.Cell singleLine>
                {s[1]} &nbsp;
                <a href={`https://twitter.com/${s[5]}`} target="_blank" rel="noopener noreferrer">
                  <Icon
                    name="twitter"
                    color={s[6] === "D" ? "blue" : "red"}
                    size="small"
                  />
                </a>
              </Table.Cell>
              <Table.Cell textAlign="right" className="number followers">
                {s[2]}
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  </div>
);

export default TableExamplePadded;
