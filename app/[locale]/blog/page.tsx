'use client';

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import BlogContainer from "@/components/modules/tab-blog/container";
interface BlogServerProps {
  params: {
    locale: string;
  };
}

const BlogServer: NextPage<BlogServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">  
        <BlogContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default BlogServer;
