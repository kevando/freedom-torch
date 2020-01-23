
import React from 'react'
import { Button, Card, Image, Label ,Icon } from 'semantic-ui-react'

import "./styles.scss";

const CardExampleGroups = () => (

  <div className="newbies">
  <Card.Group>
    <Card>
    <Image src='https://pbs.twimg.com/profile_images/1059812997982511105/lgFAlE5t_400x400.jpg' wrapped ui={false} />
      <Card.Content>

      <Label as='a' color='blue' ribbon='right' >
          Mouse Award
        </Label>
    
      
        <Card.Header>Amy Klobuchar</Card.Header>
        <Card.Meta>Democrat Senator from MN</Card.Meta>
        <Card.Description>
          Despite being on Twitter for over 10 years, Amy only posted 568 Tweets giving her quiet as a mouse status.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='twitter' />
        34,337 Followers
      </a>
    </Card.Content>
    </Card>
    <Card>

    
    <Image src='https://pbs.twimg.com/profile_images/1087166952009805824/5R_xZExa_400x400.jpg' wrapped ui={false} />
    
      <Card.Content>
      <Label as='a' color='red' ribbon='right' >
          Newbie
        </Label>
        
        <Card.Header>Mitt Romney</Card.Header>
        <Card.Meta>Republican Senator from UT</Card.Meta>
        <Card.Description>
          Mitch ran for president when he was 70th Governor of Massachusetts. Now he's a Senator in Utah. That's quite impressive, but he is the last Senator to join Twitter.
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
      <a>
        <Icon name='twitter' />
        51,291 Followers
      </a>
    </Card.Content>
    </Card>
    
  </Card.Group>

  </div>
)

export default CardExampleGroups
