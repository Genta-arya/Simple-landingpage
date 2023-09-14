import React from "react";
import "../../../Style/Content.css";
import ProductLayout from "./Product";
function Content() {
  const leftColumnContent = [
    "Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor, or chemically by means of a light-sensitive material such as photographic film. It encompasses various processes and techniques used to capture and manipulate images, including digital photography, analog photography, and alternative processes.",
    "A photograph is a picture created with a camera. They are made by exposing photographic film or an electronic photosensor (in digital cameras) to light or other forms of radiant energy, such as X-rays, gamma rays, or cosmic rays. The result is a visual representation of the subject being photographed, often in great detail and clarity.",
    "Photography is employed in many fields of science, manufacturing (e.g., photolithography), and business, as well as its more direct uses for art, film and video production, recreational purposes, hobby, and mass communication. It has had a profound impact on society and culture, shaping the way we document and perceive the world around us.",
  ];

  const rightColumnContent = [
    "Photography has many uses for business, science, art, and pleasure. It is often used in science to study and identify objects, places, and creatures that are otherwise hard to study. Scientists use photography in fields such as astronomy, biology, and geology to capture images of distant stars, microscopic organisms, and geological formations.",
    "In the art world, photography has evolved as an art form, and artists are using it to create beautiful images and tell stories. It's a powerful medium for capturing emotions and moments in time. Many photographers use their skills to convey powerful messages, evoke emotions, or simply create visually stunning compositions. Whether it's fine art photography, photojournalism, or commercial photography, the medium offers endless creative possibilities.",
  ];

  return (
    <section id="photographyInfo" className="py-12">
      <div className="container mx-auto animate-fade-in bg-white p-12 rounded-lg drop-shadow-2xl border-2 border-gray-500 ">
        <h2 className="text-3xl font-semibold text-center mb-8 bg-black rounded-xl text-white p-2 rounded-full drop-shadow-sm ">
          Photography
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 ">
          <div className="prose lg:prose-xl mx-auto text-justify">
            {leftColumnContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="prose lg:prose-xl mx-auto text-justify">
            {rightColumnContent.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </div>
        <ProductLayout />
      </div>
    </section>
  );
}

export default Content;
