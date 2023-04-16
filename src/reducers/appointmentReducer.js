import { servicesList, doctors } from "../data";

export const INITIAL_STATE = {
  loading: false,
  error: false,
  name: "",
  doctor: doctors[0].name,
  service: servicesList[0],
  phone: "",
  date: "",
  time: "",
  request: "",
};

export const appointmentReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };

    case "RESET_INPUT":
      return INITIAL_STATE;

    default:
      return state;
  }
};
