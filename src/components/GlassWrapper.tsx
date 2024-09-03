import { FC } from "react";


interface GlassWrapperProps {
    children: React.ReactNode;
    stylesClasses?: string;
}

export const GlassWrapper: FC<GlassWrapperProps> = ({ children, stylesClasses }) => {
  return (
      <div className={`glass-wrapper2 w-full h-full flex flex-col items-center ${stylesClasses}`}>
        {children}
      </div>
  );
};
