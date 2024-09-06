import React, { FC, useState, useCallback } from "react";
import "./style.css";

export const Invites: FC<{
  invites: string[];
  onAdd: (name: string) => void;
}> = ({ invites, onAdd }) => {
  const [name, setName] = useState("");

  const handleSubmit = useCallback(() => {
    onAdd(name);
    setName("");
  }, [name, onAdd]);

  return (
    <div className="invites">
      <div className="invites--form">
        <input
          className="invites--form-input"
          onChange={(event) => setName(event.target.value)}
          type="text"
          value={name}
        />
        <button className="invites--form-submit" onClick={handleSubmit}>
          Invite
        </button>
      </div>
      <div className="invites--delimiter" />
      <ul className="invites--items">
        {invites.map((name) => (
          <li className="invites--item">{name}</li>
        ))}
      </ul>
    </div>
  );
};
