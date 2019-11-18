import{ REMOVE_FROM_BASKET } from '../../constants'

export const removeFromBasket = item => ({
  type: REMOVE_FROM_BASKET,
  item
});