import { createNavigationContainerRef } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const navigate = (navigation) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(navigation);
  }
};
