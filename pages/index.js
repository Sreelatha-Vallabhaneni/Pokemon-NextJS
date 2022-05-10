import React from 'react'
import GetPokemons from '../components/GetPokemons'
import Layout from '../components/Layout'

export default function Home({initialPokemon, allPokemons}) {
  console.log('all SSR', initialPokemon, allPokemons);
  
  return (
    <Layout title={'Pokemon'} >
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-10">
          {allPokemons.map((monster,index) => (
              <GetPokemons key={index} pokemon={monster} />
          ))}
      </div>
    </Layout>
  )
}


export async function getServerSideProps(context) {
  try {
    const initialPokemon = await fetch('https://pokeapi.co/api/v2/pokemon').then((response) => response.json());

    if (!initialPokemon) {
      return { notFound: true };
    }

    const allPokemons = await Promise.all(
      initialPokemon.results.map((result) =>
        fetch(result.url).then((response) => response.json())
      )
    );

    const props = { initialPokemon, allPokemons };

    return { props };
  } catch (error) {
    console.error('runtime error: ', error);
  }
}