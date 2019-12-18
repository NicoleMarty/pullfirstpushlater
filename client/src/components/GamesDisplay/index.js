import React from "react";
import NoGames from "../../pages/NoGames";
import LibraryCard from "../../pages/LibraryCard";
import './style.css';

class GamesDisplay extends React.Component {

    render() {
        if (this.props.games.length === 0) {
            return <NoGames />;
        }
        return this.props.games.map((item, index) =>
            <LibraryCard
                name={item.name}
                key={index}
                minPlaytime={item.minPlaytime}
                maxPlaytime={item.maxPlaytime}
                minPlayers={item.minPlayers}
                maxPlayers={item.maxPlayers}
                minAge={item.minAge}
                rating={item.rating.$numberDecimal}
                complexity={item.complexity}
                rules={item.rules}
            />
        )
    }
}

export default GamesDisplay;