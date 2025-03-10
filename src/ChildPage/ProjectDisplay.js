import React, { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Slider from 'react-slick';
import { ProjectList } from '../Helpers/ProjectList';
import GitHubIcon from '@material-ui/icons/GitHub';
import '../Styles/ProjectDisplay.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false, 
    speed: 500,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  useEffect(() => {
    if (!project || !project.image) return;

    const currentMedia = project.image[currentSlide];
    let timer;

    if (currentMedia.type === 'image') {
      timer = setTimeout(() => {
        sliderRef.current.slickNext();
      }, 3000);
    } else if (currentMedia.type === 'video') {
      const videoElement = document.getElementById(`video-${currentSlide}`);
      if (videoElement) {
        videoElement.play();
        videoElement.onended = () => {
          sliderRef.current.slickNext();
        };
      }
    }

    return () => {
      clearTimeout(timer);
      const previousVideoElement = document.getElementById(`video-${currentSlide}`);
      if (previousVideoElement) {
        previousVideoElement.pause();
        previousVideoElement.currentTime = 0;
      }
    };
  }, [currentSlide, project]);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="project">
      <h1>{project.name}</h1>
      <div className="project-content">
        <div className="slide-container">
          <Slider ref={sliderRef} {...settings} className="slick-container">
            {project.image.map((media, index) => (
              <div key={index} className="each-slide">
                {media.type === 'image' ? (
                  <img
                    src={media.src}
                    alt={`Media ${index + 1}`}
                    className="media-item"
                  />
                ) : media.type === 'video' ? (
                  <video
                    id={`video-${index}`}
                    className="media-item"
                    autoPlay
                    muted
                    playsInline
                    controls
                  >
                    <source src={media.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                ) : (
                  <p>Unsupported media type.</p>
                )}
              </div>
            ))}
          </Slider>
        </div>
        <div className="project-info">
          <p>
            <b>Title:</b> {project.name}
          </p>
          <p>
            <b>Description:</b> {project.description}
          </p>
          <p>
            <b>Tech Stack:</b> {project.skills}
          </p>
          {/* <p>
            <b>Challenges and Solutions:</b> {project.challenges}
          </p> */}
          <p>
            <b>
              Source Code:{' '}
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <GitHubIcon />
              </a>
            </b>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProjectDisplay;
