import { combineReducers } from 'redux'
import authReducer from './auth/auth.reducer'
import accountReducer from './account/account.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  account: accountReducer,
})

export default rootReducer
