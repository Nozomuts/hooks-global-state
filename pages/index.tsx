import Head from 'next/head';
import { PokeData } from '../redux/pokemons/types';
import { fetchPokemons } from '../redux/pokemons/actions';
import { useDispatch, useGrobalState } from '../redux/store';

const Home = () => {
  const dispatch = useDispatch();
  const globalState = useGrobalState('pokemons')

  const handleClick1 = () => {
    dispatch(fetchPokemons());
  }
  const handleClick2 = () => {
    console.log(globalState);
  }

  return (
    <>
      <Head>
        <title>Next.js Template</title>
      </Head>
      <button onClick={handleClick1}>GET!</button>
      <button onClick={handleClick2}>GET!</button>
      {globalState.map((pokemon: PokeData) => {
        <h1>{pokemon.name}</h1>;
      })}
    </>
  );
};

export default Home;
