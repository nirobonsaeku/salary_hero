import axios from "axios";
import * as Keychain from "react-native-keychain";
import Config from "react-native-config";
import sha256 from "js-sha256";
import { CommonActions } from "@react-navigation/native";
import * as RootNavigation from "../navigation/root-navigation";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const PIN_TOKEN = "PIN_TOKEN";

const axiosApiEmbedHeader = axios.create({
  baseURL: Config.BASE_URL,
});
axiosApiEmbedHeader.interceptors.request.use(
  async (configApi) => {
    const accessToken = await getAccessToken();
    if (accessToken && accessToken != undefined) {
      configApi.headers = {
        Authorization: `Bearer ${accessToken}`,
      };
      return configApi;
    }
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosApiEmbedHeader.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response.status === 403) {
      await logout();
    }
    return Promise.reject(error);
  }
);

const request = async ({ params = null, url, method }) => {
  return await axiosApiEmbedHeader({
    url,
    params,
    method,
  });
};

export const getTransaction = async () => {
  return await request({
    method: "get",
    url: "/api/v1/user/transactions",
  });
};

export const logout = async () => {
  await useRemoveAccessToken();
  RootNavigation.navigate(
    CommonActions.reset({
      index: 0,
      routes: [{ name: "Login" }],
    })
  );
};

export const useRemoveAccessToken = async () => {
  try {
    await Keychain.resetInternetCredentials(ACCESS_TOKEN);
  } catch (err) {
    console.log(`err`, err);
  }
};

export const useUpdateAccessToken = async (accessToken) => {
  await Keychain.setInternetCredentials(
    ACCESS_TOKEN,
    ACCESS_TOKEN,
    accessToken
  );
};

export const getAccessToken = async () => {
  const credentials = await Keychain.getInternetCredentials(ACCESS_TOKEN);
  console.log(`credentials`, credentials);
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyVWlkIjoiam9obl91aWQiLCJwaG9uZSI6IjEiLCJpYXQiOjE3MTY4MjExMzMsImV4cCI6MTcxNjgyMTMxM30.3OK2P38fv1mD7xfjvultbsbqhwP1Y5LIPx2WATjxamo";
  // return credentials;
};

export const setPinCode = async (pin) => {
  console.log(`pin`, pin);
  await Keychain.setInternetCredentials(
    PIN_TOKEN,
    PIN_TOKEN,
    sha256.sha256(pin)
  );
};

export const comparePin = async (currentPin) => {
  const oldPin = await Keychain.getInternetCredentials(PIN_TOKEN);
  const hash = sha256.sha256(currentPin);
  return oldPin.toString() == hash;
};
export default axiosApiEmbedHeader;
