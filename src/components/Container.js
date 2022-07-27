import React from "react";

const Container = ({ children }) => {
  return (
    <>
      <main>
        <div className="container mt-5">
          <div className="row">{children}</div>
        </div>
      </main>
    </>
  );
};

export default Container;
