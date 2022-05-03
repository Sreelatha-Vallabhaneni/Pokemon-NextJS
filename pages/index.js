import Head from 'next/head'
import Image from 'next/image'
import Layout from '../components/Layout'

import styles from '../styles/Home.module.css'
//import Pokemons from './Pokemonsdgh'
import { PokemonsList } from './PokemonsList'

export default function Home({initialPokemon}) {
  
  return (
    <div className={styles.container}>
      <Layout title={'Pokemon'} >
        
      </Layout>
    </div>
  )
}


export async function getStaticProps(context) {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon")
  const initialPokemon = await response.json()

  return {
      props: {
          initialPokemon
      }
  }
}