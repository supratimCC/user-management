import React from "react";

export default function Loader() {
  return (
    <div className="text-center text-primary">
      <div class="spinner-border text-primary" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
