import React from "react";
import Row from "react-bootstrap/esm/Row";

function Header() {
  return (
    <Row className="mt-3 bg-dark bg-opacity-25">
      <h2>Card Memory Game</h2>
      <h6>
        Goal is to click all the cards. You lose when you click a card more than
        once!
      </h6>
      <h6>
        Message me the secret passphrase revealed once you win the game (❁´◡`❁)
      </h6>
    </Row>
  );
}

export default Header;
