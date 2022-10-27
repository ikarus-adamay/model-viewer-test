import React, { useState } from 'react'

const timeSpent = () => {
    const componentDidMount = () => {
        this.startTime = new Date() * 1;
     }
     
    const componentWillUnmount = () => {
        let endTime = new Date() * 1;
        let elapsed = endTime - this.startTime;
     }

  return (
    <div>timeSpent</div>
  )
}

export default timeSpent