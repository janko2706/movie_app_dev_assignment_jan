import { useState, useEffect } from "react";
//API
import API, { Movie } from '../API';

    const initialState = {
            trending: [] as Movie[],
            comedies:  [] as Movie[],
            adventure: [] as Movie[],
            horror: [] as Movie[],
            animated: [] as Movie[],
            family: [] as Movie[],
            action: [] as Movie[],
            drama: [] as Movie[],
            new: [] as Movie[],
    };

    export const useDiscoveryFetch = () => {
    const [ DiscoveryState, setState ] = useState(initialState);
    const [ isLoadingDiscovery, setIsLoading ] = useState(false);
    const [ isErrorDiscovery, setIsError ] = useState(false);

    const fetchGenres = async () => {
        try {
        setIsError(false);
        setIsLoading(true);
        const comedieMovies = await API.fetchComedies();
        const adventureMovies = await API.fetchAdventure();
        const actionMovies = await API.fetchAction();
        const horrorMovies = await API.fetchHorror();
        const familyMovies = await API.fetchFamily();
        const animatedMovies = await API.fetchAnimated();
        const dramaMovies = await API.fetchDrama();
        const trendingMovies = await API.fetchTrending();
        const newMovies = await API.fetchNewest();
        

        setState(({
            new: newMovies.results,
            trending: trendingMovies.results,
            comedies: comedieMovies.results,
            adventure: adventureMovies.results,
            horror: horrorMovies.results,
            animated: animatedMovies.results,
            family: familyMovies.results,
            action: actionMovies.results,
            drama: dramaMovies.results,
        }));

        } catch (error) {
        setIsError(true);
        };
        setIsLoading(false);
    };

    // initial
    useEffect(() => {

        setState(initialState);
        fetchGenres();
    }, []);

    return {
        DiscoveryState,
        isLoadingDiscovery,
        isErrorDiscovery,
    }; // es6 syntax
    };
