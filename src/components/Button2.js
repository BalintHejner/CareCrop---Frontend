import * as React from 'react';
import '../output.css';

// Main component
function Button({ text, className }) {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
       <button className={className}>
          {text}
       </button>
    </main>
  );
}

export default Button;