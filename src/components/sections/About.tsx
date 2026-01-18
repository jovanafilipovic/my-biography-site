import styled from "styled-components";
import { keyframes } from "styled-components";
import Button from "../atoms/Button";
import { useState } from "react";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Section = styled.section`
  animation: ${fadeIn} 0.6s ease-out;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #222;
`;

const Subtitle = styled.h3`
  font-size: 1.5rem;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  color: #555;
`;

const Text = styled.p`
  margin-bottom: 0.5rem;
  color: #333;
  line-height: 1.6;
`;

const Card = styled.div`
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
  margin-top: 1rem;
  justify-content: center;
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
    { src: "/images/cocktail.jpg", alt: "Cocktail" },
    { src: "/images/cookies.jpg", alt: "Cookies" },
    { src: "/images/easter.jpg", alt: "Easter" },
    { src: "/images/pancakes.jpg", alt: "Pancakes" },
    { src: "/images/pizza.jpg", alt: "Pizza" },
    { src: "/images/tapas.jpg", alt: "Tapas" },
    { src: "/images/flowers.jpg", alt: "Flowers" },
    { src: "/images/travel.jpg", alt: "Travel" },
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
      <Title>About me</Title>
      <Card>
        <Subtitle>Education</Subtitle>
        <Text>
          I completed my undergraduate studies at the Faculty of Organizational
          Sciences in Belgrade, majoring in Information Systems and
          Technologies. After that, I enrolled in the master's program at the
          same faculty, specializing in E-Business.
        </Text>
      </Card>
      <Card>
        <Subtitle>Career</Subtitle>
        <Text>
          My first job was at Endava, where I started as an intern in March 2022
          and received a full-time employment contract after three months. So
          far, my career has focused on frontend development using React,
          TypeScript, Next.js, and modern CSS frameworks. Demonstrates advanced
          proficiency in tools such as Git, GitHub/GitLab, Jest, Storybook, and
          CI/CD pipelines.
        </Text>
        <Button onClick={handleDownloadCV}>My Resume</Button>
      </Card>
      <Card>
        <Subtitle>Interests & Hobbies</Subtitle>
        <Text>
          Besides work, I enjoy reading books, traveling extensively, engaging
          in creative activities, and cooking, among other things.
        </Text>
        <Button onClick={toggleGallery}>
          {showGallery ? "Hide" : "See more"}
        </Button>
        {showGallery && (
          <Gallery>
            {galleryImages.map((img, index) => (
              <GalleryImage key={index} src={img.src} alt={img.alt} />
            ))}
          </Gallery>
        )}
      </Card>
    </Section>
  );
};

export default About;
