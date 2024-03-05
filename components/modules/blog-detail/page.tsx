"use client";

import { NewBlog } from "@/components/common/new-blog";
import { PreBanner } from "@/components/common/pre-banner";
import { FetchData } from "@/fetch/fetchdata";
import { CardMedia } from "@mui/material";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function BlogDetail({ translate }: { translate: any }) {

  const [blog, setBlog] = useState<any>(null);

  const searchParams = useSearchParams()

  const init = async () => {
    const fetchBlogs = await FetchData.GET_ALL_BLOGS()
    let foundItem: any = fetchBlogs?.find((item: any) => item?.blog_id.toString() === (searchParams.get('id') || '1'));
    setBlog(foundItem)
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, [blog]);

  return (
    <div className="lg:w-3/4 flex flex-col justify-center item-center text-justify px-4 lg:px-0">
      <PreBanner title={translate('blog-detail-banner')} translate={translate} />
      <div className="h-[30px] lg:h-[60px]"></div>
      <h1 className="text-[24px] lg:text-[34px] font-bold mb-4">
        {blog?.blog_title}
      </h1>
      <CardMedia
        component="img"
        height="194"
        image={blog?.blog_thumbnail}
        alt="blog"
        className="rounded-lg mb-4"
      />
      <h1 className="text-[16px] px-0 lg:px-20 my-4">
        {blog?.blog_description}
      </h1>
      {
        blog?.blog_section?.map((section: any, index: number) =>
          <div className="mt-10 flex flex-col justify-center items-center">
            <div className="lg:w-1/2">
              <CardMedia
                component="img"
                height="194"
                image={section?.section_thumbnail}
                alt="blog"
                className="rounded-lg mb-1"
              />
            </div>
            <h1 className="text-[14px] mt-2">
              {section?.section_thumbnail_label}
            </h1>
            <h1 className="text-[16px] lg:px-20 my-4">
              {
                section?.section_content
              }
            </h1>
          </div>
        )
      }
      <div className="h-[20px]"></div>
      <NewBlog translate={translate} />
      <div className="h-[20px]"></div>
    </div>
  );
}
