import { useEffect, useState } from "react";
import { BettingContract, NewBet } from "../wrappers/BettingContract";
import { useTonClient } from "./useTonClient";
import { useAsyncInitialize } from "./useAsyncInitialize";
import { Address, OpenedContract, toNano } from "@ton/core";
import { CONTRACT_ADDRESS } from "@/utils/config";
import { useTonConnect } from "./useTonConnect";

export function useBettingContract() {
  const client = useTonClient();
  const { sender } = useTonConnect();

  const sleep = (time: number) => new Promise((resolve) => setTimeout(resolve, time));

  const [contractData, setContractData] = useState<null | {
    betsCounter: number;
  }>();

  const bettingContract = useAsyncInitialize(async () => {
    if (!client) return;
    const contract = BettingContract.fromAddress(
      Address.parse(CONTRACT_ADDRESS)
    );
    return client.open(contract) as OpenedContract<BettingContract>;
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
    sendNewBet: (
      chosenTeam: string,
      hackatonPosition: bigint,
      buildLink: string
    ) => {
      const message: NewBet = {
        $$type: "NewBet",
        chosenTeam,
        hackatonPosition,
        buildLink,
      };
      return bettingContract?.send(sender, { value: toNano(0.05) }, message);
    },
    getBetsCounter: async () => {
        return await bettingContract?.getBetsCounter();
      },
  };
}
