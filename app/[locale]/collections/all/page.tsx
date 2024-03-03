'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import CollectionContainer from "@/components/modules/tab-collection/container";
import { useParams } from "next/navigation";

function CollectionFallback() {
  return <>placeholder</>
}

const CollectionServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<CollectionFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <CollectionContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default CollectionServer;
