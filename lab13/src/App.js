import "./App.css";
import User from "./card";
import User_feedback from "./user_feedback";
import Modalwindow from "./modalwindow";

import avatar1_img from "./images/avatar1.png";
import avatar2_img from "./images/avatar2.png";
import avatar3_img from "./images/avatar3.png";

function App() {
  return (
    <div className="App">
      <h1 className="apptitle">Fnu Aburafau</h1>

      <section className="appcontainer">
        <User_feedback username="Guy">
          <User image={avatar1_img} date="12/31/2005" msg="I'm Guy" />
        </User_feedback>

        <User_feedback username="Batman">
          <User image={avatar2_img} date="12/31/2005" msg="I'm Batman" />
        </User_feedback>

        <User_feedback username="Star">
          <User image={avatar3_img} date="12/31/2005" msg="I'm Star" />
        </User_feedback>
      </section>

      {/* comments list */}
      <section className="postcomment">
        <ul className="commentlist"></ul>
      </section>

      {/* ONE modal only */}
      <Modalwindow />
    </div>
  );
}

export default App;