import Button from "@repo/ui/button";
import {Page as FEService} from "@repo/fe";
export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <h1>web</h1>
      <Button className="bg-red-500 text-white" text="web button" />
      <FEService /> 
    </main>
  );
}
