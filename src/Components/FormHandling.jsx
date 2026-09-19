import { useState } from "react";

export default function FormHandling() {
  const [form, setform] = useState({
    name: "",
    age: "",
    city: "",
  });

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault();
    console.log("formData =", form);
  };

  const handleChange = (e) => {
    debugger;
    const { name, value } = e.target;
    setform((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          width: "350px",
          backgroundColor: "white",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>Student Details</h2>

        <p>
          <label>Name</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="name"
            placeholder="Enter your name"
            value={form.name}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          />
        </p>

        <p>
          <label>Age</label>
          <br />
          <input
            onChange={handleChange}
            type="number"
            name="age"
            placeholder="Enter your age"
            value={form.age}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          />
        </p>

        <p>
          <label>City</label>
          <br />
          <input
            onChange={handleChange}
            type="text"
            name="city"
            placeholder="Enter your city"
            value={form.city}
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "5px",
              boxSizing: "border-box",
            }}
          />
        </p>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            marginTop: "10px",
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
