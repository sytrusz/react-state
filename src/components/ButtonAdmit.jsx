import React from 'react';

export default function ButtonAdmit({ randomNumbers, setRandomNumbers, queues, setQueues }) {
  const admitTask = () => {
    if (randomNumbers.length > 0) {
      const numberToAdmit = randomNumbers[0];
      const isPriority = numberToAdmit % 5 === 0;

      setQueues((prevQueues) => {
        if (isPriority) {
          return {
            ...prevQueues,
            queuePrio: [...prevQueues.queuePrio, numberToAdmit],
          };
        } else {
          const queueNum = (prevQueues.queue1.length <= prevQueues.queue2.length && prevQueues.queue1.length <= prevQueues.queue3.length)
            ? 'queue1'
            : (prevQueues.queue2.length <= prevQueues.queue3.length) ? 'queue2' : 'queue3';

          return {
            ...prevQueues,
            [queueNum]: [...prevQueues[queueNum], numberToAdmit],
          };
        }
      });

      setRandomNumbers((prevNumbers) => prevNumbers.slice(1));
    }
  };

  return (
    <button onClick={admitTask}>Admit Task</button>
  );
}