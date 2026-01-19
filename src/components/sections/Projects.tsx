import styled from "styled-components";
import ProjectCard from "../projects/ProjectCard";
import type { Project } from "../../types";
import { SubSectionTitle } from "../common/Headings";

const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(135deg, #e0f7fa, #fffde7);
  padding: 1rem;
  border-radius: 12px;
`;

const projects: Project[] = [
  {
    id: "project-management-software",
    title: "Project Management Software",
    description:
      "The project followed an Agile development methodology with bi-weekly sprints. Regular sprint planning and review sessions were held, and demos were conducted at the end of each sprint to showcase completed features. Collaboration took place across cross-functional teams, including frontend, backend, QA, and product management. Tasks were tracked using Workfront, and code reviews were conducted via merge requests. The CI/CD pipeline enforced multiple quality gates, including test coverage analysis, type checking, ESLint, code formatting, and both unit and integration testing.",
    tasks: [
      "Designed and developed a responsive UI using ReactJS, TypeScript, and React Spectrum",
      "Integrated feature flags to manage rollout and maintain backward compatibility",
      "Migrating legacy JSP code to modern React components",
      "Wrote unit tests using Jest",
      "Collaborated closely with frontend and backend teams",
      "Managed version control and collaborative development using GitLab",
    ],
    achievements: [
      "Migrated necessary UI components from JSP to React as part of application modernization, ensuring seamless integration with existing APIs and backend systems",
      "Maintained up to 90% test coverage for automated tests across all completed work",
      "Created reusable React components to enhance code structure across the project",
      "Used feature flags to manage gradual rollout",
    ],
    techStack: [
      "React",
      "TypeScript",
      "React Spectrum",
      "Cypress",
      "Jest",
      "Feature Flags",
      "Gitlab",
    ],
  },
  {
    id: "secure-document-sharing-and-tracking",
    title: "Secure Document Sharing and Tracking",
    description:
      "The project followed an Agile methodology with daily communication sessions involving the client to clarify requirements, review progress, and explore potential solutions. Work was divided between the main application and the website.",
    tasks: [
      "Developed and maintained web features using React, TypeScript, and JavaScript",
      "Wrote unit tests using Jest",
      "Enforced code quality and style using ESLint",
      "Migrated website from WordPress (PHP) to Contentful, implementing the new stack with React and Next.js",
      "Developed a wide range of custom React components, documented and showcased using Storybook",
      "Supported the migration of app features from Ruby on Rails to React",
      "Used GitHub for version control and collaborative development",
    ],
    achievements: [
      "Frontend migration of the website to React and Next.js",
      "Creating and documenting reusable React components in Storybook",
      "Migrating app features from Ruby on Rails to React, improving UI performance",
      "Implementing responsive and accessible designs across devices and browsers",
      "Maintaining continuous communication with the client’s team",
    ],
    techStack: [
      "React",
      "TypeScript",
      "JavaScript (ES6)",
      "Jest",
      "ESLint",
      "GitHub",
    ],
  },
  {
    id: "web-conferencing",
    title: "Web Conferencing / Virtual Collaboration Application",
    description:
      "Work was organized through a shared task tracking system, where responsibilities were assigned and managed based on evolving priorities. The main focus was maintaining platform stability and enhancing user accessibility.",
    tasks: [
      "Resolved UI bugs and improved accessibility across the application",
      "Used JAWS screen reader to verify accessibility fixes and ensure compatibility with assistive tools",
      "Collaborated closely with QA and product teams to validate fixes and ensure alignment with accessibility standards and goals",
    ],
    achievements: [
      "Resolved a wide range of frontend bugs, reducing QA-reported UI issues by approximately 40%",
      "Improved platform accessibility by addressing keyboard navigation, screen reader compatibility (tested with JAWS), and ARIA attributes - contributing to alignment with WCAG 2.1 standards",
      "Increased accessibility test coverage across key user flows, enhancing usability for assistive technology users",
    ],
    techStack: ["React", "TypeScript", "React Spectrum", "GitHub"],
  },
];

const Projects = () => {
  return (
    <>
      <SubSectionTitle>Projects</SubSectionTitle>
      <ProjectsContainer>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </ProjectsContainer>
    </>
  );
};

export default Projects;
