import {MetamaskFilecoinRpcRequest, SnapConfig} from "@nodefactory/metamask-filecoin-types";
import {MetamaskFilecoinSnap} from "./snap";

async function sendSnapMethod<T>(request: MetamaskFilecoinRpcRequest, snapId: string): Promise<T> {
  return await window.ethereum.send({
    method: snapId,
    params: [
      request
    ]
  });
}

export async function getAddress(this: MetamaskFilecoinSnap): Promise<string> {
  return await sendSnapMethod({method: "getAddress"}, this.snapId);
}

export async function getPublicKey(this: MetamaskFilecoinSnap): Promise<string> {
  return await sendSnapMethod({method: "getPublicKey"}, this.snapId);
}

export async function exportSeed(this: MetamaskFilecoinSnap): Promise<string> {
  return await sendSnapMethod({method: "exportSeed"}, this.snapId);
}

export async function configure(this: MetamaskFilecoinSnap, configuration: SnapConfig): Promise<void> {
  return await sendSnapMethod({method: "configure", params: {configuration: configuration}}, this.snapId);
}

export async function getBalance(this: MetamaskFilecoinSnap): Promise<string> {
  return (await sendSnapMethod({method: "getBalance"}, this.snapId)) as string
}
