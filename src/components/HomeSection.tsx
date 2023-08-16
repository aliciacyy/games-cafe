import { Link } from "react-router-dom";

function HomeSection(props: any) {
  return (
    <div className={`${props.bgClass} text-center flex-1 p-8`}>
      <div className="text-3xl text-gray-700 font-bold mb-5 ">
        {props.title}
      </div>
      <div className="flex justify-center mb-4">
        <img
          className="xl:w-44 w-60 h-44"
          alt="home"
          src={require("../assets/" + props.img)}
        />
      </div>
      <div className="text-gray-600 h-16">{props.subtitle}</div>
      {props.comingSoon && (
        <button
          disabled
          className="bg-gray-500 text-white font-bold py-2 px-4 rounded disabled"
        >
          Coming soon
        </button>
      )}
      {!props.comingSoon && (
        <Link to="board-games">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            View board games
          </button>
        </Link>
      )}
    </div>
  );
}

export default HomeSection;
