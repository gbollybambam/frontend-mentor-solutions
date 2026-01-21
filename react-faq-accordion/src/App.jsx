import { useState } from 'react';
import starIcon from './assets/images/icon-star.svg';

import AccordionItem from './components/AccordionItem';

const faqs = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building."
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels."
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects you build in your portfolio. It's an excellent way to showcase your skills to potential employers!"
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a helpful community of developers ready to support you."
  }
];

function App() {

  const [openItemIndex, setOpenItemIndex] = useState(1);

  const handleToggle = (index) => {
    if (openItemIndex === index) {
      setOpenItemIndex(null)
    } else {
      setOpenItemIndex(index);
    }
  };

  return (
    <main className="relative flex min-h-screen items-center justify-center bg-fem-light-purple">
      
      <div
        className="absolute top-0 z-0 h-56 w-full bg-cover bg-no-repeat 
                   bg-[url('./assets/images/background-pattern-mobile.svg')] 
                   md:bg-[url('./assets/images/background-pattern-desktop.svg')]"
      ></div>

      <section className="relative z-10 mx-6 w-full rounded-xl bg-fem-white p-6 shadow-xl md:max-w-2xl md:p-10">
        
        <div className="
          flex          
          items-center  
          gap-6
          mb-6
        ">
          <img src={starIcon} alt="" />
          <h1 className="
            text-3xl         
            md:text-5xl             
            font-bold                
            text-fem-dark-purple    
          ">
            FAQs
          </h1>
        </div>


        <div className="faq-list">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItemIndex === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;