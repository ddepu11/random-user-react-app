import "./App.css";

import {
  FaUserAlt,
  FaMailBulk,
  FaRegCalendarAlt,
  FaSearchLocation,
  FaPhone,
  FaUserShield,
} from "react-icons/fa";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>User Profile</h1>
      </header>

      <aside className="aside">
        <div className="on-hover flex user">
          <FaUserAlt class="icon" />
          <span>Name</span>
        </div>
        <div className="on-hover flex email">
          <FaMailBulk class="icon" />
          <span>Email</span>
        </div>
        <div className="on-hover flex dob">
          <FaRegCalendarAlt class="icon" />
          <span>Birthday</span>
        </div>
        <div className="on-hover flex location">
          <FaSearchLocation class="icon" />
          <span>Location</span>
        </div>
        <div className="on-hover flex mobile">
          <FaPhone class="icon" />
          <span>Mobile No</span>
        </div>
        <div className="on-hover flex password">
          <FaUserShield class="icon" />
          <span>Location</span>
        </div>
      </aside>
      {/* Section */}
      <section className="section flex">
        <img src="https://i.pravatar.cc/150?img=45" alt="img" />
        <div className="detail flex">
          <h2>This is title</h2>
          <p>An the value</p>
        </div>
      </section>
    </div>
  );
}

export default App;
