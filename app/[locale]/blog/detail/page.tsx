'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import BlogDetailContainer from "@/components/modules/blog-detail/container";
import { useParams } from "next/navigation";

function DetailFallback() {
  return <>placeholder</>
}

const BlogDetailServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<DetailFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <BlogDetailContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default BlogDetailServer;
