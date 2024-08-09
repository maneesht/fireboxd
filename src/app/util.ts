import { connectorConfig } from "@fireboxd/generated";
import { initializeServerApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {
  getDataConnect,
  connectDataConnectEmulator,
} from "firebase/data-connect";
import { firebaseConfig } from "./firebaseConfig";

export async function getDCInstance(token: string) {
  const serverApp = initializeServerApp(firebaseConfig, { authIdToken: token });
  const serverAuth = getAuth(serverApp);
  await serverAuth.authStateReady();
  const dc = getDataConnect(serverApp, connectorConfig);
  if (!dc.isEmulator) {
    connectDataConnectEmulator(dc, "localhost", 9399);
  }
  return dc;
}
