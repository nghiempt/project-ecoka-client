"use client";

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import AdminContainer from "@/components/modules/admin/container";
import { useParams } from "next/navigation";

function AdminFallback() {
  return <>placeholder</>
}

const AdminServer: NextPage<any> = async () => {
  return (
    <BoxWrapper>
      <Suspense fallback={<AdminFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <AdminContainer />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default AdminServer;
