export const selectAirport = (airport) => {
  return {
    type: 'AIRPORT_SELECTED',
    payload: airport
  };
};