import { useState, useEffect } from 'react';

export default function SetTimeout({ duration = 5000, onTimeout }) {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval);
          if (onTimeout) {
            onTimeout(); // Call the onTimeout handler when progress reaches 0
          }
          return 0;
        }
        return prev - (100 / (duration / 100));
      });
    }, 100);

    return () => clearInterval(interval);
  }, [duration, onTimeout]);

  return (
    <div style={{ width: '100%', backgroundColor: '#ccc' }}>
      <div
        style={{
          width: `${progress}%`,
          height: '20px',
          backgroundColor: 'green',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  );
}