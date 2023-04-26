import axios from "axios";

export const GET_POKEMONS = "GET_POKEMONS";
export const GET_BY_NAME = "GET_BY_NAME";
export const GET_BY_ID = "GET_BY_ID";
export const GET_TYPES = "GET_TYPES";
export const CREATE_POKEMON = "CREATE_POKEMON";
export const CLEAR_DETAIL = "CLEAR_DETAIL";
export const ORDER = "ORDER";
export const ORDER_BY_ATTACK = "ORDER_BY_ATTACK";
export const SET_FILTER_TYPE = "SET_FILTER_TYPE";
export const SET_FILTER_ORIGIN = "SET_FILTER_ORIGIN";
export function getPokemons() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type: GET_POKEMONS,
      payload: response.data,
    });
  };
}
export function getByName(name) {
  return async function (dispatch) {
    const response = await axios.get(
      `http://localhost:3001/pokemons/?name=${name}`
    );
    return dispatch({
      type: GET_BY_NAME,
      payload: response.data,
    });
  };
}
export function getById(id) {
  return async function (dispatch) {
    const response = await axios.get(`http://localhost:3001/pokemons/${id}`);
    return dispatch({
      type: GET_BY_ID,
      payload: response.data,
    });
  };
}
export const setFilterType = (type) => {
  return {
    type: SET_FILTER_TYPE,
    payload: type,
  };
};

export const setFilterOrigin = (origin) => {
  return {
    type: SET_FILTER_ORIGIN,
    payload: origin,
  };
};

export function createPokemon(newPokemon) {
  return async function (dispatch) {
    const response = await axios.post(
      `http://localhost:3001/pokemons`,
      newPokemon
    );
    return dispatch({
      type: CREATE_POKEMON,
      payload: response.data,
    });
  };
}
export function getTypes() {
  return async function (dispatch) {
    const response = await axios.get("http://localhost:3001/types");
    return dispatch({
      type: GET_TYPES,
      payload: response.data,
    });
  };
}

export const clearDetail = () => {
  return {
    type: CLEAR_DETAIL,
  };
};
export const orderPokemons = (id) => {
  return { type: ORDER, payload: id };
};
export const orderPokemonsByAttack = (id) => {
  return { type: ORDER_BY_ATTACK, payload: id };
};
