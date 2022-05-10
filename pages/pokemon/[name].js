import Image from 'next/image';
import React from 'react'
import Layout from '../../components/Layout';

function Pokemon({pokemon}) {
  return (
    <Layout title={'Pokemon'}>   
        <p className="text-lg text-fuchsia-400">{pokemon.name}</p>
        <Image src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} width={400} height={400} layout="intrinsic" />
    </Layout>
  )
}

export default Pokemon;

export async function getServerSideProps(context) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${context.query.name}`)
    const pokemon = await response.json();
    console.log('server data', pokemon)

    return {
        props: {
            pokemon
        }
    }
}