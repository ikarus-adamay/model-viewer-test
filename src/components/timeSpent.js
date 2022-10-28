import React from 'react'
import TimeMe from 'timeme.js'

const timeSpent = () => {
  // let startDate = new Date();
  // let elapsedTime = 0;

  // const focus = function() {
  //   startDate = new Date();
  // };

  // const blur = function() {
  //   const endDate = new Date();
  //   const spentTime = endDate.getTime() - startDate.getTime();
  //   elapsedTime += spentTime;
  // };

  // const beforeunload = function() {
  //   const endDate = new Date();
  //   const spentTime = endDate.getTime() - startDate.getTime();
  //   elapsedTime += spentTime;

  //   // elapsedTime contains the time spent on page in milliseconds
  // };

  // window.addEventListener('focus', focus);
  // window.addEventListener('blur', blur);
  // window.addEventListener('beforeunload', beforeunload)
 
  TimeMe.setIdleDurationInSeconds(30);
	TimeMe.setCurrentPageName("model-viewer");
	TimeMe.initialize();

  const trackTime = () => {
    const timeSpentOnPage = TimeMe.getTimeOnCurrentPageInSeconds();
    console.log(timeSpentOnPage);
  }
  
  return (
    <div>
      <button onClick={trackTime}>Track Time</button>
    </div>
  )
}

export default timeSpent