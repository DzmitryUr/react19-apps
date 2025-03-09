import { useActionState } from 'react';

import { searchLyrics } from '../services/api';

import './LyricsSearch.css';

export function LyricsSearch() {
  const [state, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const response = await searchLyrics(
        formData.get('artist'),
        formData.get('song')
      );
      return response;
    }
  );

  return (
    <div className='lyrics-container'>
      <h2>Lyrics Search</h2>
      <form action={submitAction}>
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
