import React from "react";
import { Link } from "react-router-dom";


export default function Shop(){

    return(
        <div className="directory-container">
            

            <a href="/merchandise" className="merch-link">
    <div>
      <h2>Merchandise</h2>
    </div>
  </a>

  <Link to="/sauce" className="sauce-link">
    <div>
      <h2>Sauce</h2>
    </div>
  </Link>
</div>
    )
}