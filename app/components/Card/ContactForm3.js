import React from 'react';

const ContactForm3 = ({ setBudget}) => {
    const handleBudgetClick = (budget) => {
        setBudget(budget);
      };
    
    return (
        <div>
          <h1 className="py-[16px] text-[16px]">
            Your Budget <span className="text-[#98A2B3]">(optional) </span>
          </h1>
          <div className="flex flex-row flex-wrap gap-4 text-[15px]">
            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleBudgetClick("Less Than &gt; $5,00")}
            >
              Less Than &gt; $5,00
            </h1>

            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleBudgetClick("$5,00 - $1,000")}
            >
              $5,00 - $1,000
            </h1>

            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleBudgetClick("$1,001 - $1500")}
            >
              $1,001 - $1500
            </h1>

            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleBudgetClick("$1,001 - $2,000")}
            >
              $1,001 - $2,000
            </h1>
          </div>
        </div>
    );
};

export default ContactForm3;