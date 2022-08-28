import {
    SEARCH_BASE_URL,
    POPULAR_BASE_URL,
    COMEDY_BASE_URL,
    DRAMA_BASE_URL,
    ACTION_BASE_URL,
    ADVENTURE_BASE_URL,
    FAMILY_BASE_URL,
    HORROR_BASE_URL,
    ANIMATION_BASE_URL,
    LATEST_BASE_URL,
    API_URL,
    API_KEY
} from './config';

// Types
export type Movie = {
    backdrop_path: string,
    id: number,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    title: string,
    vote_average: number,
    budget: number,
    runtime: number,
    revenue: number,
    genre_ids: number[],
    release_date: string,
    isFavourite: boolean,
}

export type Movies = {
    page: number,
    results: Movie[],
    total_pages: number,
    total_results: number,
}

export type Cast = {
    // [property: string]: string,

    character: string,
    credit_id: string,
    name: string,
    profile_path: string,
}

export type Crew = {
    known_for_department: string,
    name: string,
    credit_id: number,
}

export type Credits = {
    id: number,
    cast: Cast[],
    crew: Crew[],
}

const apiSettings = {
    fetchMovies: async (searchTerm: string, page: number): Promise<Movies> => {
    const endpoint: string = searchTerm
        ? `${SEARCH_BASE_URL}${searchTerm}&page=${page}`
        : `${POPULAR_BASE_URL}&page=${page}`;
    return await (await fetch(endpoint)).json();
    },
    fetchMovie: async (movieId: string): Promise<Movie> => {
    const endpoint: string = `${API_URL}movie/${movieId}?api_key=${API_KEY}`;
    return await (await fetch(endpoint)).json();
    },
    fetchTrending: async (): Promise<Movies> => {
        const endpoint: string = `${API_URL}trending/all/day?api_key=${API_KEY}`;
        return await (await fetch(endpoint)).json();
        },
    fetchNewest: async (): Promise<Movies> => {
        const endpoint: string = `${LATEST_BASE_URL}`;
        return await (await fetch(endpoint)).json();
        },
    fetchComedies: async (): Promise<Movies> => {
        const endpoint: string = `${COMEDY_BASE_URL}`;
        return await (await fetch(endpoint)).json();
        },
    fetchAdventure: async (): Promise<Movies> => {
        const endpoint: string = `${ADVENTURE_BASE_URL}`;
        return await (await fetch(endpoint)).json();
        },
    fetchHorror: async (): Promise<Movies> => {
        const endpoint: string = `${HORROR_BASE_URL}`;
        return await (await fetch(endpoint)).json();
        },
    fetchAnimated: async (): Promise<Movies> => {
        const endpoint: string = `${ANIMATION_BASE_URL}`;
        return await (await fetch(endpoint)).json();
        },
    fetchFamily: async (): Promise<Movies> => {
        const endpoint: string = `${FAMILY_BASE_URL}`;
        return await (await fetch(endpoint)).json();
        },
    fetchAction: async (): Promise<Movies> => {
        const endpoint: string = `${ACTION_BASE_URL}`;
        return await (await fetch(endpoint)).json();
        },
    fetchDrama: async (): Promise<Movies> => {
        const endpoint: string = `${DRAMA_BASE_URL}`;
        return await (await fetch(endpoint)).json();
        },
    fetchCredits: async (movieId: string): Promise<Credits> => {
    const creditsEndpoint: string = `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}`;
    return await (await fetch(creditsEndpoint)).json();
    },
};

export default apiSettings;