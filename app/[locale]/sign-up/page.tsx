"use client";

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import SignUpContainer from "@/components/modules/auth/sign-up/container";
import { useParams } from "next/navigation";

function SignUpFallback() {
  return <>placeholder</>
}

const SignUpServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<SignUpFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <SignUpContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default SignUpServer;
