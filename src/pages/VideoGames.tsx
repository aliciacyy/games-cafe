import { useEffect } from 'react';
import GameCard from '../components/GameCard';

function VideoGames() {
  const createGameObj = (name: string, players: string, img: string) => {
    return {
      gameName: name,
      players,
      img,
    };
  };

  useEffect(() => {
    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fadeIn');
          observer.unobserve(entry.target);
        }
      });
    };
    const options = {
      rootMargin: '-50px',
    };
    const myObserver = new IntersectionObserver(callback, options);

    const imgList = document.querySelectorAll('.leCards');
    imgList.forEach((img) => {
      myObserver.observe(img!);
    });
  });

  const switchGames = [
    createGameObj('Drawful 2', '2 to 8', 'drawful2.jpg'),
    createGameObj('Groove Coaster Wai Wai Party!!!!', '2 to 4', 'waiwai.jpg'),
    createGameObj('Mario Kart 8 Deluxe', '2 to 4', 'mariokart8.jpg'),
    createGameObj('New Super Mario Bros. U Deluxe', '2 to 4', 'supermario_u_deluxe.jpg'),
    createGameObj('Scott Pilgrim vs The World: The Game', '2 to 4', 'scott.jpg'),
    createGameObj('Super Mario 3D World + Bowser\'s Fury', '2 to 4', 'supermario_3d.jpg'),
    createGameObj('Super Mario Bros. Wonder', '2 to 4', 'supermario_wonder.jpg'),
    createGameObj('Super Mario Party', '2 to 4', 'supermario_party.jpg'),
    createGameObj('Super Smash Bros. Ultimate', '2 to 4', 'super_smash.jpg'),
    createGameObj('Taiko no Tatsujin Nintendo Switch Version', '2 to 4', 'taiko_switch.jpg'),
    createGameObj('Taiko no Tatsujin: Rhythm Festival', '2 to 4', 'taiko_rhythm.jpg'),
    createGameObj('Theatrhythm Final Bar Line', '2', 'theatrhythm.jpg'),
  ];
  const pcGames = [
    createGameObj('DARIUSBURST Chronicle Saviours', '2 to 4', 'darius.jpg'),
    createGameObj('Death Squared', '2 to 4', 'death_squared.jpg'),
    createGameObj('Heave Ho', '2 to 4', 'heave_ho.jpg'),
    createGameObj('Just Shapes & Beats', '2 to 4', 'just_shapes.jpg'),
    createGameObj('Keep Talking and Nobody Explodes', '2 to 4', 'keep_talking.jpg'),
    createGameObj('Lovers in a Dangerous Spacetime', '2 to 4', 'lovers.jpg'),
    createGameObj('Moving Out', '2 to 4', 'moving_out.jpg'),
    createGameObj('Out of Space', '2 to 4', 'out_of_space.jpg'),
    createGameObj('Overcooked! All You Can Eat', '2 to 4', 'overcooked.jpg'),
    createGameObj('PlateUp!', '2 to 4', 'plateup.jpg'),
    createGameObj('Tools Up!', '2 to 4', 'tools_up.jpg'),
    createGameObj('Tricky Towers', '2 to 4', 'tricky_towers.jpg'),
    createGameObj('Unrailed!', '2 to 4', 'unrailed.jpg'),
  ];

  const renderGames = (games: Array<any>) => {
    return games.map((game) => (
      <GameCard
        key={game.gameName}
        gameName={game.gameName}
        players={game.players}
        img={game.img}
      />
    ));
  };

  return (
    <div className='container max-w-full bg-gray-300 py-8 xl:p-8'>
      <div className='text-4xl xl:text-6xl text-gray-700 font-bold mb-4 text-center'>
        Video Games
      </div>
      <div className='text-xl xl:text-2xl text-gray-500 mb-8 text-center'>
        Indulge in video game experiences on Nintendo Switch and PC.
      </div>
      <div className='text-2xl xl:text-4xl text-gray-800 font-bold mb-8 text-center'>
        Nintendo Switch
      </div>
      <div className='flex gap-4 flex-wrap justify-center'>{renderGames(switchGames)}</div>
      <div className='text-2xl xl:text-4xl mt-8 text-gray-800 font-bold mb-8 text-center'>
        PC
      </div>
      <div className='flex gap-4 flex-wrap justify-center'>{renderGames(pcGames)}</div>
    </div>
  );
}

export default VideoGames;
