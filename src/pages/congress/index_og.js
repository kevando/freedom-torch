import React, { useEffect, useState } from "react";
// import { Container } from "semantic-ui-react";

import Container from "../../components/container";
import Meta from "../../components/meta";

import Table from "./table";

import { fetchData } from "../../lib/helpers";

const States = props => {
  const [members, setMembers] = useState(null);

  useEffect(() => {
    async function fetchMembers() {
      const data = await fetchData("members");
      data && setMembers(data.members);
    }
    fetchMembers();
  }, []);

  return (
    <div className="states">
      <Meta title="Congress" />

      <Container nav>
        <h1>The United States Congress</h1>
        {members && <Table members={members} />}
      </Container>
    </div>
  );
};

export default States;
