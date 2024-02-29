'use client';

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import CollectionContainer from "@/components/modules/tab-collection/container";
interface CollectionServerProps {
  params: {
    locale: string;
  };
}

const CollectionServer: NextPage<CollectionServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">  
        <CollectionContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default CollectionServer;
