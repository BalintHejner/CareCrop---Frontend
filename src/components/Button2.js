import * as React from 'react';
import '../output.css';

// Main component
function Button2({ text, className }) {
  return (
    <main className="flex flex-col items-center justify-center">
       <button className={className}>
          {text}
       </button>
    </main>
  );
}

export default Button2;