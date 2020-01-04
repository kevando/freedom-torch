import React from "react";
import { Header } from "semantic-ui-react";

import "./styles.scss";

const Welcome = () => (
  <div className="newspaper-column">
    <Header as="h2">Welcome</Header>
    <p>
      The internet changed how we communicate as a species and it's finally
      affecting goverment. Mostly through Twitter. My goal is to simply report
      pure statistics and let you the reader draw your own conclusions. No, The
      Spin Doctors will not be appearing here. However - expect some flavors
      from the 90s. I also plan to share old content, like a cspan video,
      evidence that our political discourse wasn't always polluted.
    </p>

    <p>
      I designed the interface to take advantage of "visited" attributes in
      HTML. Instead of turning links from blue to purple, content will shift
      from greyscale to color as you explore. I hope this encourages you to come
      back and explore.
    </p>

    <p>
      <i>January 3, 2020</i>
    </p>
  </div>
);

export default Welcome;
