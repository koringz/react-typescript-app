import React from "react"
import { Link } from "react-router-dom";

class Home extends React.Component{

  render() {
    return (
      <div>
        {/* something */}123
        <div>
          <Link to="./table" >table</Link>
        </div>
      </div>
    )
  }
}

export default Home