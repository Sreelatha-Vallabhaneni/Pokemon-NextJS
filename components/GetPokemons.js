import React from "react";
import Link from "next/link";
import Image from "next/image";

function GetPokemons({pokemon}) {
  console.log('pokemon data', pokemon)
  return (
    <div>
      
          <div className="bg-slate-900 rounded p-5 flex flex-col justify-center items-center relative">
          <Link href={`/pokemon/${pokemon.name}`}>
        <a>
            <Image
                alt={pokemon.name}
                width={150}
                height={150}
                src={ pokemon.sprites.other["official-artwork"].front_default}
                layout="intrinsic"
            />
            </a>
      </Link>
            <span className="uppercase font-semibold tracking-wider text-amber-400">
              {pokemon.name}
            </span>
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            <p className="underline">Abilities</p>
            <p>{pokemon && pokemon?.abilities.map(item => 
            <Link href={`${item?.ability?.url}`}>
            <a>
              <li>
              {item?.ability?.name}
              </li>
              </a>
      </Link>
              )}
              </p>
          </div>
        
    </div>
  );
}

export default GetPokemons;
