import { useState } from "react";
import "../Css/CreateStudent.css";

export default function CreateStudent() {
  const [student, setStudent] = useState({
    name: null,
    email: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudent((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  const createStudent = (e) => {
    e.preventDefault();
    console.log(student);
  };
  return (
    <div className="create-student-page">
      <div className="student-card">
        <div className="card-header">
          <div className="student-icon">🎓</div>
          <h1>Create Student</h1>
          <p>Add a new student to the system</p>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="name">Student Name</label>
            <input
              onChange={handleChange}
              value={student.name}
              id="name"
              type="text"
              name="name"
              placeholder="Enter student name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              onChange={handleChange}
              value={student.email}
              id="email"
              type="email"
              name="email"
              placeholder="student@example.com"
            />
          </div>

          <div className="id-info">
            <span className="info-icon">i</span>
            Student ID will be generated automatically
          </div>

          <button
            onClick={createStudent}
            type="submit"
            className="create-button"
          >
            Create Student
          </button>
        </form>
      </div>
    </div>
  );
}
