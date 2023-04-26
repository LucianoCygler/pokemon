import {
  GET_POKEMONS,
  GET_BY_NAME,
  SET_FILTER_ORIGIN,
  SET_FILTER_TYPE,
  GET_BY_ID,
  CREATE_POKEMON,
  GET_TYPES,
  CLEAR_DETAIL,
  ORDER,
  ORDER_BY_ATTACK,
} from "../actions/actions";

let initialState = {
  allPokemons: [],
  filteredPokemons: [],
  types: [],
  detail: [],
  selected: [],
  filterType: "All",
  filterOrigin: "All",
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        filteredPokemons: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        selected: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        detail: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        filteredPokemons: [...state.filteredPokemons, action.payload],
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case ORDER:
      const allPokemons = [...state.filteredPokemons].sort((pok1, pok2) => {
        if (action.payload === "ascendente") {
          return pok1.name.localeCompare(pok2.name);
        } else if (action.payload === "descendente") {
          return pok2.name.localeCompare(pok1.name);
        } else {
          return 0;
        }
      });
      return {
        ...state,
        filteredPokemons: allPokemons,
      };
    case ORDER_BY_ATTACK:
      const allPokemons2 = [...state.filteredPokemons].sort((pok1, pok2) => {
        if (action.payload === "ascendente") {
          return pok1.attack - pok2.attack;
        } else if (action.payload === "descendente") {
          return pok2.attack - pok1.attack;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        filteredPokemons: allPokemons2,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: null,
      };
    case SET_FILTER_TYPE:
      if (action.payload === "All") {
        return {
          ...state,
          filteredPokemons: state.allPokemons,
          filterType: action.payload,
        };
      } else {
        const allPok = state.allPokemons.filter((pokemon) =>
          pokemon.types.includes(action.payload)
        );
        return {
          ...state,
          filteredPokemons: allPok,
          filterType: action.payload,
        };
      }
    case SET_FILTER_ORIGIN:
      switch (action.payload) {
        case "All":
          return {
            ...state,
            filteredPokemons: state.allPokemons,
            filterOrigin: action.payload,
          };
        case "DataBase":
          const dbPokemons = state.allPokemons.filter(
            (pokemon) => pokemon.createdInDb === true
          );
          return {
            ...state,
            filteredPokemons: dbPokemons,
            filterOrigin: action.payload,
          };
        case "Api":
          const apiPokemons = state.allPokemons.filter(
            (pokemon) => !pokemon.hasOwnProperty("createdInDb")
          );
          return {
            ...state,
            filteredPokemons: apiPokemons,
            filterOrigin: action.payload,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default rootReducer;
