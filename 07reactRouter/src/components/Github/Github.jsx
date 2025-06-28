import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useRouteLoaderData } from 'react-router-dom'


function Github() {
  const data = useRouteLoaderData()

  if (!data) return <div>Loading...</div>
    // const [data, setData]= useState()

    // useEffect(() => {
    //     fetch('https://api.github.com/users/whoarrryou')
    //     .then(response => response.json())
    //     .then(data => {
    //         // console.log(data);
    //         setData(data);
    //     })
    // }, [])

  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data && data ? data.followers : "nah nigga"}
    <img src={data && data ? data.avatar_url : "nah nigga"} alt="git pic" width={300}/> </div>
  )
}


export default Github
