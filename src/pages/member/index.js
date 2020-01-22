import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Breadcrumb } from "semantic-ui-react";

import Nav from "../../components/nav";
import Loader from "../../components/loader";
import Container from "../../components/container";
import MembersTable from "../../components/table/members";

import { fetchData } from "../../lib/helpers";

// import "./styles.scss";

const MemberView = props => {
  const { docId } = useParams();

  const [member, setMember] = useState(null);

  useEffect(() => {
    async function fetchState() {
      const data = await fetchData(`members/${docId}`);
      setMember(data.member);
    }
    fetchState();
  }, []);

  if (!member) return null;

  return (
    <Container className="member" title={member.name}>
      <Nav large />

      <Breadcrumb size="large">
          <Breadcrumb.Section link href="/">Home</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section link href="/states">United States</Breadcrumb.Section>
          <Breadcrumb.Divider icon='right chevron' />
          <Breadcrumb.Section active>{member.name}</Breadcrumb.Section>
        </Breadcrumb>

      <h2 className="title">{member.name}</h2>
      <p>{member.twitterHandle}</p>
     
    </Container>
  );
};

export default MemberView;
