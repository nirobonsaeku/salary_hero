import axios from "axios";
import * as Keychain from "react-native-keychain";
import Config from "react-native-config";
import sha256 from "js-sha256";
import { CommonActions } from "@react-navigation/native";
import * as RootNavigation from "@navigation/root-navigation";
import { PIN_LOGIN } from "@features";
const ACCESS_TOKEN = "ACCESS_TOKEN";
const PIN_TOKEN = "PIN_TOKEN";

const axiosApiEmbedHeader = axios.create({
  baseURL: Config.BASE_URL,
});
axiosApiEmbedHeader.interceptors.request.use(
  async (configApi) => {
    if (configApi.url == "/api/v1/signin") {
      return configApi;
    }
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
    if (error.response && error.response.status == 403) {
      await logout();
    }
    return Promise.reject(error);
  }
);

const request = async ({ params, url, method }: any) => {
  return await axiosApiEmbedHeader({
    url,
    data: params,
    method,
  });
};

export const getTransaction = async () => {
  return await request({
    method: "get",
    url: "/api/v1/user/transactions",
  });
};

export const addWithdraw = async (amount) => {
  return await request({
    method: "post",
    url: "/api/v1/user/withdraw",
    params: {
      amount,
    },
  });
};

export const getUser = async () => {
  return await request({
    method: "get",
    url: "/api/v1/user/profile",
  });
};

export const login = async (phone) => {
  const response = await request({
    method: "post",
    url: "/api/v1/signin",
    params: {
      phone,
    },
  });
  await useUpdateAccessToken(response.data.data.token);
  return response;
};

export const logout = async () => {
  await useRemoveAccessToken();
  await useRemovePin();
  RootNavigation.navigate(
    CommonActions.reset({
      index: 0,
      routes: [{ name: "Authen" }],
    })
  );
};

export const checkTokenNotExpired = async () => {
  try {
    const user = await getUser();
    if (user) {
      RootNavigation.navigate(
        CommonActions.reset({
          index: 0,
          routes: [
            {
              name: "Pin",
              params: {
                type: PIN_LOGIN,
              },
            },
          ],
        })
      );
    }
  } catch (err) {}
};

export const useRemoveAccessToken = async () => {
  await Keychain.resetInternetCredentials(ACCESS_TOKEN);
};

export const useRemovePin = async () => {
  await Keychain.resetInternetCredentials(PIN_TOKEN);
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
  return credentials && credentials.password;
};

export const setPinCode = async (pin) => {
  await Keychain.setInternetCredentials(
    PIN_TOKEN,
    PIN_TOKEN,
    sha256.sha256(pin)
  );
};

export const comparePin = async (currentPin) => {
  const oldPin = await Keychain.getInternetCredentials(PIN_TOKEN);
  const hash = sha256.sha256(currentPin);
  return oldPin.password == hash;
};
export default axiosApiEmbedHeader;
