'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import ProductContainer from "@/components/modules/product/container";
import { useParams } from "next/navigation";

function ProductFallback() {
  return <>placeholder</>
}

const ProductServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<ProductFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <ProductContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default ProductServer;
