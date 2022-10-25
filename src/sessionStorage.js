import React from 'react';

function Cookies() {
const [accepted, setAccepted] = React.useState(false);

React.useEffect(() => {
    if (window.sessionStorage.getItem('cookies')) {
        setAccepted(true);
    }
}, []);

function acceptPolicy() {
    sessionStorage.setItem('cookies', true);
    setAccepted(true);
}

return !accepted ? (
    <></>):(<></>)}