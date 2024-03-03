'use client';

import React from "react";
import { Suspense } from 'react'
import BoxWrapper from "@/components/common/box-wrapper";
import { NextPage } from "next";
import { useParams } from "next/navigation";
import ContactContainer from "@/components/modules/tab-contact/container";

function ContactFallback() {
  return <>placeholder</>
}

const ContactServer: NextPage<any> = async () => {
  const { locale } = useParams();
  return (
    <BoxWrapper>
      <Suspense fallback={<ContactFallback />}>
        <div className="w-full h-screen flex justify-center items-center">
          <ContactContainer
            params={{
              locale: locale,
            }}
          />
        </div>
      </Suspense>
    </BoxWrapper>
  );
};

export default ContactServer;
