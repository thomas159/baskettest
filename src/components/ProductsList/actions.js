import{ ADD_TO_BASKET } from '../../constants'

export const addToBasket = item => ({
  type: ADD_TO_BASKET,
  item
});