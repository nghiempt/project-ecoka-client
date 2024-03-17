"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import AdminDashboard from "./page";

const AdminContainer: NextPage<any> = async () => {
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
