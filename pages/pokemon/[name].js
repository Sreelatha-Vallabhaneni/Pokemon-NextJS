import Image from 'next/image';
import React from 'react'
import Layout from '../../components/Layout';
import { useRouter } from 'next/router'

function Pokemon({pokemon}) {
  const router = useRouter()
  
  return (
    <Layout title={'Pokemon'}> 
    <button type="button" onClick={() => router.push('/')} className="text-2xl tracking-wide bg-slate-900 text-white px-5 py-2">Back</button> 
      <div className="flex items-center justify-center"> 
        <Image src={pokemon.sprites.other["official-artwork"].front_default} alt={pokemon.name} width={400} height={400} layout="intrinsic" />
        <div className=" text-orange-400">
          <p className="text-4xl text-fuchsia-400 tracking tracking-wider uppercase font-mono leading-6">{pokemon.name}</p>
          <div className="flex tracking-wider font-sans my-5 text-xl">
            <div className="">
              <h6>Weight</h6>
              <h6>Height</h6>
              <h6>Ability</h6>
            </div>
            <div className=" ml-5">
              <p className="">{pokemon.weight}</p>
              <p className="">{pokemon.height}</p>
              <p className="">{pokemon.abilities[0].ability.name}</p>
            </div>
          </div>
          </div>
      </div>
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