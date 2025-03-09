import axios from 'axios';

import { useActionState } from 'react';
import './CharacterList.css';
import { useState } from 'react';

const fetchData = async (name) => {
  console.log('name=', name);
  const response = await axios.get('https://api.disneyapi.dev/character', {
    params: { name },
  });
  console.log('response', response);
  return response.data;
};

export function CharacterList() {
  const [data, setData] = useState([]);

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const response = await fetchData(formData.get('name'));
      setData(response);
      return null;
    },
    null
  );

  if (isPending) return 'Loading...';

  if (error) return 'An error has occurred: ' + error.message;

  return (
    <div className='container'>
      <h2>Search Disney Character</h2>
      <div>
        <form className='search-bar' action={submitAction}>
          <input
            type='text'
            placeholder='Search characters...'
            className='search-input'
            name='name'
          />
          <button type='submit' disabled={isPending}>
            Search
          </button>
        </form>
      </div>
      <div className='character-list'>
        {data?.data?.length ? (
          data.data.map((character) => (
            <div className='character-card' key={character._id}>
              <h2>{character.name}</h2>
              <img
                src={character.imageUrl}
                alt={character.name}
                className='character-image'
              />
            </div>
          ))
        ) : (
          <p>No characters found</p>
        )}
      </div>
    </div>
  );
}

export default CharacterList;
