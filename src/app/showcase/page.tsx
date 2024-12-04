import BlurFade from "@/components/magicui/blur-fade";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { BoxIcon, KeyboardIcon, Share2Icon } from "lucide-react";
import Image from "next/image";
import { ComponentPropsWithoutRef } from "react";

const BLUR_FADE_DELAY = 0.04;

export default function ShowcasePage() {
  return (
    <section>
      <BlurFade delay={BLUR_FADE_DELAY}>
        <h1 className="font-medium text-2xl mb-8 tracking-tighter">showcase</h1>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        <BentoGrid className="grid-cols-4">
          {showcaseItems?.map((item, id) => (
            <BentoCard {...item} key={item.href} />
          ))}
        </BentoGrid>
      </BlurFade>
    </section>
  );
}

type ShowcaseItem = ComponentPropsWithoutRef<typeof BentoCard>;

const showcaseItems: ShowcaseItem[] = [
  {
    name: "Cute cat login Form",
    description:
      "A login form where the avatar follows the cursors around the page and looks away when typing password",
    href: "/showcase/spline-login-form",
    cta: "See live!",
    className: "col-span-4 lg:col-span-2",
    Icon: BoxIcon,
    background: (
      <div className="group-hover:scale-105  transition-all ease-in-out absolute  top-2 origin-top w-full h-full">
        <video
          src="/showcase/spline-rotate-alpha.webm"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto w-full object-cover object-top" // needed because random black line at bottom of video
        />
      </div>
    ),
  },
  {
    name: "Interactive number keys",
    description:
      "A spline scene where you can press the number keys on your keyboard to interact with the scene.",
    href: "/showcase/spline-num-keys",
    cta: "Try it out!",
    className: "col-span-4 lg:col-span-2",
    Icon: KeyboardIcon,
    background: (
      <div className="group-hover:scale-105  transition-all ease-in-out absolute  top-2 origin-top w-full h-full">
        <video
          src="/showcase/nums-alpha.webm"
          autoPlay
          loop
          muted
          playsInline
          className="pointer-events-none mx-auto w-full object-cover object-top" // needed because random black line at bottom of video
        />
      </div>
    ),
  },
];
