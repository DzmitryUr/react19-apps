import { useActionState } from 'react';
import './Lyrics.css';
import { searchLyrics } from '../services/api';

export function Lyrics() {
  const [state, formAction, isPending] = useActionState(
    async (prevState, formData) => {
      const response = await searchLyrics(
        formData.get('artist'),
        formData.get('song')
      );
      console.log('useActionState response', response);
      return response;
    },
    null
  );
  return (
    <div className='lyrics-container'>
      <h2>Lyrics Search</h2>
      <form action={formAction}>
        <input type='text' placeholder='Artist Name' name='artist' required />
        <input type='text' placeholder='Song Name' name='song' required />
        <button type='submit' disabled={isPending}>
          Search
        </button>
      </form>
      <hr />
      {state?.error && <h2 className='error'>{state?.error}</h2>}
      <pre>{state?.lyrics}</pre>
    </div>
  );
}
