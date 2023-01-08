import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/shared/Card'

function AboutPage() {

  return (
    <Card className="about">
      <h1>About this Project</h1>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, sequi!</p>
      <p>Version 1.0.0</p>
      <p>
         <Link to="/">Back to home</Link>
      </p>
    </Card>
  )
}

export default AboutPage