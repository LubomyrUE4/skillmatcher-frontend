import httpService from "./http.service";
import localStorageService from "./localStorage.service";

const accountEndpoint = "profile/";

const accountService = {
  get: async () => {
    const id = localStorageService.getUserId();
    const { data } = await httpService.get(accountEndpoint + id);
    return data;
  },
  update: async (payload) => {
    const { data } = await httpService.patch(accountEndpoint, payload);
    console.log('res data!: ', data)
    return data;
  },
};

export default accountService;
