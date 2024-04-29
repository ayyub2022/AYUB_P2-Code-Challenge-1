import React from "react";

function Header() {
  return (
    <div
      className="container-fluid"
      style={{
        background: "black",
        color: "blue",
        textAlign: "center",
        paddingTop: "10px",
        paddingBottom: "10px",
        fontSize: "75px",
        fontFamily: "serif"
      }}
    >
      <p className="display-4 text-center font-weight-bold p-0">
        The Royal Bank of Flatiron
      </p>

     
    </div>
  );
}

export default Header;