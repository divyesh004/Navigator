import React, { useEffect, useState } from 'react'

const Product = () => {
  const [data, setdata] = useState([])

  const fetchdataa = () => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setdata(data))
      .catch((err) => console.log(err))

  }
  useEffect(() => {
    fetchdataa()
  }, [])

  return (
    <div>
      {data.map((e) => (
        <div
          key={e.id}
          style={{ border: "1px solid black", width: "300px" }}
        >
          <img
            src={e.image}
            alt=""
            height={200}
            width={200}
            style={{ marginLeft: "50px" }}
          />
          <h5 style={{ textAlign: "center" }}>{e.title}</h5>
          <h5 style={{ textAlign: "center" }}>{e.price}</h5>
          <p style={{ textAlign: "center" }}>{e.category}</p>
        </div>
      ))
      }
    </div>

  )
}

export default Product
