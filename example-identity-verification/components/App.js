import * as React from "react";
import Abacus from "@abacusprotocol/sdk-browser";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.abacus = new Abacus({
      applicationId: "dec85ca9-2329-4be0-9f3c-f889892ee0f6" // replace this with your application id
    });
  }

  _startVerification = () => {
    this.abacus.authorizeWithModal({
      scope: ["app"],
      query: {
        // Enables KYC/AML checks.
        run_verifications: true,
        // Allows users to not need a password to sign up.
        no_password_signup: true
      }
    });
  };

  render() {
    return (
      <>
        <button onClick={this._startVerification}>Verify with Abacus</button>
      </>
    );
  }
}

export default App;
