const SAVE_USER = "saveUser";
const saveUser = user => {
  return { type: SAVE_USER, payload: user };
};
export { SAVE_USER, saveUser };
