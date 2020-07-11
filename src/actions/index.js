import { SIGN_OUT, SIGN_IN } from './types';

export const signIn = (id) => {
  console.log('iddd', id);
  return {
    type: SIGN_IN,
    payload: id,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};
