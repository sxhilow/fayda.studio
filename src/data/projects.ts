import Do4You from "@images/projects/do4you.png"
import EduPath from "@images/projects/edupath.png"
import ApexSolar from "@images/projects/apexsolar.png"

export type ProjectTag = "Branding" | "Design" | "Development" | "Launch";

type ProjectProps = {
    title: string,
    url: string,
    image: ImageMetadata,
    tags?: ProjectTag[],
    alt: string;
}

export const projects: ProjectProps[] = [
    {
        title: "do4you — Visa Form-Filling Service",
        url: "https://do4you.co.za",
        image: Do4You,
        tags: ["Branding", "Design", "Development", "Launch"],
        alt: "do4you.co.za",
    },
    {
        title: "Apex Solar —  Solar Energy Solutions",
        url: "https://figma.com", // TODO
        image: ApexSolar,
        tags: ["Branding", "Design"],
        alt: "Apex Solar Solutions",
    },
    {
        title: "EduPath — Professional Career Coaching",
        url: "https://figma.com",
        image: EduPath,
        tags: ["Branding", "Design"],
        alt: "EduPath",
    },
]