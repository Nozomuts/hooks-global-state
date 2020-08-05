import Head from 'next/head';
import Link from 'next/link';
import { PokeData } from '../redux/pokemons/types';
import { fetchPokemons } from '../redux/pokemons/actions';
import { useDispatch } from '../redux/store';
import Axios from 'axios';
import { useEffect } from 'react';
import Ball from '../components/Ball';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchPokemonsAsync();
  }, []);

  const fetchPokemonsAsync = async () => {
    let pokemons: PokeData[] = [];
    let errorMessage = '';

    await Axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then((res) => {
        pokemons = res.data.results;
      })
      .catch((err) => {
        errorMessage = err;
      });
    dispatch(fetchPokemons(pokemons, errorMessage));
  };

  return (
    <>
      <Head>
        <title>Get Pokemon!</title>
      </Head>
      <Link href='/pokemons'>
        <a className='ball'>
          <Ball/>
        </a>
      </Link>
    </>
  );
};

export default Home;
