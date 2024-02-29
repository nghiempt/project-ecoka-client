'use client';

import React from "react";
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import SignInContainer from "@/components/modules/auth/sign-in/container";
interface SignInServerProps {
  params: {
    locale: string;
  };
}

const SignInServer: NextPage<SignInServerProps> = async ({
  params: { locale },
}) => {
  return (
    <BoxWrapper>
      <div className="w-full h-screen flex justify-center items-center">  
        <SignInContainer
          params={{
            locale: locale,
          }}
        />
      </div>
    </BoxWrapper>
  );
};

export default SignInServer;
