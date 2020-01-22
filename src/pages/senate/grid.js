import React, { useState } from "react";
import { Grid, Image, Reveal } from "semantic-ui-react";
import _ from "lodash";

import { shuffleArray } from "../../lib/helpers";

const Door = ({ senator }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <Reveal animated="move right" active={isActive}>
      <Reveal.Content visible>
        <Image src="https://react.semantic-ui.com/images/wireframe/image-text.png" />
      </Reveal.Content>
      <Reveal.Content hidden onClick={() => setIsActive(true)}>
        <Image src={senator.twitterImageUrls.profile} />
      </Reveal.Content>
    </Reveal>
  );
};

const rowColumns = [
  3,
  7,
  4,
  5,
  2,
  5,
  4,
  3,
  7,
  4,
  5,
  2,
  5,
  4,
  3,
  7,
  4,
  5,
  2,
  5,
  4,
  3
];

let i = 0;

const YearbookGrid = props => {
  const { senators } = props;

  shuffleArray(senators);

  return (
    <Grid>
      {rowColumns.map(cols => {
        console.log("i", i);
        return (
          <Grid.Row columns={cols} key={`row-${i}-${cols}`}>
            {_.times(cols, () => {
              return (
                <Grid.Column key={`col-${i}=${cols}`}>
                  <Door senator={senators[i++]} />
                </Grid.Column>
              );
            })}
          </Grid.Row>
        );
      })}
    </Grid>
  );
};

export default YearbookGrid;
