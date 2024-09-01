import { FC } from "react";
import { TapBar } from "@/components/TapBar";
import { GlassWrapper } from "@/components/GlassWrapper";
import PageWrapper from "@/components/PageWrapper";

import tasksImage from "../../assets/tasks.png";

export const TasksPage: FC = () => {
  return (
    <PageWrapper>
      <GlassWrapper stylesClasses="justify-between">
        <div className="flex flex-col items-center justify-center h-full space-y-5">
          <p className="text-[54px] text-[#ededed] opacity-25">
            Tasks
          </p>
          <img src={tasksImage} />
        </div>
        <TapBar />
      </GlassWrapper>
    </PageWrapper>
  );
};