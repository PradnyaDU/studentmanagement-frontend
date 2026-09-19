import { useState } from "react";

export default function AdvancedForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    dob: "",
    gender: "",
    skills: [],
    city: "",
    phone: "",
    website: "",
    about: "",
    resume: "",
    experience: "",
    color: "",
  });

  const handleClick = (e) => {
    e.preventDefault();
    console.log("FormData = ", formData);
  };

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "skills") {
      setFormData((prevForm) => ({
        ...prevForm,
        skills: checked
          ? [...prevForm.skills, value]
          : prevForm.skills.filter((skill) => skill !== value),
      }));
    } else
      setFormData((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "40px",
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
      }}
    >
      <form
        style={{
          width: "450px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Student Registration</h2>

        <p>
          <label>Full Name</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.name}
            type="text"
            name="name"
            placeholder="Enter your name"
            style={{ width: "100%", padding: "8px" }}
          />
        </p>

        <p>
          <label>Email</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            name="email"
            placeholder="Enter your email"
            style={{ width: "100%", padding: "8px" }}
          />
        </p>

        <p>
          <label>Password</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            name="password"
            placeholder="Enter password"
            style={{ width: "100%", padding: "8px" }}
          />
        </p>

        <p>
          <label>Age</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.age}
            type="number"
            name="age"
            min="18"
            max="60"
            style={{ width: "100%", padding: "8px" }}
          />
        </p>

        <p>
          <label>Date of Birth</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.dob}
            type="date"
            name="dob"
            style={{ width: "100%", padding: "8px" }}
          />
        </p>

        <p>
          <label>Gender</label>
          <br />

          <input
            onChange={handleChange}
            checked={formData.gender === "Male"}
            type="radio"
            name="gender"
            value="Male"
          />
          <label> Male </label>

          <input
            onChange={handleChange}
            checked={formData.gender === "Female"}
            type="radio"
            name="gender"
            value="Female"
          />
          <label> Female </label>

          <input
            onChange={handleChange}
            checked={formData.gender === "Others"}
            type="radio"
            name="gender"
            value="Other"
          />
          <label> Other </label>
        </p>

        <p>
          <label>Skills</label>
          <br />

          <input
            checked={formData.skills.includes("Java")}
            onChange={handleChange}
            type="checkbox"
            name="skills"
            value="Java"
          />
          <label> Java </label>

          <input
            checked={formData.skills.includes("React")}
            onChange={handleChange}
            type="checkbox"
            name="skills"
            value="React"
          />
          <label> React </label>

          <input
            checked={formData.skills.includes("Spring Boot")}
            onChange={handleChange}
            type="checkbox"
            name="skills"
            value="Spring Boot"
          />
          <label> Spring Boot </label>
        </p>

        <p>
          <label>City</label>
          <br />

          <select
            value={formData.city}
            onChange={handleChange}
            name="city"
            style={{ width: "100%", padding: "8px" }}
          >
            <option value="">Select City</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nashik">Nashik</option>
            <option value="Ahmednagar">Ahmednagar</option>
          </select>
        </p>

        <p>
          <label>Phone Number</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.phone}
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            style={{ width: "100%", padding: "8px" }}
          />
        </p>

        <p>
          <label>LinkedIn / Website</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.website}
            type="url"
            name="website"
            placeholder="https://..."
            style={{ width: "100%", padding: "8px" }}
          />
        </p>

        <p>
          <label>About Yourself</label>
          <br />

          <textarea
            onChange={handleChange}
            value={formData.about}
            name="about"
            rows="4"
            placeholder="Tell us about yourself"
            style={{
              width: "100%",
              padding: "8px",
              resize: "vertical",
            }}
          />
        </p>

        <p>
          <label>Upload Resume</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.resume}
            type="file"
            name="resume"
          />
        </p>

        <p>
          <label>Experience Level</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.experience}
            type="range"
            name="experience"
            min="0"
            max="10"
          />
        </p>

        <p>
          <label>Favourite Color</label>
          <br />
          <input
            onChange={handleChange}
            value={formData.color}
            type="color"
            name="color"
          />
        </p>

        <p>
          <input type="checkbox" name="terms" />
          <label> I agree to the Terms & Conditions</label>
        </p>

        <button
          onClick={handleClick}
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            cursor: "pointer",
            fontSize: "16px",
          }}
        >
          Register
        </button>

        <button
          type="reset"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      </form>
    </div>
  );
}
