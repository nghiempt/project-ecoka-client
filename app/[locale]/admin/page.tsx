"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import AdminContainer from "@/components/modules/admin/container";
interface AdminServerProps {
  params: {
    locale: string;
  };
}

const AdminServer: NextPage<AdminServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">
        <AdminContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default AdminServer;
