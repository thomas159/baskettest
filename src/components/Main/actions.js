import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE
} from '../../constants'

export const fetchProducts = () => async(dispatch) => {
  dispatch({ type: 'FETCH_PRODUCTS_REQUEST'})
  try {
    const data = await (await fetch(`http://localhost:9001/products`)).json()
    dispatch({ type: 'FETCH_PRODUCTS_SUCCESS', payload: data})
  } catch (error) {
    dispatch({ type: 'FETCH_PRODUCTS_FAILURE', payload: error})
  }
}

export const fetchProductsRequest = () => ({
  type: FETCH_PRODUCTS_REQUEST
});

export const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: { ...products }
});

export const fetchProductsFailure = error => ({
  type: FETCH_PRODUCTS_FAILURE,
  payload: { error }
});

