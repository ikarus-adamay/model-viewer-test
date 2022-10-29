import React from 'react'
import TimeMe from 'timeme.js'

const timeSpent = () => {

  TimeMe.initialize()
  TimeMe.currentPageName('model-viewer')
  TimeMe.callAfterTimeElapsedInSeconds(1, () => {
    console.log(TimeMe.getTimeOnCurrentPageInSeconds())
  })

  let timeSpentOnElement = TimeMe.getTimeOnElementInSeconds('area-of-interest-1');
	document.getElementById('area-of-interest-time-1').textContent = timeSpentOnElement.toFixed(2);

  return (
    <div id ="area-of-interest-1">
    </div>
  )
}

export default timeSpent