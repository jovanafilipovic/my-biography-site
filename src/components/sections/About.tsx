import styled from "styled-components";
import { keyframes } from "styled-components";
import Button from "../common/Button";
import { useState } from "react";
import Projects from "./Projects";
import { SectionTitle } from "../common/Headings";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  animation: ${fadeIn} 0.8s ease-out forwards;
  opacity: 0;
`;

const Text = styled.p`
  margin-bottom: 0.5rem;
  color: #333;
  line-height: 1.6;
`;

const SectionCard = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  background-color: #fafafa;
  border: 1px solid #eaeaea;
  margin: 30px 0;
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  justify-content: center;
  max-width: 780px;
  margin: 1rem auto;
`;

const GalleryImage = styled.img`
  width: 250px;
  height: 300px;
  object-fit: cover;
  border-radius: 8px;
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }
`;

const About = () => {
  const [showGallery, setShowGallery] = useState(false);

  const galleryImages = [
    { src: "/images/bouqet.jpg", alt: "Bouqet" },
    { src: "/images/cookies.jpg", alt: "Cookies" },
    { src: "/images/easter.jpg", alt: "Easter" },
    { src: "/images/pancakes.jpg", alt: "Pancakes" },
    { src: "/images/tapas.jpg", alt: "Tapas" },
    { src: "/images/flowers.jpg", alt: "Flowers" },
  ];

  const toggleGallery = () => {
    setShowGallery((prev) => !prev);
  };

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "../../../public/Jovana_Filipovic_resume.pdf";
    link.download = "Jovana_Filipovic_resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Section>
      <SectionCard>
        <SectionTitle>Education</SectionTitle>
        <Text>
          I earned my undergraduate degree in Information Systems and
          Technologies at the Faculty of Organizational Sciences in Belgrade,
          where I built a strong technical foundation in software development,
          systems analysis, and IT project management. Motivated by my interest
          in applying technology to business challenges, I continued with a
          master's in E-Business, focusing on digital strategies, e-commerce
          optimization, and leveraging technology to create impactful business
          solutions.
        </Text>
      </SectionCard>
      <SectionCard>
        <SectionTitle>Career</SectionTitle>
        <Text>
          I began my professional journey at Endava as an intern in March 2022,
          and quickly transitioned to a full-time frontend developer position
          after three months. Since then, I have focused on frontend development
          using React, TypeScript, Next.js, and modern CSS frameworks,
          delivering polished, responsive, and user-friendly interfaces.
          Throughout my career, I have gained advanced proficiency in tools such
          as Git, GitHub/GitLab, Jest, Storybook, and CI/CD pipelines,
          consistently contributing to high-quality codebases and efficient
          development workflows.
        </Text>
        <Projects />
        <Text>You can also take a look at my resume</Text>
        <Button onClick={handleDownloadCV}>My Resume</Button>
      </SectionCard>
      <SectionCard>
        <SectionTitle>Interests & Hobbies</SectionTitle>
        <Text>
          Besides my professional work, I enjoy activities that allow me to
          express creativity and explore new perspectives. I love reading books,
          traveling, and experimenting with creative projects, whether it’s
          cooking new recipes, creating floral arrangements, or drawing. These
          interests help me stay inspired and curious. Below, you can find a
          small gallery showcasing some of these creative moments — from dishes
          I’ve prepared, to handmade bouquets, travel memories, and personal
          artwork.
        </Text>
        <Button onClick={toggleGallery}>
          {showGallery ? "Hide" : "View Gallery"}
        </Button>
        {showGallery && (
          <Gallery>
            {galleryImages.map((img, index) => (
              <GalleryImage key={index} src={img.src} alt={img.alt} />
            ))}
          </Gallery>
        )}
      </SectionCard>
    </Section>
  );
};

export default About;
