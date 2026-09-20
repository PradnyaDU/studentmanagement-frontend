import "../Css/DeleteStudent.css";

export default function DeleteStudent() {
  return (
    <div className="delete-student-page">
      <div className="delete-card">
        <div className="card-header">
          <div className="delete-icon">🗑️</div>
          <h1>Delete Student</h1>
          <p>Enter the student ID you want to remove</p>
        </div>

        <form>
          <div className="form-group">
            <label htmlFor="studentId">Student ID</label>

            <input
              id="studentId"
              type="number"
              name="studentId"
              placeholder="Enter student ID"
            />
          </div>

          <div className="warning-box">
            <span className="warning-icon">!</span>
            This action will permanently delete the student.
          </div>

          <button type="submit" className="delete-button">
            Delete Student
          </button>
        </form>
      </div>
    </div>
  );
}
