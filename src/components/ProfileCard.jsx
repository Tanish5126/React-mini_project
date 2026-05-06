import React from "react";

function ProfileCard({ name, role, email, location, experience, skills, darkMode }) {
  const initial = name ? name.trim()[0].toUpperCase() : "?";
  const isEmpty = !name && !role && !email;

  if (isEmpty) {
    return (
      <div className={`luxury-card ${darkMode ? "luxury-card--light" : ""}`}>
        <div className="luxury-card__glow" />
        <p className="luxury-card__empty">Fill in your details to see your card.</p>
      </div>
    );
  }

  return (
    <div className={`luxury-card ${darkMode ? "luxury-card--light" : ""}`}>
      {/* Ambient glow blob */}
      <div className="luxury-card__glow" />

      {/* Top: Name + Role */}
      <div className="luxury-card__top">
        <h2 className="luxury-card__name">{name || "Your Name"}</h2>
        {role && <p className="luxury-card__role">{role.toUpperCase()}</p>}
        <div className="luxury-card__rule" />
      </div>

      {/* Middle: contact + experience + skills */}
      <div className="luxury-card__body">
        {(email || location) && (
          <div className="luxury-card__contact">
            {email && (
              <a className="luxury-card__contact-item" href={`mailto:${email}`}>
                <span className="luxury-card__contact-icon">✉️</span>
                {email}
              </a>
            )}
            {location && (
              <span className="luxury-card__contact-item">
                <span className="luxury-card__contact-icon">📍</span>
                {location}
              </span>
            )}
          </div>
        )}

        {experience && (
          <p className="luxury-card__experience">{experience}</p>
        )}

        {skills && skills.length > 0 && (
          <div className="luxury-card__skills">
            {skills.map((s, i) => (
              <span key={i} className="luxury-card__skill-chip">{s}</span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom right: monogram */}
      <div className="luxury-card__monogram">{initial}</div>
    </div>
  );
}

export default ProfileCard;