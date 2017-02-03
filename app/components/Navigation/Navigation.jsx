import React from 'react'
import { Link } from 'react-router'

export default function Navigation () {
  return (
    <ul>
      <li><Link to='/'>{'Home'}</Link></li>
      <li><Link to='/logout'>{'Logout'}</Link></li>
    </ul>
  )
}
