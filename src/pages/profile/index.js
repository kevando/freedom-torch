import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { Card, Container, Image, Icon } from "semantic-ui-react";

import Nav from '../../components/nav';


const Meta = () => (
  <Helmet>
    <meta charSet="utf-8" />
    <title>Kamila Harris | The Congress Connection</title>
  </Helmet>
);

const Profile = () => {
  return (
    <div className="profile">
      <Meta />
      <Nav  />
    <Container >

      <h3>from Illinois</h3>
      <h4>Democrat</h4>

    <Card>
    <Image src='https://pbs.twimg.com/profile_images/1154780940226486273/VkOMx-UV_400x400.jpg' wrapped ui={false} />
    <Card.Content>
      <Card.Header>@kevando</Card.Header>
      <Card.Meta>
        <span className='date'>Joined Twitter in 2015 </span>
      </Card.Meta>
      <Card.Description>
      <strong>Kamila Harris </strong> is U.S. Senator. Wife, Momala, Auntie. Still fighting for the people. She/her.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='users' />
        3.3M Followers

      </a>
    </Card.Content>
    <Card.Content extra>
      <a>
        <Icon name='twitter' />
        3,203 Tweets

      </a>
    </Card.Content>
  </Card>
    </Container>
    </div>
  );

};

export default Profile;

{
  /* <Link to="/senate-table">Senate Table</Link> */
}
