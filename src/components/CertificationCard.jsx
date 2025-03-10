import React from 'react';
import { ExternalLink } from "lucide-react";
import styled from 'styled-components';

const CertificationCard = ({ cert }) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg" />
        <div className="blob" />
        <div className="content">
          <h3 className="text-xl font-semibold">{cert.title}</h3>
          <p className="text-[#B1C98D]">{cert.issuer}</p>
          <p className="text-sm text-gray-500">{cert.date}</p>
          <p className="mt-2 text-sm">{cert.description}</p>
          <a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center text-blue-500 hover:underline"
          >
            View Certificate <ExternalLink className="ml-1 w-4 h-4" />
          </a>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    width: 250px;
    height: 300px;
    border-radius: 14px;
    z-index: 1111;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 2px 2px 6px #bebebe, -2px -2px 6px #B1C98D;
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 240px;
    height: 290px;
    z-index: 2;
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1;
    top: 50%;
    left: 50%;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #B1C98D;
    opacity: 1;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  .content {
    position: relative;
    z-index: 3;
    padding: 16px;
    text-align: center;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default CertificationCard;
