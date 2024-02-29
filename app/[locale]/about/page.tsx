'use client';

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import AboutContainer from "@/components/modules/tab-about/container";
interface AboutServerProps {
  params: {
    locale: string;
  };
}

const AboutServer: NextPage<AboutServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">  
        <AboutContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default AboutServer;
