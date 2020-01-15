import React from "react";
import { Header } from "semantic-ui-react";

import TopSenateTable from "./table";

import "./styles.scss";

const Popular = () => (
  <div className="newspaper-column">
    <Header as="h2">The U.S. Senate</Header>
    <p>
      All 100 U.S. Senators have some form of Twitter. Josh Hawley (MO), Mike
      Braun (IN), and Cindy Hyde-Smith (MS) all joined Twitter less than 1 year
      ago, and are in the bottom 5 for both followers and total tweets. All 3
      are Republican.
    </p>
    <p>
      The two most popular Senators are Bernie Sanders (8.7m) and Elizabeth
      Warren (5.4). Together they have more followers than the next 14 Senators
      combined! Talk about a megaphone. Especially for Sanders. While Warren
      does have more followers than her state has voters (5.4m vs 4.8m), Sanders
      8.7m followers is a whopping{" "}
      <span className="green number bold">17x</span> the eligable voters in his
      state of Vermont.
    </p>

    <TopSenateTable />

    <p>
      The next thing I want to look at is how long someone has been in congress
      if that has an impact on their reach. Bernie's reach is pretty incredible
      but he's also been in government since the dinosaurs got wiped out.
    </p>
  </div>
);

export default Popular;
