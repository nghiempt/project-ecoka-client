"use client";

import { PreBanner } from "@/components/common/pre-banner";
import { SubBanner } from "@/components/common/sub-banner";
import { FAKE } from "@/constant/fake";
import { ROUTE } from "@/constant/route";
import { limitString } from "@/utils/helper";
import { CardMedia, Pagination } from "@mui/material";
import Link from "next/link";
import React from "react";

export default function TabBlog({ translate }: { translate: any }) {
  return (
    <div className="lg:w-3/4 flex flex-col flex-wrap justify-center items-center gap-10 px-4 lg:px-0">
      <PreBanner title={translate('blog-banner')} translate={translate} />
      <div className="flex flex-col lg:flex-row flex-wrap justify-center items-center gap-10">
        {FAKE.BLOGS.map((blog: any, index) => (
          <Link
            key={index}
            href={{
              pathname: ROUTE.BLOG_DETAIL,
              query: { blog: JSON.stringify(blog) },
            }}
            className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
            style={{ flex: "25%" }}
          >
            <div
              className="rounded-lg overflow-hidden shadow-lg cursor-pointer"
              style={{ flex: "25%" }}
            >
              <CardMedia
                sx={{ height: 300 }}
                image={blog?.blog_thumbnail}
                title="card"
              />
              <h6 className="text-[14px] text-[rgb(var(--primary-rgb))] ml-6 mt-4">
                {blog?.blog_date}
              </h6>
              <div className="px-6 py-2" style={{ minHeight: '48px' }}>
                <div className="font-bold text-[16px] mb-2" style={{ minHeight: '48px' }}>
                  {limitString(blog?.blog_title, 65)}
                </div>
              </div>
              <div className="px-6 pt-2 pb-2">
                <span className="inline-block bg-[rgb(var(--quaternary-rgb))] rounded-full px-3 py-1 text-[14px] font-semibold text-gray-700 mr-2 mb-2">
                  {translate('new-blog-03')}: {blog?.blog_author}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <Pagination count={Math.ceil(FAKE.BLOGS.length / 10)} shape="rounded" className="mt-10" />
      <SubBanner isRoundedFull={true} translate={translate} />
    </div>
  );
}
