'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import BlogContainer from "@/components/modules/tab-blog/container";
import { useParams } from "next/navigation";

function BlogFallback() {
  return <>placeholder</>
}

const BlogServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<BlogFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <BlogContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default BlogServer;
