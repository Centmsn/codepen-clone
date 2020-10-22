import React, { useState, useEffect } from "react";
import CodeEditor from "./CodeEditor";

import useLocalStorage from "../hooks/useLocalStorage";

const App = () => {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setSrcDoc(
        `<html><body>${html}</body><style>${css}</style><script>${js}</script></html>`
      );
    }, 500);

    return () => clearTimeout(delay);
  }, [html, css, js]);

  return (
    <>
      <div className="container container--top">
        <CodeEditor lang="xml" name="HTML" value={html} onChange={setHtml} />
        <CodeEditor lang="css" name="CSS" value={css} onChange={setCss} />
        <CodeEditor lang="javascript" name="JS" value={js} onChange={setJs} />
      </div>
      <div className="container">
        <iframe
          srcDoc={srcDoc}
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        ></iframe>
      </div>
    </>
  );
};

export default App;
