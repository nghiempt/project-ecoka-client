'use client';

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import ProductContainer from "@/components/modules/product/container";
interface ProductServerProps {
  params: {
    locale: string;
  };
}

const ProductServer: NextPage<ProductServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">  
        <ProductContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default ProductServer;
