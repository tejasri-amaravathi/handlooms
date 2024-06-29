import React from "react";
import "./faq.css";

const FAQ = () => {
  const data = [
    {
      question: "1. WHY HANDLOOM IS IMPORTANT?",
      answer:
        "A.It is an important source of livelihood for people in the country. The textiles and handloom sector in India is the second-largest source of employment to people, after agriculture. It acts as a key to women empowerment as over 70% of handloom weavers and allied workers are women.",
    },
    {
      question: "2. WHAT CAN INDIVIDUALS DO TO CONTRIBUTE TO HANDLOOMS?",
      answer:
        "A.For instance, it constitutes 14% of industrial production, 4% of GDP, and makes up 13% of export earnings in India. Moreover, various traditional handloom fabrics, such as ikat, contribute significantly to the export market, attracting consumers worldwide.",
    },
    {
      question: "3. WHAT ARE THE AWARENESS OF HANDLOOM?",
      answer:
        "A. Handloom allows the weaver to have total control of the creative process which encourages them to explore new ideas and come up with innovative weaving patterns and designs..",
    },
    {
      question: "4. WHAT IS THE IMPORTANCE OF HANDLOOMS?",
      answer:
        "A. Handloom sector is a symbol of the country's glorious cultural heritage and an important source of livelihood in the country. .",
    },
    {
      question: "5. WHAT ARE THE BENEFITS OF RECYCLING FABRICS?",
      answer:
        "A.Conserves Resources. ... Reduce Greenhouse Gas Emissions. ... Supports Sustainable Fashion Practices. ... Social and Economic Benefits. ... Join the Movement: Clothes Bin Franchise.",
    },
  ];

  const getFAQs = () => {
    return data.map((faq) => (
      <div className="faq">
        <h4 className="faq-question">{faq.question}</h4>
        <p className="faq-answer">{faq.answer}</p>
      </div>
    ));
  };

  return (
    <div>
      <h2>FAQ's</h2>
      {getFAQs()}
    </div>
  );
};

export default FAQ;
