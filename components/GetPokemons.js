import React from "react";
import Link from "next/link";
import Image from "next/image";

function GetPokemons({pokemon}) {
  
  return (
    <div>
      <Link href={`/pokemon/${pokemon.name}`}>
        <a>
          <div className="bg-slate-900 rounded p-5 flex flex-col justify-center items-center relative">
            <Image
                alt={pokemon.name}
                width={150}
                height={150}
                src={ pokemon.sprites.other["official-artwork"].front_default}
                layout="intrinsic"
            />
            <span className="uppercase font-semibold tracking-wider text-amber-400">
              {pokemon.name}
            </span>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default GetPokemons;
