export interface Movie {
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: Belongstocollection;
    budget: number;
    genres: Genre[];
    homepage: string;
    id: number;
    imdb_id: string;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Genre[];
    production_countries: Productioncountry[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: Spokenlanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    videos: Videos;
  }
    
export interface Serie {
    backdrop_path: string;
    created_by: Created[];
    episode_run_time : number[];
    first_air_date: string;
    genres: Genre[];
    homepage: string;
    id: number;
    in_production: boolean;
    languages: string[];
    last_air_date: string;
    name: string;  
    networks: NetworkA[];
    number_of_episodes: number;
    number_of_seasons: number;
    origin_country: string[];  
    original_language: string; 
    original_name: string; 
    overview: string;  
    popularity:number;  
    poster_path: string; 
    production_companies: ProductionCompanyA[];
    seasons: SeasonA[]; 
    status : string;  
    type: string; 
    vote_average: number;
    vote_count: number; 
  }
  
export interface Persona {
    adult :boolean;
    also_known_as: string[];
    biography: string;
    birthday: string;  
    deathday: string; 
    gender: number;
    homepage: string;
    id: number;
    imdb_id: string;
    place_of_birth: string;   
    popularity:number;  
    profile_path: string;   
  }

  interface SeasonA{
  
    air_date: string; 
    episode_count: number; 
    id: number;
    poster_path : string; 
    season_number :number; 
  }
  
  interface Videos {
    results: Result[];
  }
  
  interface Result {
  
    id: string;
    iso_639_1: string;
    iso_3166_1: string;
    key: string;
    name: string;
    site: string;
    size: number;
    type: string;
  }
  
  interface Spokenlanguage {
    iso_639_1: string;
    name: string;
  }
  
  interface Productioncountry {
    iso_3166_1: string;
    name: string;
  }
  
  interface ProductionCompanyA {
    id: number;
    name: string;
  }
  
  interface Genre {
    id: number;
    name: string;
  }
  
  interface NetworkA {
    id: number;
    name: string;
  }
  
  interface Created {
    id: number;
    name: string;
    gender:number;
    profile_path: string;
    
  }
  
  interface Belongstocollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
  }
  