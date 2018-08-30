const GOTO_STEP = "gotoStep";
const gotoStep = step => {
  return { type: GOTO_STEP, payload: step };
};
export { GOTO_STEP, gotoStep };
