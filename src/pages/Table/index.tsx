import React from "react"
import { Link } from "react-router-dom";
import { Button } from "_antd@4.16.13@antd"; "antd"
import "./index.scss"
import sty from "./index.less"

console.log(sty)

class Table extends React.Component{

  render() {
    return (
      <div>
        {/* something */}koringz
        <div className="table">table 头部</div>
        <div>
          <Button type="primary">
          Antd Button
          </Button>
        </div>
          <div>
            <Link to="./home"  >home</Link>
          </div>
      </div>
    )
  }
}

export default Table