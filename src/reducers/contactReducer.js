export const INITIAL_STATE = {
  loading: false,
  error: false,
  contactDetails: {
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  },
};

export const contactReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        contactDetails: {
          ...state.contactDetails,
          [action.payload.name]: action.payload.value,
        },
      };

    case "RESET_INPUT":
      return INITIAL_STATE;

    default:
      return state;
  }
};
