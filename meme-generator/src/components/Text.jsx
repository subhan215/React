import React, { useState } from "react";
import Draggable from "react-draggable";
import '../App.css'
const Text = () => {
  const [editMode, setEditMode] = useState(false);
  const [val, setVal] = useState("Double click to edit");

  return (
    <Draggable>
      {editMode ? (
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onDoubleClick={() => setEditMode(false)}
          style={{
            fontSize: "18px",
            padding: "10px",
            border: "2px solid #3B82F6",
            borderRadius: "5px",
            width: '250px',
          }}
        />
      ) : (
        <h4
          onDoubleClick={() => setEditMode(true)}
          style={{
            fontSize: "18px",
            padding: "10px",
            cursor: "pointer",
            border: "2px solid transparent",
            borderRadius: "5px",
            transition: "border-color 0.3s",
            width: '250px',
            textAlign: 'center',
          }}
        >
          {val}
        </h4>
      )}
    </Draggable>
  );
};

export default Text;
