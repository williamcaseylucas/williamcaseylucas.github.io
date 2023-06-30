import React from "react";

function Footer() {
  return (
    <div className="py-5 text-center">
      {/* Insert social icons */}
      <p className="text-sm mt-2 opacity-50">
        &copy; {new Date().getFullYear()} William Runyon. All rights reserved
      </p>
    </div>
  );
}

export default Footer;
