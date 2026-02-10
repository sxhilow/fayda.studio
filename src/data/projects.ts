import Do4You from "@images/projects/do4you.webp"
import EduPath from "@images/projects/edupath.webp"
import ApexSolar from "@images/projects/apexsolar.webp"

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
        url: "https://www.figma.com/proto/C5TlHItuv59zzULG9ZTgz6/Projects?page-id=0%3A1&node-id=232-111&p=f&viewport=594%2C222%2C0.07&t=yPDxVwVXNw8xYy7R-1&scaling=min-zoom&content-scaling=fixed",
        image: ApexSolar,
        tags: ["Branding", "Design"],
        alt: "Apex Solar Solutions",
    },
    {
        title: "EduPath — Professional Career Coaching",
        url: "https://www.figma.com/proto/C5TlHItuv59zzULG9ZTgz6/Projects?page-id=0%3A1&node-id=232-111&p=f&viewport=594%2C222%2C0.07&t=yPDxVwVXNw8xYy7R-1&scaling=min-zoom&content-scaling=fixed",
        image: EduPath,
        tags: ["Branding", "Design"],
        alt: "EduPath",
    },
]