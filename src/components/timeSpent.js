import React from 'react'
import TimeMe from 'timeme.js'

const timeSpent = () => {

  TimeMe.initialize({
    currentPageName: "my-model-viewer",
    idleTimeoutInSeconds: 5,
  })
  TimeMe.trackTimeOnElement('area-of-interest-1');
  let timeSpentOnElement = TimeMe.getTimeOnElementInSeconds('area-of-interest-1');
	document.getElementById('area-of-interest-time-1').textContent = timeSpentOnElement.toFixed(2);

  return (
    <div id ="area-of-interest-1">
      <span id="area-of-interest-time-1"></span>letsgooooooooooooo
      vhjbhiw ninievniunvuqioenviuoq
    </div>
  )
}

export default timeSpent