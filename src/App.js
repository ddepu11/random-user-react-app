import "./App.css";
import { useEffect, useState } from "react";

import {
  FaUserAlt,
  FaMailBulk,
  FaRegCalendarAlt,
  FaSearchLocation,
  FaPhone,
  FaUserShield,
} from "react-icons/fa";

function App() {
  const [person, setPerson] = useState();
  const [title, setTitle] = useState("default");
  const [value, setValue] = useState("default");

  const [pic, setPic] = useState(
    "https://randomuser.me/api/portraits/men/43.jpg"
  );

  const fetchPerson = async () => {
    try {
      const res = await fetch("https://randomuser.me/api/");
      const { results } = await res.json();

      const {
        name: { title, first, last },
        picture: { large },
      } = results[0];
      const {
        login: { password },
        email,
        cell,
        dob: { date, age },
      } = results[0];
      const {
        street: { name },
        city,
        state,
      } = results[0].location;

      const newPerson = {
        name: `${title} ${first} ${first}`,
        email,
        dob: `${new Date(date).toLocaleDateString()} Age:${age}`,
        address: `${name}, ${city}, ${state}`,
        mobileNo: cell,
        password: password,
      };

      setPic(large);
      console.log(newPerson);
      setPerson(newPerson);
      setTitle("name");
      setValue(person["name"].trim());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPerson();
  }, []);

  function handleMouseOver(e) {
    if (e.target.dataset.label) {
      const title = e.target.dataset.label.trim();
      setTitle(title);
      setValue(person[title].trim());
    }
  }

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <h1>User Profile</h1>
      </header>

      <aside className="aside ">
        <div className="on-hover  user">
          <FaUserAlt
            className="icon"
            data-label="name"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          />
          <span
            data-label="name"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          >
            Name
          </span>
        </div>
        <div className="on-hover  email">
          <FaMailBulk
            className="icon"
            data-label="email"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          />
          <span
            data-label="email"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          >
            Email
          </span>
        </div>
        <div className="on-hover  dob">
          <FaRegCalendarAlt
            className="icon"
            data-label="dob"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          />
          <span
            data-label="dob"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          >
            Birthday
          </span>
        </div>
        <div className="on-hover  location">
          <FaSearchLocation
            className="icon"
            data-label="address"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          />
          <span
            data-label="address"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          >
            Location
          </span>
        </div>
        <div className="on-hover  mobile">
          <FaPhone
            className="icon"
            data-label="mobileNo"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          />
          <span
            data-label="mobileNo"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          >
            Mobile No
          </span>
        </div>
        <div className="on-hover  password">
          <FaUserShield
            className="icon"
            data-label="password"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          />
          <span
            data-label="password"
            onMouseOver={handleMouseOver}
            onClick={handleMouseOver}
          >
            Password
          </span>
        </div>
      </aside>
      {/* Section */}
      <section className="section inner-grid">
        <div className="avatar">
          <img src={pic} alt="img" />
        </div>

        <div className="detail flex">
          <h2>{value}</h2>
          <p>The {title} of person</p>
        </div>

        <button className="random-btn" onClick={fetchPerson}>
          Random Person
        </button>
      </section>
    </div>
  );
}

export default App;
