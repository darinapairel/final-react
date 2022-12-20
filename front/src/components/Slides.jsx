import React from 'react'
import { useEffect, useState } from 'react'

const port = process.env.REACT_APP_API_PORT
const Slides = () => {
  const [img, setImg] = useState()

  const fetchImg = async () => {
    const res = await  fetch(`http://localhost:${port}/cards/meow.jpg`)
    const imageBlob = await res.blob()
    const imageObjectURL = URL.createObjectURL(imageBlob)
    setImg(imageObjectURL)
  }
  useEffect(()=>{
    console.log("PORT", port)
    fetchImg()
  }, [])
  return (
    <>
      <div>Slides</div>
      <img src={img}/>
    </>
    
  )
}

export default Slides
