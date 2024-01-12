import * as actions from "./actionTypes";

const initialState = {
  locationList: [],
  selectedLocations: [],
  selectedLocation: null,
};

const parseData = (data) => {
  let array = data.map(item => {
    // currency
    const currencyCode = Object.keys(item.currencies)[0];
    const currencyName = item.currencies[currencyCode].name;

    // calling code
    const root = item.idd.root;
    const suffixes = item.idd.suffixes.join(',');
    return ({
      region: item.region,
      countryName: item.name.common,
      currency: currencyName,
      callingCode: `${root}${suffixes}`,
      value: item.name.common
    })
  });
  return array
}

const replaceObj = (state, val) => {
  let newArr = [...state.selectedLocations];
  const indexToReplace = newArr.findIndex(item => item.countryName === state.selectedLocation.countryName);

  if (indexToReplace !== -1) {
    const newLocation = state.locationList.find(item => item.countryName === val);
    if (newLocation) {
      newArr[indexToReplace] = newLocation;
    }
  }
  return {
    ...state,
    selectedLocation: null,
    selectedLocations: newArr,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_COUNTRY_LIST:
      return {
        ...state,
        locationList: parseData(action.payload),
      };
    case actions.SELECT_LOCATION:
      return {
        ...state,
        selectedLocations: [...state.selectedLocations, ...state.locationList.filter(i => i.value === action.payload)]
      };
    case actions.UPDATE_LOCATION:
      return {
        ...state,
        selectedLocation: action.payload
      };
    case actions.MODIFY_LOCATION:
      return replaceObj(state, action.payload);
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
