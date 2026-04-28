import "./App.css";
import User from "./card";

import avatar1_img from "./images/avatar1.png";
import avatar2_img from "./images/avatar2.png";
import avatar3_img from "./images/avatar3.png";
import User_feedback from "./user_feedback";

function App() {
  return (
    <div className="App">
      <h1 className="apptitle">Fnu Aburafau</h1>

      <section className="appcontainer">
        <User_feedback>
          <User image={avatar1_img} name="Guy" date="12/31/2005" msg="I'm Guy" />
        </User_feedback>

        <User_feedback>
          <User image={avatar2_img} name="Batman" date="12/31/2005" msg="I'm Batman" />
        </User_feedback>

        <User_feedback>
          <User image={avatar3_img} name="Star" date="12/31/2005" msg="I'm Star" />
        </User_feedback>
      </section>
    </div>
  );
}

export default App;