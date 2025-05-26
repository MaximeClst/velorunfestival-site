import { DepReu } from "@/components/icons/DepReu";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { CTBLogo } from "./icons/2CTBLogo";
import { FFCLogo } from "./icons/FFCLogo";
import { ONFLogo } from "./icons/ONFLogo";

export default function CarouselPartenaires() {
  return (
    <section className="bg-background overflow-hidden py-16">
      <div className="group relative m-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="md:max-w-44 md:border-r md:pr-6">
            <p className="text-end text-muted-foreground">Nos partenaires</p>
          </div>
          <div className="relative py-6 md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={112}>
              <div className="flex">
                <DepReu
                  size={64}
                  className="mx-auto fill-current"
                  aria-label="DepartementReunion"
                />
              </div>
              <div className="flex">
                <ONFLogo
                  size={64}
                  className="mx-auto fill-current"
                  aria-label="ONF"
                />
              </div>
              <div className="flex">
                <FFCLogo
                  size={64}
                  className="mx-auto fill-current"
                  aria-label="FFC"
                />
              </div>
              <div className="flex">
                <CTBLogo
                  size={64}
                  className="mx-auto fill-current"
                  aria-label="2CBT"
                />
              </div>
            </InfiniteSlider>

            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
            <ProgressiveBlur
              className="pointer-events-none absolute left-0 top-0 h-full w-20"
              direction="left"
              blurIntensity={1}
            />
            <ProgressiveBlur
              className="pointer-events-none absolute right-0 top-0 h-full w-20"
              direction="right"
              blurIntensity={1}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
