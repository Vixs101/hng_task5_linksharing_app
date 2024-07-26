"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function () {
  return (
    <>
      <div className="">
        <Image
          src={"/images/logo.png"}
          alt={"App logo"}
          width={182.5}
          height={40}
        />
        <form action="#" className="bg-white">
          <div>
            <h2>Login</h2>
            <p>Add your details below to get back into the app</p>
          </div>
        </form>
      </div>
    </>
  );
}
