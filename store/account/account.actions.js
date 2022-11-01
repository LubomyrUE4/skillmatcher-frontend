import accountSlice from "./account.slice";
import { accountService } from "../../services";
import { toast } from 'react-toastify'

const { requested, received, failed } = accountSlice.actions;

const loadAccount = () => async (dispatch) => {
  dispatch(requested());
  try {
    const { content } = await accountService.get();
    dispatch(received(content));
  } catch (error) {
    dispatch(failed());
    console.log("load account error: ", error);
  }
};

const updateAccount = (payload) => async (dispatch) => {
  try {
    const { content } = await accountService.update(payload);
    dispatch(loadAccount());
    toast.success('Account updated!')
  } catch (error) {
    console.log("update account error: ", error);
  }
};

export { loadAccount, updateAccount };
