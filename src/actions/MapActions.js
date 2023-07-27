import { LOAD_REGION } from '../constants/actionTypes';

export const loadRegion = (region) => ({
  type: LOAD_REGION,
  payload: region,
});
