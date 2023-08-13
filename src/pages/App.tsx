import { useEffect } from 'react';
import "./App.css";
import HomeSection from '../components/HomeSection';

function App() {

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

  return (
    <>
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
      <div className="xl:flex xl:gap-0">
        <HomeSection bgClass="bg-gray-100" comingSoon={false}
         title="Board Games" img="games_cards.svg"
         subtitle="Experience the nostalgic charm of timeless board games."/>
        <HomeSection bgClass="bg-gray-300" comingSoon={true} 
          title="Video Games" img="games_video.svg"
          subtitle="Indulge in video game experiences on Nintendo Switch and PC."/>
        <HomeSection bgClass="bg-gray-400" comingSoon={true} 
          title="VR Games" img="games_vr.svg"
          subtitle="Step into the future of gaming with Meta Quest 2 VR games."/>
      </div>
    </>
  );
}

export default App;
