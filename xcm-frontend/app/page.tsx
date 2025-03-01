// import { ChainProvider } from "@reactive-dot/react";
import "dot-connect/font.css";
import XcmInner from "./xcm/page";

export default function XcmPlaygroundPage() {
  return (
    // <ChainProvider chainId={"paseo"}>
    <div className="flex flex-col gap-8 max-w-[768px] mx-auto min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold">Xcm Playground</h1>
      <XcmInner />
      <div className="text-sm text-muted-foreground">
        Maintained by{" "}
        <a
          className="underline underline-offset-4"
          href="https://buildstation.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          buildstation.org
        </a>{" "}
        with support from{" "}
        <a
          className="underline underline-offset-4"
          href="https://openguild.wtf"
          target="_blank"
          rel="noopener noreferrer"
        >
          OpenGuild
        </a>
      </div>
    </div>
    // </ChainProvider>
  );
}
