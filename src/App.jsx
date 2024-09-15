import { useState } from 'react';
import './App.css';
import ButtonRandom from './components/ButtonRandom';
import ButtonAdmit from './components/ButtonAdmit';
import SetTimeout from './components/SetTimeout';

function App() {
  const [randomNumbers, setRandomNumbers] = useState([]);
  const [queues, setQueues] = useState({
    queuePrio: [],
    queue1: [],
    queue2: [],
    queue3: [],
  });

  const addRandomNumber = (newNumber) => {
    setRandomNumbers((prevNumbers) => [...prevNumbers, newNumber]);
  };

  const isPriority = (number) => {
    return number % 5 === 0;
  };

  const handleTaskCompletion = (queueName) => {
    setQueues((prevQueues) => {
      const newQueue = prevQueues[queueName].slice(1);
      return {
        ...prevQueues,
        [queueName]: newQueue,
      };
    });
  };

  return (
    <>
      <div className='container'>
        <div className='left-inner'>
          <ButtonRandom addRandomNumber={addRandomNumber} />
          <hr /><br />
          <h2>Task Queue</h2>

          <div className='random-number'>
            {randomNumbers.length > 0 ? (
              randomNumbers.map((num, index) => (
                <span
                  key={index}
                  style={{ color: isPriority(num) ? 'red' : 'black' }}
                >
                  {num}
                </span>
              ))
            ) : (
              'No task added yet'
            )}
          </div>
          <br />
          <ButtonAdmit
            randomNumbers={randomNumbers}
            setRandomNumbers={setRandomNumbers}
            queues={queues}
            setQueues={setQueues}
          />
        </div>

        <div className='right-inner'>
          <div className='queue-prio'>
            <h3>High Priority Queue 1</h3>
            <b>Queue List:</b>
            <div>
              {queues.queuePrio.map((task, index) => (
                <div key={index} className='queue-item'>
                  {task}
                </div>
              ))}
            </div>
            Duration:
            {queues.queuePrio.length > 0 && (
              <SetTimeout
                duration={5000}
                onTimeout={() => handleTaskCompletion('queuePrio')}
              />
            )}
          </div>

          <div className='queue-1'>
            <h3>Regular Queue 2</h3>
            <b>Queue List:</b>
            <div>
              {queues.queue1.map((task, index) => (
                <div key={index} className='queue-item'>
                  {task}
                </div>
              ))}
            </div>
            Duration:
            {queues.queue1.length > 0 && (
              <SetTimeout
                duration={5000}
                onTimeout={() => handleTaskCompletion('queue1')}
              />
            )}
          </div>

          <div className='queue-2'>
            <h3>Regular Queue 3</h3>
            <b>Queue List:</b>
            <div>
              {queues.queue2.map((task, index) => (
                <div key={index} className='queue-item'>
                  {task}
                </div>
              ))}
            </div>
            Duration:
            {queues.queue2.length > 0 && (
              <SetTimeout
                duration={5000}
                onTimeout={() => handleTaskCompletion('queue2')}
              />
            )}
          </div>

          <div className='queue-3'>
            <h3>Regular Queue 4</h3>
            <b>Queue List:</b>
            <div>
              {queues.queue3.map((task, index) => (
                <div key={index} className='queue-item'>
                  {task}
                </div>
              ))}
            </div>
            Duration:
            {queues.queue3.length > 0 && (
              <SetTimeout
                duration={5000}
                onTimeout={() => handleTaskCompletion('queue3')}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
