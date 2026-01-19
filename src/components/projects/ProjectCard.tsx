import styled from "styled-components";
import type { Project } from "../../types";

const Card = styled.article`
  background: #fafafa;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  }
`;

const Subtitle = styled.div`
  font-size: 1.1rem;
  font-weight: bold;
  color: #555;
`;

const Label = styled.span`
  font-size: 1rem;
  color: #555;
  margin: 0;
  font-weight: bold;
`;

const Description = styled.p`
  color: #444;
  line-height: 1.6;
  text-align: left;
`;

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding: 0;
  list-style: none;
`;

const Tech = styled.li`
  background: #eaeaea;
  border-radius: 999px;
  padding: 0.3rem 0.7rem;
  font-size: 0.8rem;
`;

const List = styled.ul`
  padding-left: 1.2rem;
  color: #333;
  text-align: left;
`;

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <Card>
      <Subtitle>{project.title}</Subtitle>
      <Description>{project.description}</Description>
      <Label>Tech Stack</Label>
      <TechStack>
        {project.techStack.map((tech) => (
          <Tech key={tech}>{tech}</Tech>
        ))}
      </TechStack>
      <Label>Tasks</Label>
      <List>
        {project.tasks.map((task) => (
          <li key={task}>{task}</li>
        ))}
      </List>
      <Label>Achievements</Label>
      <List>
        {project.achievements.map((achievement) => (
          <li key={achievement}>{achievement}</li>
        ))}
      </List>
    </Card>
  );
};

export default ProjectCard;
