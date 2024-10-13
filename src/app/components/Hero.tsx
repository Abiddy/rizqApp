"use client";

import MeteorShower from "@/components/ui/meteors";
import WordPullUp from "@/components/ui/word-pull-up";
import { Loader } from "lucide-react";
import BeamComponent from "./BeamComponent";
import PulsatingButton from "@/components/ui/pulsating-button";

export default function Hero() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="flex flex-col items-start justify-center h-full overflow-hidden p-6 z-50 max-w-4xl w-full mx-auto">
        <BeamComponent />

        <div className="text-light">
          <WordPullUp words="Rizq is recruiting!" />
        </div>

        <div className="text-lg text-neutral-500 dark:text-neutral-400 lg:px-1 w-full ">
          <div className="w-full sm:w-2/3">
            It takes a few minutes to sign up as a Rizq Seller, find YOUR skills and become a Rizq seller today!
          </div>

          <div className="my-class">
            <div className="flex items-center gap-2 w-full lg:w-2/3 mt-6">
              <a href={process.env.GITHUB_URL} target="_blank" className="flex-1">
                <PulsatingButton>
                  <div>Become a Seller</div>
                  <Loader />
                </PulsatingButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <MeteorShower />
    </div>
  );
}
