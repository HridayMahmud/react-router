import React from 'react'

const Addresses = ({addr}) => {
  const {city,geo,street} = addr;
  return (
  <div>
      <h2 className="text-2xl">{city}</h2>
      <h2 className="text-2xl">{street}</h2>
      <h2 className="text-2xl">{geo}</h2>
  </div>
  )
}

export default Addresses
