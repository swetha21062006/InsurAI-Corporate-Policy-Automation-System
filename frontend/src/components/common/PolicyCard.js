import React from "react";

function PolicyCard({ title, summary }) {
  return (
    <div className="policy-card">
      <h3>{title}</h3>
      <p>{summary}</p>
    </div>
  );
}

export default PolicyCard;
