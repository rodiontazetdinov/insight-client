import { useEffect, useState } from "react";
import { BettingContract, NewBet } from "../wrappers/BettingContract";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { Address, OpenedContract, toNano } from "@ton/core";
import { CONTRACT_ADDRESS } from "@/utils/config";
import { useTonConnect } from "./useTonConnect";
import { TimerContract } from "@/wrappers/TimerContract";

export function useTimerContract() {
  const client = useTonClient();
  const { sender } = useTonConnect();

  const sleep = (time: number) =>
    new Promise((resolve) => setTimeout(resolve, time));

  const [contractData, setContractData] = useState<null | {
    secondAddressToPay: Address;
    timerStartTime: number;
  }>();

  const bettingContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = TimerContract.fromAddress(
      Address.parse("EQBq28gTj1wdfPGRX2t-SoZC3TZIess10f8fcp4-wYpsHu-z")
    );
    return client.open(contract) as OpenedContract<TimerContract>;
  }, [client]);

  useEffect(() => {
    // async function getValue() {
    //   if (!bettingContract) return;
    //   setContractData(null);
    //   const val = await bettingContract.getBetsCounter();
    //   setContractData({
    //     betsCounter: Number(val),
    //   });
    //   await sleep(5000);
    // //   getValue();
    // }
    // getValue();
  }, [bettingContract]);

  return {
    // contract_address: bettingContract?.address.toString(),
    ...contractData,
    sendStart: async () => {
      return await bettingContract?.send(
        sender,
        { value: toNano(0.05) },
        "start"
      );
    },
    getSecondAddressToPay: async () => {
      return await bettingContract?.getSecondAddressToPay();
    },
    sendStop: async () => {
        return await bettingContract?.send(
            sender,
            { value: toNano(0.05) },
            "stop"
          );
      },
    getTimerStartTime: async () => {
      return await bettingContract?.getTimerStartTime();
    },
    getOwner: async () => {
      return await bettingContract?.getOwner();
    },
    getBalance: async () => {
      return await bettingContract?.getBalance();
    },
  };
}
