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
  ORDER_BY_DEFENSE,
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

    case ORDER_BY_DEFENSE:
      const pokeFilter = [...state.filteredPokemons].sort((pok1, pok2) => {
        if (action.payload === "ascendente") {
          return pok1.defense - pok2.defense;
        } else if (action.payload === "descendente") {
          return pok2.defense - pok1.defense;
        } else {
          return 0;
        }
      });
      return {
        ...state,
        filteredPokemons: pokeFilter,
      };
    case CLEAR_DETAIL:
      return {
        ...state,
        detail: null,
      };
    case SET_FILTER_TYPE:
      let temporalPokemons = [...state.allPokemons];

      if (action.payload === "All") {
        temporalPokemons = [...state.allPokemons];
      } else {
        temporalPokemons = state.allPokemons.filter((pokemon) =>
          pokemon.types.includes(action.payload)
        );
      }
      if (state.filterOrigin === "DataBase") {
        temporalPokemons = temporalPokemons.filter(
          (pokemon) => pokemon.createdInDb === true
        );
      } else if (state.filterOrigin === "Api") {
        temporalPokemons = temporalPokemons.filter(
          (pokemon) => !pokemon.hasOwnProperty("createdInDb")
        );
      }
      return {
        ...state,
        filteredPokemons: temporalPokemons,
        filterType: action.payload,
      };
    case SET_FILTER_ORIGIN:
      let temporalPokemons2 = [...state.allPokemons];
      switch (action.payload) {
        case "All":
          temporalPokemons2 = [...state.allPokemons];
          break;
        case "DataBase":
          temporalPokemons2 = temporalPokemons2.filter(
            (pokemon) => pokemon.createdInDb === true
          );
          break;
        case "Api":
          temporalPokemons2 = temporalPokemons2.filter(
            (pokemon) => !pokemon.hasOwnProperty("createdInDb")
          );
          break;
      }
      if (state.filterType !== "All") {
        temporalPokemons2 = temporalPokemons2.filter((pokemon) =>
          pokemon.types.includes(state.filterType)
        );
      }
      return {
        ...state,
        filteredPokemons: temporalPokemons2,
        filterOrigin: action.payload,
      };
    default:
      return state;
  }
};
export default rootReducer;
