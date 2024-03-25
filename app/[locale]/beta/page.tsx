'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import BetaContainer from "@/components/modules/beta/container";

function BetaFallback() {
  return <>...</>
}

const BetaServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<BetaFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <BetaContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default BetaServer;
