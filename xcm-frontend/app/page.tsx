import SendTransaction from "@/components/send-transaction";
import SigpassKit from "@/components/sigpasskit";

export default function XcmPlaygroundPage() {
  return (
    <div className="flex flex-col gap-8 max-w-[768px] mx-auto min-h-screen items-center justify-center">
      <SigpassKit />
      <h1 className="text-2xl font-bold">Xcm Playground</h1>
      <SendTransaction />
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
  );
}
