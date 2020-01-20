import React from "react";

import "./styles.scss";

const Welcome = () => (
  <div className="newspaper content">
    <p>
      Welcome to The Congress Connection, the most boring
      online newspaper in The United States of America. We pull data from the
      Twitter API and explore how members of congress use the internet. It's
      pure data so there's totally no bias. We report only statistics and let
      you the reader draw your own conclusions. Here's what one of our readers
      in Iowa had to say.
    </p>

    <p>
      <blockquote>"Data don't lie"</blockquote>
    </p>
    <p>
      One thing to note. Referring to him as "one of our readers" is factually
      correct based on data, we only have one reader. He's our one reader. If
      it's this easy to create a bias from a dataset of 1, we need to be
      careful. It seems very easy to mislead even if we're making factual
      statements about data.
    </p>
  </div>
);

export default Welcome;
