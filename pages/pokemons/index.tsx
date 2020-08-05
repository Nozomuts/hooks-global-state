import React, { useEffect } from 'react';
import { PokeData } from '../../redux/pokemons/types';
import { useGrobalState } from '../../redux/store';
import { useRouter } from 'next/dist/client/router';
import Head from 'next/head';

const Pokemons = () => {
  const globalState: PokeData[] = useGrobalState('pokemons');
  const router = useRouter();

  useEffect(() => {
    if (!globalState.length) {
      router.replace('/');
    }
  });

  return (
    <>
      <Head>
        <title>Pokemons</title>
      </Head>
      <div>
        {globalState.map((el, index) => (
          <div
            className='name'
            key={el.name}
          >
            <a href={el.url}>
              {index + 1}:{el.name}
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default Pokemons;
