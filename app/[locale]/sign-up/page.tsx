"use client";

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import SignUpContainer from "@/components/modules/auth/sign-up/container";
interface SignUpServerProps {
  params: {
    locale: string;
  };
}

const SignUpServer: NextPage<SignUpServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">
        <SignUpContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default SignUpServer;
