import React, { useEffect } from "react";
import "./App.css";
import GameCard from "./components/GameCard";

function App() {
  const createGameObj = (name: string, players: string, img: string) => {
    return {
      gameName: name,
      players,
      img
    }
  }

  useEffect(() => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn')
          observer.unobserve(entry.target)
        }
      })
    }
    const options = {}
    const myObserver = new IntersectionObserver(callback, options)
  
    const imgList = document.querySelectorAll(".leCards")
    imgList.forEach(img => {
      myObserver.observe(img!)
    })
  });

  const games = [
    createGameObj('Bananagrams', '2 and above', 'bananagrams.jpg'),
    createGameObj('Catan', '3 to 4', 'catan.jpg'),
    createGameObj('Codenames', '2 and above', 'codenames.jpg'),
    createGameObj('Codenames Pictures', '2 and above', 'codenames_pictures.jpg'),
    createGameObj('Deep Sea Adventure', '1 to 4', 'deep_sea.jpg'),
    createGameObj('Enter the Spudnet', '1 to 4', 'spudnet.jpg'),
    createGameObj('Exploding Kittens', '1 to 4', 'exploding.jpg'),
    createGameObj('F***k the Game', '1 to 4', 'fk.jpg'),
    createGameObj('Hanabi', '1 to 4', 'hanabi.jpg'),
    createGameObj('Love Letter', '1 to 4', 'love_letter.jpg'),
    createGameObj('Organ Attack', '1 to 4', 'organ.jpg'),
    createGameObj('Plantopia', '1 to 4', 'plantopia.jpg'),
    createGameObj('Poetry for Neanderthals', '1 to 4', 'poetry.jpg'),
    createGameObj('POOP the Game', '1 to 4', 'poop.jpg'),
    createGameObj('Rummikub', '1 to 4', 'rummikub.jpg'),
    createGameObj('Saboteur', '1 to 4', 'saboteur.jpg'),
    createGameObj('Spot It', '1 to 4', 'spot_it.jpg'),
    createGameObj('Sushi Go Party', '1 to 4', 'sushi.jpg'),
    createGameObj('Taco Cat Goat Cheese Pizza', '2 and above', 'taco.jpg'),
    createGameObj('Take 5', '1 to 4', 'take5.jpg'),
    createGameObj('Teabbles', '1 to 4', 'teabbles.jpg'),
    createGameObj('The Singaporean Dream', '1 to 4', 'poetry.jpg'),
    createGameObj('Toxic People', '1 to 4', 'toxic.jpg'),
    createGameObj('Unstable Unicorns', '2 to 8', 'unstable.jpg'),
  ]

  const renderGames = () => {
    return games.map((game) => (
      <GameCard
        key={game.gameName}
        gameName={game.gameName}
        players={game.players}
        img={game.img}
      />
    ));
  }

  return (
    <div>
      <div className="container max-w-full bg-gray-200 p-8 h-[60vh] xl:h-[80vh] flex justify-center items-center">
        <p className="leCards text-6xl xl:text-8xl text-gray-700 font-bold mb-8 text-center">
          <span className='text-gray-900'>A</span>lisiang <span className='text-gray-900'>G</span>aming <span className='text-gray-900'>O</span>asis
        </p>
      </div>

      <div className="container max-w-full bg-gray-300 p-8">
        <div className="text-4xl xl:text-6xl text-gray-700 font-bold mb-8 text-center">Our Games</div>
        <div className="flex gap-4 flex-wrap justify-center">
          {renderGames()}
        </div>
      </div>

    </div>
  );
}

export default App;
