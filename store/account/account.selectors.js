const getAccountData = () => state => state.account.entity

const getAccountLoadingStatus = () => state.account.loading

export { getAccountData, getAccountLoadingStatus }
