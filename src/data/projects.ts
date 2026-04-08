import Do4You from "@images/case-study/do4you/do4you.png"
import EduPath from "@images/case-study/concepts/edupath.webp"
import ApexSolar from "@images/case-study/concepts/apexsolar.webp"
import GentleDentalCare from "@images/case-study/gentle-dental-care/gentle-dental-care.png"
import { getCollection, type CollectionEntry } from "astro:content";

export type ProjectTag = "Branding" | "Design" | "Development" | "Launch";

type ProjectProps = {
    title: string;
    url?: string;
    caseStudySlug?: string;
    image: ImageMetadata;
    tags?: ProjectTag[];
    alt: string;
    isConcept?: boolean
    isDraft?: boolean
}

export type EnrichedProjects = ProjectProps & { url: string }

export const getEnrichedProjects = async () : Promise<EnrichedProjects[]> => {
    const caseStudies: CollectionEntry<"case-studies">[] = await getCollection("case-studies");   

    return projects.map((project) => {
        const caseStudy = project.caseStudySlug ? caseStudies.find((cs) => cs.id === project.caseStudySlug) : null;

        return {
            ...project,
            url: caseStudy ? `/case-studies/${caseStudy.id}` : project.url ?? '#'
        };
    })
}

const FIGMA_CONCEPT_LINK = "https://www.figma.com/proto/C5TlHItuv59zzULG9ZTgz6/Projects?page-id=0%3A1&node-id=232-111&p=f&viewport=594%2C222%2C0.07&t=yPDxVwVXNw8xYy7R-1&scaling=min-zoom&content-scaling=fixed"

const projects: ProjectProps[] = [
    {
        title: "Gentle Dental Care — Anxiety-Free Dental Care",
        caseStudySlug: "gentle-dental-care",
        image: GentleDentalCare,
        tags: ["Branding", "Design", "Development", "Launch"],
        alt: "Gentle Dental Care"
    },
    {
        title: "do4you — Visa Form-Filling Service",
        caseStudySlug: "do4you",
        image: Do4You,
        tags: ["Branding", "Design", "Development", "Launch"],
        alt: "do4you.co.za",
        isDraft: false
    },
    {
        title: "Apex Solar —  Solar Energy Solutions",
        url: FIGMA_CONCEPT_LINK,
        image: ApexSolar,
        tags: ["Branding", "Design"],
        alt: "Apex Solar Solutions",
        isConcept: true
    },
    {
        title: "EduPath — Professional Career Coaching",
        url: FIGMA_CONCEPT_LINK,
        image: EduPath,
        tags: ["Branding", "Design"],
        alt: "EduPath",
        isConcept: true
    },
]