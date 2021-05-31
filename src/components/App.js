import {useState, useEffect} from 'react';
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
        setSelected(newFilters);
    };

    useEffect(() => {
        const filteredMovies = data
            .filter(
                (m) =>
                    selected.rating.length === 0 ||
                    selected.rating.includes(0) ||
                    selected.rating.includes(m.rating)
            )
            .filter(
                (m) =>
                    selected.genre.length === 0 ||
                    selected.genre.includes('') ||
                    selected.genre.includes(m.genre)
            );
        console.log('filteredMovies', filteredMovies);
        setMovies(filteredMovies);
    }, [selected]);

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
