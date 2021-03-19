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

      <aside className="aside">
        <div
          className="on-hover flex user"
          data-label="name"
          onMouseOver={handleMouseOver}
        >
          <FaUserAlt className="icon" />
          <span>Name</span>
        </div>
        <div
          className="on-hover flex email"
          data-label="email"
          onMouseOver={handleMouseOver}
        >
          <FaMailBulk className="icon" />
          <span>Email</span>
        </div>
        <div
          className="on-hover flex dob"
          data-label="dob"
          onMouseOver={handleMouseOver}
        >
          <FaRegCalendarAlt className="icon" />
          <span>Birthday</span>
        </div>
        <div
          className="on-hover flex location"
          data-label="address"
          onMouseOver={handleMouseOver}
        >
          <FaSearchLocation className="icon" />
          <span>Location</span>
        </div>
        <div
          className="on-hover flex mobile"
          data-label="mobileNo"
          onMouseOver={handleMouseOver}
        >
          <FaPhone className="icon" />
          <span>Mobile No</span>
        </div>
        <div
          className="on-hover flex password"
          data-label="password"
          onMouseOver={handleMouseOver}
        >
          <FaUserShield className="icon" />
          <span>Password</span>
        </div>
      </aside>
      {/* Section */}
      <section className="section flex">
        <div className="avatar">
          <img src={pic} alt="img" />
        </div>
        <div className="detail flex">
          <h2>{value}</h2>
          <p>The {title} of person</p>
        </div>
      </section>
    </div>
  );
}

export default App;
