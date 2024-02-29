"use client";

import React, { useEffect } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { CardMedia } from "@mui/material";
import { FAKE } from "@/constant/fake";
import Link from "next/link";

export const NewBlog = ({ translate }: { translate: any }) => {
  const init = async () => { };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => { }, []);

  return (
    <div className="w-full mt-20">
      <div className="flex justify-between items-center">
        <h1 className="text-[20px] lg:text-[24px] text-gray-700 font-bold">
          {translate('new-blog-01')}
        </h1>
        <Link href={{
          pathname: '/blog',
        }}>
          <button className="bg-[rgb(var(--quaternary-rgb))] !text-gray-700 text-[13px] py-2 px-4 rounded-lg font-semibold flex justify-between items-center">
            {translate('new-blog-02')} <ArrowOutwardIcon className="ml-1" fontSize="small" />
          </button>
        </Link>
      </div>
      <div className="mt-6 flex flex-col lg:flex-row gap-x-[24px] gap-y-6">
        {FAKE?.BLOGS?.map((blog: any, index) => (
          <Link
            key={index}
            href={{
              pathname: '/blog/detail',
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
                  {blog?.blog_title}
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
    </div>
  );
};
