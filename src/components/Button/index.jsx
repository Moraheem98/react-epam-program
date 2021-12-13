import React from "react";

export function Button(props) {
  const { action, icon } = props;

  return (
    <button onClick={action}>{icon}</button>
  );
};
