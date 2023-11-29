import React from 'react'
import { Card } from "react-bootstrap"
import Name from "./Name"
import Price from "./Price"
import Description from "./Description"
import Image from "./Image"

const Cards = () => {
  return (
    <div>
      <Card style={{ width: "40rem", margin: "10px" }}>
        <Card.Body>
          <Image />
          <Name />
          <Price />
          <Description />
        </Card.Body>
      </Card>
    </div>
  )
}

export default Cards