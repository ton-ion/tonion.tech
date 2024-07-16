import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vs, vsDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import './CodeDisplay.css'; 

const CodeDisplay = ({ codeString, language = 'javascript', theme = 'light' }) => {
  const style = theme === 'dark' ? vsDark : vs;

  return (
    <div className="code-display  w-full shadow bg-transparent">
      <div className="code-display-header">
        <div className="code-display-dot red"></div>
        <div className="code-display-dot yellow"></div>
        <div className="code-display-dot green"></div>
      </div>
      <SyntaxHighlighter language={language} style={style} className="!my-0 rounded-t-none !bg-white  !mb-4">
        {codeString}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeDisplay;
