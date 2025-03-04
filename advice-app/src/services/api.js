const ADVICE_URL = 'https://api.adviceslip.com/advice';

export async function fetchAdvice() {
  const response = await fetch(ADVICE_URL);

  if (!response.ok) {
    throw new Error('Failed to fetch Advice');
  }

  const data = await response.json();
  console.log(data);
  return data.slip.advice;
}
