import React from "react";
import { Header } from "semantic-ui-react";
import { Link } from "react-router-dom"

import TableFollowers from "./table-followers";
import TablePodium from "./table-podium";

import "./styles.scss";

const Popular = () => (
  <div className="newspaper content">
    <Header as="h3">Bernie's Podium</Header>

    <p>
      All 100 U.S. Senators have a Twitter account. The newest additions are
      Josh Hawley (MO), Mike Braun (IN), and Cindy Hyde-Smith (MS). They joined
      Twitter less than 1 year ago and not suprisingly sit in the bottom 5 for
      both total followers and total tweets. All 3 are Republican. The two most
      popular Senators are Bernie Sanders (8.7m) and Elizabeth Warren (5.4).
      Together they have more followers than the next 14 Senators combined!
    </p>
    <TableFollowers />
    <p>
      What makes Bernie stand out even more is when you consider the state he
      represents. Only Wyoming has less people than his Vermont. Vermont has
      less than 500k eligable voters. If we divide Sanders' 8.7m followers by
      the voters from his state, his digital podium reaches a whopping{" "}
      <span className="green number bold">17x</span>{" "}{" "}
      the people in his state.
    </p>
    <h4><Link to="/senate-table">See Full List of Senators</Link></h4>

    <TablePodium />
  </div>
);

export default Popular;
