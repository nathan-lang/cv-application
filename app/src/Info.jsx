import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

const Info = () => {
  const [info, setInfo] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    major: "",
    gpa: "",
    achievements: "",
    startSchool: "",
    endSchool: "",
    company: "",
    position: "",
    responsibilities: "",
    startWork: "",
    endWork: "",
  });
  const handleSubmitForm = () => {
    if (
      document.getElementById("name").value === "" ||
      document.getElementById("email").value === "" ||
      document.getElementById("phone-num").value === "" ||
      document.getElementById("school-name").value === "" ||
      document.getElementById("major").value === "" ||
      document.getElementById("gpa").value === "" ||
      document.getElementById("achievements").value === "" ||
      document.getElementById("start-date").value === "" ||
      document.getElementById("end-date").value === "" ||
      document.getElementById("company-name").value === "" ||
      document.getElementById("position-title").value === "" ||
      document.getElementById("responsibilities").value === "" ||
      document.getElementById("work-start-date").value === "" ||
      document.getElementById("work-end-date").value === ""
    ) {
      console.log(
        document.getElementById("name").value,
        document.getElementById("email").value
      );
      alert("One of the fields are empty. Please fill them out.");
      return;
    }
    setInfo({
      ...info,
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone-num").value,
      school: document.getElementById("school-name").value,
      major: document.getElementById("major").value,
      gpa: document.getElementById("gpa").value,
      achievements: document.getElementById("achievements").value,
      startSchool: document.getElementById("start-date").value,
      endSchool: document.getElementById("end-date").value,
      company: document.getElementById("company-name").value,
      position: document.getElementById("position-title").value,
      responsibilities: document.getElementById("responsibilities").value,
      startWork: document.getElementById("work-start-date").value,
      endWork: document.getElementById("work-end-date").value,
    });
    console.log("info now:", info);
  };
  return (
    <>
      <img
        className="bg"
        src="https://i.pinimg.com/736x/3e/b8/57/3eb857b24ce77662a6a1ff3498ed8198.jpg"
      />
      <div className="info">
        <h3>General Information:</h3>
        <form method="get">
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="johndoe@odinproject.com"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="phone-num">Phone Number: </label>
            <input
              id="phone-num"
              name="phone-num"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              placeholder="123-456-7890"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <h3>Educational Experience:</h3>
        <form method="get">
          <div>
            <label htmlFor="school-name">School Name: </label>
            <input
              type="text"
              id="school-name"
              name="school-name"
              placeholder="Princeton"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="major">Major: </label>
            <input
              type="text"
              id="major"
              name="major"
              placeholder="Computer Science"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="gpa">GPA: </label>
            <input
              type="text"
              id="gpa"
              name="gpa"
              placeholder="3.5"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="achievements">Achievements: </label>
            <input
              type="text"
              id="achievements"
              name="achievements"
              placeholder="Achieved Dean's List in all semesters."
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="start-date">Start Date: </label>
            <input
              type="text"
              id="start-date"
              name="start-date"
              pattern="[a-zA-Z]{3}\s[0-9]{4}"
              placeholder="Sep 2019"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="end-date">End Date: </label>
            <input
              type="text"
              id="end-date"
              name="end-date"
              pattern="[a-zA-Z]{3}\s[0-9]{4}"
              placeholder="May 2023"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <h3>Practical Experience:</h3>
        <form method="get">
          <div>
            <label htmlFor="company-name">Company Name: </label>
            <input
              type="text"
              id="company-name"
              name="company-name"
              placeholder="Google"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="position-title">Position Title: </label>
            <input
              type="text"
              id="position-title"
              name="position-title"
              placeholder="Software Engineer"
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form>
          <div>
            <label htmlFor="responsibilities">Responsibilities: </label>
            <input
              type="text"
              id="responsibilities"
              name="responsibilities"
              placeholder="Worked on XYZ, improved ABC by 50%..."
              required
            ></input>
          </div>
        </form>
        <br></br>
        <form method="get">
          <div>
            <label htmlFor="work-start-date">Start Date of Work: </label>
            <input
              type="text"
              id="work-start-date"
              name="work-start-date"
              pattern="[a-zA-Z]{3}\s[0-9]{4}"
              required
              placeholder="May 2021"
            ></input>
          </div>
        </form>
        <br></br>
        <form>
          <div>
            <label htmlFor="work-end-date">End Date of Work: </label>
            <input
              type="text"
              id="work-end-date"
              name="work-end-date"
              pattern="[a-zA-Z]{3}\s[0-9]{4}"
              required
              placeholder="Aug 2021"
            ></input>
          </div>
        </form>
        <br></br>
        <br></br>
        <button className="submit" onClick={handleSubmitForm}>
          Submit
        </button>
      </div>

      <div className="cv">
        <div className="name">{info.name}</div>
        <div className="email-and-phone">
          {info.email} • {info.phone}
        </div>
        <div className="education-title">Education</div>
        <hr></hr>
        <div className="school-and-dates">
          <div className="school-name">{info.school}</div>
          <div className="start-end-school">
            {info.startSchool} - {info.endSchool}
          </div>
        </div>
        <div className="major">{info.major}</div>
        <ul>
          <li className="gpa">GPA: {info.gpa}</li>
          <br></br>
          <li className="achievements">
            <p>Achievements: {info.achievements}</p>
          </li>
        </ul>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="experience-title">Experience</div>
        <hr></hr>
        <div className="company-and-dates">
          <div className="company">{info.company}</div>
          <div className="start-end-work">
            {info.startWork} - {info.endWork}
          </div>
        </div>
        <div className="position">{info.position}</div>
        <br></br>
        <ul>
          <li className="responsibilities">{info.responsibilities}</li>
        </ul>
      </div>
    </>
  );
};

export default Info;
