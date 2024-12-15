"use client";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import BackButton from "../../../../../public/assets/back button.png";
import { useRouter } from "next/navigation";
import JoinFooterSection from "@/components/JoinFooterSection";

export default function Component() {
  const router = useRouter();
  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-5">
        {/* <Button variant="ghost" className="mb-4"> */}
        <button
          onClick={() => router.back()}
          className="text-white hidden md:flex"
        >
          <Image
            src={BackButton}
            width={70}
            height={70}
            alt="Back Button"
            quality={100}
          />
        </button>
        {/* </Button> */}

        <Card className="bg-[#202020] bg-opacity-90 border-none rounded-xl text-white mb-6">
          <CardHeader className="flex flex-row items-center gap-7 md:p-20">
            <div className="w-16 h-16 bg-white rounded-full" />
            <div>
              <CardTitle className="text-xl md:text-4xl">
                Idea Title can be long in here as well
              </CardTitle>
              <p className="text-lg text-zinc-400">
                Here comes some description about the idea above which could be
                long but that depends on the setup.
              </p>
            </div>
          </CardHeader>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-6">
            <Card className="w-full max-w-2xl bg-[#202020] bg-opacity-90 text-zinc-300 border-slate-300 shadow-lg">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-zinc-400">
                  History
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <HistorySection title="Initial Idea" />
                <HistorySection title="Building the MVP" />
                <HistorySection title="Growth Milestones" />
              </CardContent>
            </Card>

            <Card className="bg-[#202020] bg-opacity-90 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl text-slate-100 border-b-2 border-slate-300 pb-2">
                  Growth Milestones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-slate-100">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-zinc-400">Customer {i}</span>
                    <span>(some random description about the customer)</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="bg-[#202020] bg-opacity-90 rounded-xl">
              <CardHeader>
                <CardTitle className="text-xl text-slate-100 border-b-2 border-slate-300 pb-2">
                  At a Glance
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-5 text-slate-100">
                <InfoItem label="Company" value="Some.com" />
                <InfoItem label="Peak Revenue" value="$0.5k" />
                <InfoItem label="Founder" value="Random" />
                <InfoItem label="Founded" value="30th Feb 2001" />
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-left mt-10">
          <JoinFooterSection />
        </div>
      </div>
    </div>
  );
}

function HistorySection({ title }) {
  return (
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-slate-100 border-b-2 border-slate-300 pb-2">{title}</h3>
      <p className="text-sm text-zinc-400">
        This section would normally include a few paragraphs of historical
        information about the initial founder(s) got this idea to profitability.
        Sign up for an Indie Hackers account to read this full idea report.
      </p>
    </div>
  );
}

function InfoItem({ label, value }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-zinc-400">{label}</span>
      <span>{value}</span>
    </div>
  );
}
