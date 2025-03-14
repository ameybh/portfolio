import { ContactForm } from "@/components/contact-form";
import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DATA } from "@/data/resume";
import {
  ArrowRightIcon,
  ArrowUpRightIcon,
  ComponentIcon,
  FileTextIcon,
  NotebookIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;

function LinkRenderer(props: any) {
  // Check if the link is external by seeing if it's absolute and has a different origin
  const isExternal =
    props.href.startsWith("http") &&
    !props.href.startsWith(DATA.url) &&
    !props.href.startsWith("/");

  return (
    <a
      href={props.href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
    >
      {props.children}
    </a>
  );
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-3xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <div className="flex items-center flex-wrap gap-3">
                <BlurFadeText
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none"
                  yOffset={8}
                  text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
                />
                <BlurFadeText
                  yOffset={8}
                  delay={BLUR_FADE_DELAY}
                  className="text-3xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none  hover:animate-wave"
                  text="👋"
                />
              </div>
              <BlurFadeText
                className="max-w-lg md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      <section id="about">
        <BlurFade delay={BLUR_FADE_DELAY * 3}>
          <h2 className="text-2xl font-bold">About</h2>
        </BlurFade>
        <BlurFade delay={BLUR_FADE_DELAY * 4}>
          <Markdown
            className="prose max-w-full text-pretty font-sans  text-muted-foreground dark:prose-invert"
            components={{
              a: LinkRenderer,
            }}
          >
            {DATA.summary}
          </Markdown>
        </BlurFade>
      </section>
      <section id="work">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 5}>
            <h2 className="text-2xl font-bold">Work Experience</h2>
          </BlurFade>
          {DATA.work.map((work, id) => (
            <BlurFade
              key={work.company}
              delay={BLUR_FADE_DELAY * 6 + id * 0.05}
            >
              <ResumeCard
                key={work.company}
                logoUrl={work.logoUrl}
                altText={work.company}
                title={work.company}
                subtitle={work.title}
                href={work.href}
                badges={work.badges}
                period={`${work.start} - ${work.end ?? "Present"}`}
                description={work.description}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="education">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold">Education</h2>
          </BlurFade>
          {DATA.education.map((education, id) => (
            <BlurFade
              key={education.school}
              delay={BLUR_FADE_DELAY * 8 + id * 0.05}
            >
              <ResumeCard
                key={education.school}
                href={education.href}
                logoUrl={education.logoUrl}
                altText={education.school}
                title={education.school}
                subtitle={education.degree}
                period={`${education.start} - ${education.end}`}
              />
            </BlurFade>
          ))}
        </div>
      </section>
      <section id="skills">
        <div className="flex min-h-0 flex-col gap-y-3">
          <BlurFade delay={BLUR_FADE_DELAY * 9}>
            <h2 className="text-2xl font-bold">Skills</h2>
          </BlurFade>
          <div className="flex flex-wrap gap-2 ">
            {DATA.skills.map((skill, id) => (
              <BlurFade
                key={skill.name}
                delay={BLUR_FADE_DELAY * 10 + id * 0.05}
              >
                <Badge
                  variant="outline"
                  key={skill.name}
                  className="flex gap-2 items-center px-2.5 py-1.5 rounded-2xl group text-sm"
                >
                  <div className="size-9 flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.name}
                      width={36}
                      height={36}
                    />
                  </div>

                  {skill.name}
                </Badge>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="projects">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
            {DATA.projects.map((project, id) => (
              <BlurFade
                key={project.title}
                delay={BLUR_FADE_DELAY * 12 + id * 0.05}
              >
                <ProjectCard
                  href={project.href}
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  dates={project.dates}
                  tags={project.technologies}
                  image={project.image}
                  video={project.video}
                  links={project.links}
                />
              </BlurFade>
            ))}
          </div>
        </div>
      </section>
      <section id="more">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 11}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Extras
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  More to see
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Explore some components I&apos;ve built for fun or read my
                  blog.
                </p>
              </div>
            </div>
          </BlurFade>
          <div className="flex flex-col w-full items-center justify-center gap-3">
            <BlurFade delay={BLUR_FADE_DELAY * 12}>
              <Link href="/showcase">
                <Badge
                  variant="outline"
                  className="px-3 py-2.5 text-lg rounded-full flex items-center  cursor-pointer group"
                >
                  <div className="flex gap-2 items-center">
                    <ComponentIcon size={20} />
                    Showcase
                  </div>
                  <div className="flex-shrink-0 max-w-0 group-hover:max-w-6 transition-all overflow-hidden">
                    <ArrowRightIcon size={20} className="pl-1" />
                  </div>
                </Badge>
              </Link>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <Link href="/blog">
                <Badge
                  variant="outline"
                  className="px-3 py-2.5 text-lg rounded-full flex items-center cursor-pointer group"
                >
                  <div className="flex gap-2 items-center">
                    <NotebookIcon size={20} />
                    Blog
                  </div>
                  <div className="flex-shrink-0 max-w-0 group-hover:max-w-6 transition-all overflow-hidden">
                    <ArrowRightIcon size={20} className="pl-1" />
                  </div>
                </Badge>
              </Link>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <Link href="/Amey_Bhavsar_SDE_2025.pdf" target="_blank">
                <Badge
                  variant="outline"
                  className="px-3 py-2.5 text-lg rounded-full flex items-center cursor-pointer group"
                >
                  <div className="flex gap-2 items-center">
                    <FileTextIcon size={20} />
                    Resume
                  </div>
                  <div className="flex-shrink-0 max-w-0 group-hover:max-w-6 transition-all overflow-hidden">
                    <ArrowUpRightIcon size={20} className="pl-1" />
                  </div>
                </Badge>
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>
      {/* <section id="hackathons">
        <div className="space-y-12 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 13}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Hackathons
                </div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                  I like building things
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  During my time in university, I attended{" "}
                  {DATA.hackathons.length}+ hackathons. People from around the
                  country would come together and build incredible things in 2-3
                  days. It was eye-opening to see the endless possibilities
                  brought to life by a group of motivated and passionate
                  individuals.
                </p>
              </div>
            </div>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 14}>
            <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
              {DATA.hackathons.map((project, id) => (
                <BlurFade
                  key={project.title + project.dates}
                  delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                >
                  <HackathonCard
                    title={project.title}
                    description={project.description}
                    location={project.location}
                    dates={project.dates}
                    image={project.image}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </ul>
          </BlurFade>
        </div>
      </section> */}
      <section id="contact">
        <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full py-12">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="space-y-3">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                Contact
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                and I&apos;ll respond whenever I can. <br /> You can also reach
                me via this form below.
              </p>
              <div>
                <ContactForm />
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}
