import React, { ReactNode } from 'react';

interface PageWrapperProps {
    children: ReactNode;
}

const PageWrapper = ({ children }: PageWrapperProps) => {
    return (
        <div className="bg-[#F1E8E6] w-full h-screen flex flex-col px-5 pt-3 pb-11">
            {children}
        </div>
    );
};

export default PageWrapper;