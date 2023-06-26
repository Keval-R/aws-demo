import "./App.css";
import { DataStore } from "@aws-amplify/datastore";
import { CAUSES } from "./models";
import { CustomCausesForm } from "./ui-components";
import { withAuthenticator } from "@aws-amplify/ui-react";

function App({ signOut, user }) {
  const create = async () => {
    console.log("reper");
    const result = await DataStore.save(
      new CAUSES({
        name: "Static lorem ipsum dolor sit amet",
        image: "Static lorem ipsum dolor sit amet",
      })
    );
    console.log("result: " + JSON.stringify(result));

    if (result) {
      alert("Success!");
    } else {
      alert("Error!");
    }
  };

  return (
    <div style={{ width: "40%" }}>
      <h1>Hello {user?.attributes?.email}</h1>
      <button onClick={signOut}>Sign out</button>
      <CustomCausesForm />
      <button type="button" onClick={create}>
        Add static data
      </button>
    </div>
  );
}

export default withAuthenticator(App);
