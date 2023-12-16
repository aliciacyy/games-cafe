function GameCard(props: any) {
    return (
        <div className="leCards w-40 xl:w-1/6 bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg game-card"
            alt="game"
            src={process.env.PUBLIC_URL + '/assets/' + props.img} 
          />
          <div className="p-2 xl:p-5 bg-white">
            <h5 className="line-clamp-2 min-h-[60px] text-xl mb-2 font-bold tracking-tight text-gray-900">
              {props.gameName}
            </h5>
            <p className="font-normal text-sm text-gray-700 ">
              Players: {props.players}
            </p>
          </div>
        </div>
    );

}

export default GameCard;