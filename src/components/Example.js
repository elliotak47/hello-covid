import React, { Component } from 'react'
import Typical from 'react-typical'

export class Example extends React.Component {
  render () {
    return (
      <Typical
        steps={['L O A D I N G...', 10]}
        loop={Infinity}
        wrapper="p"
      />
    )
  }
}

export default Example