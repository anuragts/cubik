import React from "react";
import { ProjectTabs } from "../components/ProjectTabs";
import { SideBar } from "../components/Sidebar";
import { Prisma, User, prisma } from "@cubik/database";
import { Stack } from "@/utils/chakra";
import type { Metadata, ResolvingMetadata } from "next";
import Head from "next/head";


interface Props {
  params: {
    id: string[];
  };
}
// get from head
const BASE_URL = process.env.NEXT_PUBLIC_URL_BASE;

interface ProjectDetailsReturnType {
  longDescription: string;
  twitterHandle: string;
  githubLink: string;
  discordLink: string;
  telegramLink: string;
  team: {
    user: User;
  }[];
  projectJoinHackathon?: {
    tracks: Prisma.JsonValue;
    hackathon: {
      name: string;
      hackathonEndDate: Date;
      hackathonStartDate: Date;
      votingEndDate: Date;
      votingStartDate: Date;
    };
  }[];
  amount?: number;
}
const ProjectDetails = async (
  id: string,
  event?: "hackathon" | "round",
  eventId?: string
): Promise<ProjectDetailsReturnType | null> => {
  try {
    if (eventId && event === "hackathon") {
      const res = await prisma.project.findFirst({
        where: {
          id: id,
        },
        select: {
          longDescription: true,
          twitterHandle: true,
          githubLink: true,
          discordLink: true,
          telegramLink: true,
          team: {
            select: {
              user: true,
            },
          },
          projectJoinHackathon: {
            where: {
              hackathonId: eventId,
            },
            select: {
              tracks: true,
              amount: true,

              hackathon: {
                select: {
                  name: true,
                  hackathonEndDate: true,
                  hackathonStartDate: true,
                  votingEndDate: true,
                  votingStartDate: true,
                },
              },
            },
          },
        },
      });
      return res as ProjectDetailsReturnType;
    }
    const res = await prisma.project.findFirst({
      where: {
        id: id,
      },
      select: {
        longDescription: true,
        twitterHandle: true,
        githubLink: true,
        discordLink: true,
        telegramLink: true,
        team: {
          select: {
            user: true,
          },
        },
      },
    });
    return res;
  } catch (error) {
    console.log(error);
    return null;
  }
};

type OgProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: OgProps,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  const project = {
    title: "Cubik",
  };

  const projects = await prisma.project.findUnique({
    where: {
      id: params.id[0],
    },
    select: {
      name: true,
      shortDescription: true,
      logo: true,
    },
  });

  const ogImage = await fetch(`${BASE_URL}/api/og`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    // post title , description
    body: JSON.stringify({
      title: projects?.name,
      description: projects?.shortDescription,
    }),
  });
  // const ogImagess = await ogImage.json() ;
  // console.log(ogImage);

  const previousImages = (await parent)?.openGraph?.images || [];

  return {
    title: projects?.name,
    description: projects?.shortDescription,
    openGraph: {
      images: [`${ogImage}`, ...previousImages],
    },
  };
}

const ProjectPage = async ({ params: { id } }: Props) => {
  const projectDetails = await ProjectDetails(
    id[0] as string,
    id[1] as "hackathon" | "round",
    id[2]
  );
  return (
    <>
      <Head>
        <meta property="og:image" content={`${BASE_URL}/api/og?id=${id[0]}`} />
      </Head>

      <Stack
        w="full"
        mx="auto"
        gap="24px"
        direction={{ base: "column-reverse", lg: "row" }}
        alignItems={"start"}
        justifyContent={"space-between"}
      >
        <ProjectTabs
          id={id[0] as string}
          eventId={id[2] as string}
          eventType={id[1] as "hackathon" | "round" | "preview"}
          longDescription={
            (projectDetails?.longDescription as string) || "default"
          }
        />
        <SideBar
          contributors={0}
          funding={projectDetails?.amount || 0}
          team={projectDetails?.team || []}
          discord_link={projectDetails?.discordLink as string}
          github_link={projectDetails?.githubLink as string}
          telegram_link={projectDetails?.telegramLink as string}
          twitter_handle={projectDetails?.twitterHandle as string}
          tracks={
            projectDetails?.projectJoinHackathon &&
            projectDetails?.projectJoinHackathon[0]?.tracks
              ? (projectDetails.projectJoinHackathon[0]?.tracks as {
                  label: string;
                  value: string;
                }[])
              : []
          }
        />
      </Stack>
    </>
  );
};

export default ProjectPage;
