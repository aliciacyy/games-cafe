function GameCard(props: any) {
    return (
        <div className="leCards max-w-sm bg-white border border-gray-200 rounded-lg shadow">
          <img
            className="rounded-t-lg"
            src={require('../assets/' + props.img)} 
          />
          <div className="p-2 xl:p-5 bg-white">
            <h5 className="text-xl mb-2 font-bold tracking-tight text-gray-900">
              {props.gameName}
            </h5>
            <p className="font-normal text-gray-700 ">
              Players: {props.players}
            </p>
          </div>
        </div>
    );

}

export default GameCard;