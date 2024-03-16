import React from 'react';

const Certifications = () => {
  const certifications = [
    { name: "Data Analysis with R Programming", url: "https://coursera.org/share/57905ce19219973784311ca6d4ea91a5" },
    { name: "The Structured Query Language (SQL)", url: "https://coursera.org/share/b317c241dd43350bfbfae7dd1fd2ca43" },
    { name: "Object Oriented Programming in Java", url: "https://coursera.org/share/bbd72e76fa99de178082de91b69f8522" },
    { name: "SQL for Data Science", url: "https://coursera.org/share/5284cd4a893b1051c1ed1b4dd92802bd" }
  ];

  return (
    <div className="max-w-[1200px] mx-auto p-5" id='certifications'>
      <div className="pb-8">
        <p className="text-4xl font-bold mb-4 primary-color">Certifications</p>
        <p className="text-gray-200 text-lg">
          Highlighting certifications that validate my expertise:
        </p>
      </div>

      <div className="space-y-5">
        {certifications.map((certification, index) => (
          <div key={index} className="bg-gray-800 rounded-lg p-6 border-l-4 border-primary-color shadow-lg">
            <a href={certification.url} target="_blank" rel="noopener noreferrer">
              <h3 className="text-xl font-semibold text-white">{certification.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Certifications;
