import { useState } from "react";
import { users } from "../data/users";
export function Card() {

    const [follow, setFollow]=useState(false)
    const text=follow? 'siguiendo':'seguir'
    
    const handleClick=()=>{
        setFollow(!follow) 
    }

    return (
        <div className="min-h-screen flex items-center justify-center">

        <section className="w-80 bg-black text-white rounded-2xl p-4 font-sans">
            <header>
            <h2 className="text-lg font-bold mb-3">A quién seguir</h2>
            </header>


            {users.map((user) => (
            <article key={user.userName} className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                <figure>
                    <img
                    src={`https://unavatar.io/${user.userName}`}
                    alt={`Avatar de ${user.name}`}
                    className="w-10 h-10 rounded-full"
                    />
                </figure>
                <div>
                    <h3 className="font-semibold text-sm leading-tight">{user.name}</h3>
                    <p className="text-gray-500 text-sm">@{user.userName}</p>
                </div>
                </div>

                <button
                type="button"
                className="bg-white text-black font-semibold px-4 py-1 rounded-full hover:hover:bg-gray-300 transition "
                onClick={handleClick}
                >
                {text}
                </button>
            </article>
            ))}

            <footer>
            <a href="#" className="text-sky-500 text-sm hover:underline">
                Mostrar más
            </a>
            </footer>
        </section>
        </div>
    );
}

export default Card;
