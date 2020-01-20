import React, { useState, useEffect } from "react";
import { Icon, Table, Rating, Header, Image } from "semantic-ui-react";
import _ from "lodash";

import "./styles.scss";

const API_URL = "http://localhost:8080/api/v1/";
const dataUrl = API_URL + "senators?limit=10";

const Debug = () => {
  const [senators, setSenators] = useState([]);

  useEffect(() => {
    fetch(dataUrl)
      .then(res => res.json())
      .then(
        result => {
          console.log("result", result);
          setSenators(result);
        },
        error => {
          console.log(error);
        }
      );
  }, [setSenators]);

  return (
    <div className="debug table">
      <Table celled padded compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell >Name</Table.HeaderCell>
            <Table.HeaderCell >Banner</Table.HeaderCell>
            <Table.HeaderCell >Profile</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {senators.map(({ name, twitterImageUrls }) => {
            return (
              <Table.Row>
                <Table.Cell>
                  <Header as="h4" image>
                    <Header.Content>
                      {name}
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>
                    <Image src={twitterImageUrls && twitterImageUrls.banner} className="banner" />
                </Table.Cell>
                <Table.Cell>
                    <Image src={twitterImageUrls && twitterImageUrls.profile} className="profile" />
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Debug;
