import React from 'react';
import {Link } from "react-router-dom";

function Props() {
  return (
    <div>
        <h1>Display output of Props</h1>
        <Link to="/Parent" style={{marginRight:30}} className="link">Parent</Link>
    </div>
  )
}

export default Props;