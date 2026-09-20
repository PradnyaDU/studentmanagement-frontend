import { useEffect, useState } from "react";

export default function FetchAPI() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/students")
      .then((response) => response.json())
      .then((json) => setStudents(json));
  }, []);
  return (
    <>
      <p>
        {students.map((stu) => (
          <li key={stu.id}>
            {stu.studentName} - {stu.studentEmail}
          </li>
        ))}
      </p>
    </>
  );
}
