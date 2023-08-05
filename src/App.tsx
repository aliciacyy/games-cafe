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
    const options = {
      rootMargin: '-50px',
    }
    const myObserver = new IntersectionObserver(callback, options)
  
    const imgList = document.querySelectorAll(".leCards")
    imgList.forEach(img => {
      myObserver.observe(img!)
    })
  });

  const games = [
    createGameObj('Bananagrams', '2 to 8', 'bananagrams.jpg'),
    createGameObj('Catan', '3 to 4', 'catan.jpg'),
    createGameObj('Codenames', '2 and above', 'codenames.jpg'),
    createGameObj('Codenames Pictures', '2 and above', 'codenames_pictures.jpg'),
    createGameObj('Deep Sea Adventure', '2 to 4', 'deep_sea.jpg'),
    createGameObj('Dixit', '3 to 8', 'dixit.jpg'),
    createGameObj('Enter the Spudnet', '2 to 6', 'spudnet.jpg'),
    createGameObj('Exploding Kittens', '2 to 8', 'exploding.jpg'),
    createGameObj('F***k the Game', '3 to 8', 'fk.jpg'),
    createGameObj('Hanabi', '2 to 5', 'hanabi.jpg'),
    createGameObj('Here to Slay', '2 to 6', 'poetry.jpg'),
    createGameObj('Love Letter', '2 to 6', 'love_letter.jpg'),
    createGameObj('Mysterium', '2 to 7', 'mysterium.jpg'),
    createGameObj('Organ Attack', '2 to 6', 'organ.jpg'),
    createGameObj('Plantopia', '2 to 5', 'plantopia.jpg'),
    createGameObj('Poetry for Neanderthals', '2 and above', 'poetry.jpg'),
    createGameObj('POOP the Game', '2 to 5', 'poop.jpg'),
    createGameObj('Rummikub', '2 to 4', 'rummikub.jpg'),
    createGameObj('Saboteur', '2 to 12', 'saboteur.jpg'),
    createGameObj('Spot It', '2 to 8', 'spot_it.jpg'),
    createGameObj('Sushi Go Party', '2 to 8', 'sushi.jpg'),
    createGameObj('Taco Cat Goat Cheese Pizza', '2 to 8', 'taco.jpg'),
    createGameObj('Take 5', '2 to 10', 'take5.jpg'),
    createGameObj('Teabbles', '2 to 5', 'teabbles.jpg'),
    createGameObj('The Singaporean Dream', '2 to 5', 'singaporean.jpg'),
    createGameObj('Toxic People', '2 to 6', 'toxic.jpg'),
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
        <div>
          <div className="leCards text-6xl xl:text-8xl text-gray-700 font-bold mb-8 text-center">
            <span className='text-gray-900'>A</span>lisiang <span className='text-gray-900'>G</span>aming <span className='text-gray-900'>O</span>asis
          </div>
          <div className="leCards text-lg xl:text-3xl text-gray-500 mb-8 text-center">
            By invitation only
          </div>
        </div>
      </div>

      <div className="container max-w-full bg-gray-300 py-8 xl:p-8">
        <div className="text-4xl xl:text-6xl text-gray-700 font-bold mb-8 text-center">Games</div>
        <div className="flex gap-4 flex-wrap justify-center">
          {renderGames()}
        </div>
      </div>

    </div>
  );
}

export default App;
