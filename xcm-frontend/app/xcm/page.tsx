"use client";
import SendTransaction from "@/components/send-transaction";
import { ConnectionButton } from "dot-connect/react.js";
import React from "react";

export default function XcmInner() {
  return (
    <React.Fragment>
      <ConnectionButton />
      <SendTransaction />
    </React.Fragment>
  );
}
