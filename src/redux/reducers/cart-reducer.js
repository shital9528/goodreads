import { ActionTypes } from "../constants/action-types";

// initiail State
export const initiailState = {
  numberCart: 0,
  Carts: [],
};

export const cartReducer = (state = initiailState, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_NUMBER_CART:
      return {
        ...state,
      };
    case ActionTypes.ADD_TO_CART:
      if (state.numberCart === 0) {
        let item = {
          ...payload,
          quantity: 1,
        };
        state.Carts.push(item);
      } else {
        let check = false;
        state.Carts.map((item, index) => {
          if (item.id === payload.id) {
            state.Carts[index].quantity++;
            check = true;
          }
        });
        if (!check) {
          let _item = {
            ...payload,
            quantity: 1,
          };
          state.Carts.push(_item);
        }
      }
      return {
        ...state,
        numberCart: state.numberCart + 1,
      };

      default: 
        return state
  }
};
