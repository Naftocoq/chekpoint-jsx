import React from "react"
import { product } from "./product"

function Image() {
  return <img src={product.image} alt="Product" style={{ maxWidth: "100%" }} />
}

export default Image
