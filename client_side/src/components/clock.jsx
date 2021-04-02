//import '../components/clock.scss'
import React from 'react'
const DateTime = () => {
    const [date, setDate] = React.useState(null);
    const [time, setTime] = React.useState({});
  
    setInterval(() => {
      setDate(new Date().toDateString());
      setTime({
        hours: new Date().getHours(),
        min: new Date().getMinutes(),
        sec: new Date().getSeconds()
      });
    }, 1000);
  
    return (
      <div className="flex justify-end ">
        
        <div className="rounded-lg py-3 px-6 bg-opacity-25 bg-fblack">
        <div className="text-2xl text-fwhite">{date}</div>
          <div className="flex justify-center text-2xl text-fwhite  ">
            {Object.keys(time).map((k) => (
              <div className="column">
                <span className="capitalize">{time[k]}</span>
                <span className="p-3">{k}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  const Clock = () => (
    <div className="frame">
      <DateTime />
    </div>
  );

  export default Clock;