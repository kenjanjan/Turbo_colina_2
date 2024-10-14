"use client";

import Button from "@repo/ui/button";
export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1>fe</h1>
      <Button  alertText={() => alert("This is from FE")}  // Pass a function
  // Passing the function here
 className="bg-blue-500 text-white" text="fe button" />
    </main>
  );
}
