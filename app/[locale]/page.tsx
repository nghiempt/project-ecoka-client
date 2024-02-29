'use client';

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import HomeContainer from "@/components/modules/tab-home/container";
interface PageServerProps {
  params: {
    locale: string;
  };
}

const PageServer: NextPage<PageServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">  
        <HomeContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default PageServer;
