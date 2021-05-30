import {useState} from 'react';
import Checkboxes from './Checkboxes';
import {data, listCheckboxesRating, listCheckboxesGenre} from '../data';

const App = () => {
    const [movies, setMovies] = useState(data);
    const [selected, setSelected] = useState({
        rating: [],
        genre: []
    });

    /**
     * This function will perform the filtration process based on the key value.
     *
     * @param {number[]} checkboxState - It will take the final state of checkboxes
     * @param {string} key - It will help us to determines type of filtration
     */
    const handleFilters = (checkboxState, key) => {
        const newFilters = {...selected};
        newFilters[key] = checkboxState;
        // Filtration process
        for (let key in newFilters) {
            if (
                newFilters.hasOwnProperty(key) &&
                Array.isArray(newFilters[key]) &&
                newFilters[key].length > 0
            ) {
                if (key === 'rating') {
                } else if (key === 'genre') {
                }
            }
        }

        // Save the filtered movies and update the state.
        //  setMovies();
        setSelected(newFilters);
    };

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id}>
                    <div>Name: {movie.title}</div>
                    <div>Genre :{movie.genre}</div>
                    <div>Rating: {movie.rating}</div>
                    <hr />
                </div>
            ))}

            <div className="row">
                <div className="col">
                    <h1>Filter by Rating</h1>
                    <Checkboxes
                        list={listCheckboxesRating}
                        handleFilters={(checkboxState) =>
                            handleFilters(checkboxState, 'rating')
                        }
                    />
                </div>

                <div className="col">
                    <h1>Filter by Genre</h1>
                    <Checkboxes
                        list={listCheckboxesGenre}
                        handleFilters={(checkboxState) =>
                            handleFilters(checkboxState, 'genre')
                        }
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
