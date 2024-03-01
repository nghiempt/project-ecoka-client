'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import HomeContainer from "@/components/modules/tab-home/container";
import { useParams } from "next/navigation";

function HomeFallback() {
  return <>placeholder</>
}

const PageServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<HomeFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <HomeContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default PageServer;
