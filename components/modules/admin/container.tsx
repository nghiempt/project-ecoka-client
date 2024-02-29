"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import AdminDashboard from "./page";

interface AdminContainerProps {
  params: {
    locale: string;
  };
}

const AdminContainer: NextPage<AdminContainerProps> = async ({
  params: { locale },
}: {
  params: any;
}) => {
  return (
    <BoxWrapper>
      <div className="w-full flex justify-center items-center">
        <div className="w-full flex flex-col justify-start items-center">
          <AdminDashboard />
        </div>
      </div>
    </BoxWrapper>
  );
};

export default AdminContainer;
