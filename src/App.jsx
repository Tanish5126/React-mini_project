import React, { useState } from "react";
import ProfileCard from "./components/ProfileCard";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const [form, setForm] = useState({
    name: "",
    role: "",
    email: "",
    location: "",
    experience: "",
  });
  const [skillInput, setSkillInput] = useState("");
  const [skills, setSkills] = useState([]);
  




  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const addSkill = () => {
    const val = skillInput.trim();
    if (!val) return;
    setSkills([...skills, val]);
    setSkillInput("");
  };

  const removeSkill = (i) => setSkills(skills.filter((item, idx) => idx !== i));

  return (
    <div className={darkMode ? "app dark" : "app"}>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-brand">Profile Card Generator</div>
        <button className="toggle-btn" onClick={() => setDarkMode((prev) => !prev)}>
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
      </nav>

      {/* MAIN LAYOUT */}
      <div className="generator-layout">

        {/* LEFT — FORM */}
        <div className="form-panel">
          <h2 className="panel-title">Your Details</h2>

          <label className="form-label">Full Name</label>
          <input className="form-input" type="text" name="name" placeholder="e.g. Ankur Gupta" value={form.name} onChange={handleChange} />

          <label className="form-label">Role / Title</label>
          <input className="form-input" type="text" name="role" placeholder="e.g. Fullstack Developer" value={form.role} onChange={handleChange} />

          <label className="form-label">Email</label>
          <input className="form-input" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />

          <label className="form-label">Location</label>
          <input className="form-input" type="text" name="location" placeholder="e.g. Pune, India" value={form.location} onChange={handleChange} />

          <label className="form-label">Work Experience</label>
          <textarea className="form-input form-textarea" name="experience" placeholder="e.g. Frontend Intern at TechCorp (2023-24)" value={form.experience} onChange={handleChange} />

          {/* SKILLS */}
          <label className="form-label">Skills</label>
          <div className="tag-input-row">
            <input className="form-input" type="text" placeholder="e.g. React, Node.js" value={skillInput} onChange={(e) => setSkillInput(e.target.value)} onKeyDown={(e) => e.key === "Enter" && addSkill()}/>
            <button className="add-btn" onClick={addSkill}>Add</button>
          </div>

          <div className="tags-wrap">
            {skills.map((s, i) => (
              <span key={i} className="tag">
                {s} <span className="tag-remove" onClick={() => removeSkill(i)}>x</span>
              </span>
            ))}
          </div>
          
        </div>

        {/* RIGHT — LIVE CARD PREVIEW */}
        <div className="preview-panel">
          <h2 className="panel-title">Live Preview</h2>
          <ProfileCard
            name={form.name}
            role={form.role}
            email={form.email}
            location={form.location}
            experience={form.experience}
            skills={skills}
            darkMode={darkMode}
          />
        </div>

      </div>
    </div>
  );
}

export default App;