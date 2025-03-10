import Form from "../components/Form";
import { Container } from "@/utils/chakra";
import React from "react";
import { prisma } from "@cubik/database";

const getProject = async (id: string) => {
  try {
    const res = await prisma.project.findFirst({
      where: {
        id: id,
      },
      include: {
        team: {
          include: {
            user: true,
          },
        },
      },
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
interface Props {
  params: {
    id: string;
  };
}
const EditProjectPage = async ({ params: { id } }: Props) => {
  const projectData = await getProject(id);
  return (
    <>
      <Container
        transition="all .25s ease"
        maxW="7xl"
        p={{ base: "1rem", md: "0" }}
        my={{ base: "2rem", md: "5rem", lg: "5rem", xl: "6rem" }}
        outline="none"
      >
        <Form
          projectId={id}
          ownerPubkey={projectData?.ownerPublickey || ""}
          _editorData={projectData?.longDescription || null}
          _imageURL={projectData?.logo || null}
          formState={{
            projectName: projectData?.name,
            category: JSON.parse(projectData?.industry as any) || [],
            description: projectData?.shortDescription,
            discord: projectData?.discordLink,
            email: projectData?.email,
            github: projectData?.githubLink,
            projectLink: projectData?.projectLink,
            tagline: projectData?.shortDescription,
            telegram: projectData?.telegramLink,
            twitter: projectData?.twitterHandle,
            team: projectData?.team.map((member) => {
              return {
                label: member.user.username || "",
                value: member.userId,
                icon: member.user.profilePicture || "",
              };
            }),
          }}
        />
      </Container>
    </>
  );
};

export default EditProjectPage;
