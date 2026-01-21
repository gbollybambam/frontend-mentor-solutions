import plusIcon from '../assets/images/icon-plus.svg';
import minusIcon from '../assets/images/icon-minus.svg';

function AccordionItem({ question, answer, isOpen, onToggle }) {
    return (
    <div className="
      py-5
      border-fem-light-purple
      last:border-b-0
    ">

      <button 
        onClick={onToggle} 
        className="
          w-full 
          flex 
          justify-between 
          items-center
          gap-4              
          text-left
        "
      >
        <h2 className="
          text-lg
          font-semibold
          text-fem-dark-purple
          hover:text-fem-grayish-purple
          focus:text-fem-grayish-purple
          focus:outline-none
        ">
          {question}
        </h2>

        {isOpen && <img src={minusIcon} alt="Hide answer" />}
        {!isOpen && <img src={plusIcon} alt="Show answer" />}

      </button>
      {isOpen && (
        <p className="
          text-base
          text-fem-grayish-purple
          font-normal 
          mt-4 
          leading-relaxed 
        ">

          {answer}
        </p>
      )}
    </div>
  );
}

export default AccordionItem;