  export default function Clock({ time }) {
    const hours = time.getHours();
    const className = hours >= 0 && hours <= 6 ? 'day' : 'night';
  
    return (
      <h1 id="time" className={className}>
        {time.toLocaleTimeString()}
      </h1>
    );
  }
  
  