"use client";
import SendTransaction from "@/components/send-transaction";
import SigpassKit from "@/components/sigpasskit";

export default function XcmPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[768px] mx-auto min-h-screen items-center justify-center">
      <SigpassKit />
      <h1 className="text-2xl font-bold">Xcm Playground</h1>
      <SendTransaction />
    </div>
  );
}
