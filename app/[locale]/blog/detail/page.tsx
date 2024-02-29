'use client';

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import BlogDetailContainer from "@/components/modules/blog-detail/container";
interface BlogDetailServerProps {
  params: {
    locale: string;
  };
}

const BlogDetailServer: NextPage<BlogDetailServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">  
        <BlogDetailContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default BlogDetailServer;
