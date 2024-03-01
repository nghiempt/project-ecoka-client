'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import AboutContainer from "@/components/modules/tab-about/container";
import { useParams } from "next/navigation";

function AboutFallback() {
  return <>placeholder</>
}

const AboutServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<AboutFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <AboutContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default AboutServer;
