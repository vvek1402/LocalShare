import React from "react";

export default function Footer() {
  return (
    <div className="text-center py-4">
      <p className="text-sm">
        Made with love
        <a
          href="https://github.com/your-github-link"
          className="text-blue-400 hover:text-blue-600 ml-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </p>
    </div>
  );
}
