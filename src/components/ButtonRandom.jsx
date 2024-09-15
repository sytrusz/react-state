import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const shuffleNumber = (array) => {
  let shuffledArray = array.slice();
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
};

const numbers = Array.from({ length: 5000 }, (_, index) => index + 1);
const shuffledNumbers = shuffleNumber(numbers);

export default function ButtonRandom({ addRandomNumber }) {
  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * shuffledNumbers.length);
    addRandomNumber(shuffledNumbers[randomIndex]);
  };

  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" onClick={handleClick}>
        Add Random Task
      </Button>
    </Stack>
  );
}