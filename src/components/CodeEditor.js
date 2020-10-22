import React, { useState } from "react";
import { Controlled } from "react-codemirror2";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/css/css";

const CodeEditor = ({ lang, name, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div
      className={`editor-container ${isOpen ? "" : "editor-container--closed"}`}
    >
      <div className="editor-container__title">
        {name}
        <button className="button" onClick={() => setIsOpen((prev) => !prev)}>
          <FontAwesomeIcon icon={isOpen ? faCompressAlt : faExpandAlt} />
        </button>
      </div>
      <Controlled
        onBeforeChange={handleChange}
        value={value}
        className="editor-container__wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: lang,
          lineNumbers: true,
          theme: "material",
        }}
      />
    </div>
  );
};

export default CodeEditor;
