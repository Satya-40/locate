import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Location = () => {
  const router = useRouter()
  const [long, setLong] = useState('')
  const [lat, setLat] = useState('')

  useEffect(()=> {
    navigator.geolocation.getCurrentPosition(function(position) {
      setLong(position.coords.longitude)
      setLat(position.coords.latitude)
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
    });

    navigator.geolocation.watchPosition( async function(position) {
      const response = await fetch('/api/hello',{
        method:'POST',
        body:JSON.stringify({ user: router.query.input,latitude: position.coords.latitude, longitude: position.coords.longitude }),
        headers: { 'Content-Type': 'application/json' }
      } )
      console.log(`Your location has changed to ${ position.coords.latitude, position.coords.longitude}`)
    });
  })
  
  return (
    <div>Your Location is {lat}, {long} </div>
  )
}

export default Location