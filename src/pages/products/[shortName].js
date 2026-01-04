
import Link from 'next/link';
import { useRouter } from 'next/router'
import React from 'react'

const shortNamess = () => {
    const route= useRouter()
    console.log(route.query.shortName);
    
    
  return (
    <>
    <p>shortname</p>


 
    
    
    </>
  )
}

export default shortNamess