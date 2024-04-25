import React from 'react';

const ContactForm2 = ({setServices}) => {
  const handleServiceClick = (serviceName) => {
    setServices((prevServices) => [...prevServices, serviceName]);
  };
    return (
        <div>
          <h1 className="py-[16px] text-[16px]">
            Services You Need
            <span className="text-[#98A2B3]">
              (You can choose multiple){" "}
            </span>{" "}
          </h1>
          <div className="flex flex-row flex-wrap gap-4 text-[15px]">
            <a
              className=" text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("Mobile Development")}
            >
              Mobile Development
            </a>
            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("Software Development")}
            >
              Software Development
            </h1>
            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("API Intregation")}
            >
              API Intregation
            </h1>
            <h1
              className="text-center  bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("SQA Solution")}
            >
              SQA Solution
            </h1>
            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("Apps Design")}
            >
              Apps Design
            </h1>
            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("Digital Marketing")}
            >
              Digital Marketing
            </h1>
            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("Web Development")}
            >
              Web Development
            </h1>
            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("Web UX/UI Desing")}
            >
              Web UX/UI Desing
            </h1>
            <h1
              className="text-center bg-[#F2F4F7] w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]"
              onClick={() => handleServiceClick("Custom Service")}
            >
              Custom Service
            </h1>
          </div>
        </div>
    );
};

export default ContactForm2;

// import React, { useState } from 'react';

// const ContactForm2 = ({ setServices }) => {
//   const [selectedServices, setSelectedServices] = useState([]);

//   const handleServiceClick = (serviceName) => {
//     const isSelected = selectedServices.includes(serviceName);
//     if (isSelected) {
//       setSelectedServices(prevSelectedServices =>
//         prevSelectedServices.filter(service => service !== serviceName)
//       );
//     } else {
//       setSelectedServices(prevSelectedServices => [...prevSelectedServices, serviceName]);
//     }
//   };

//   return (
//     <div>
//       <h1 className="py-[16px] text-[16px]">
//         Services You Need
//         <span className="text-[#98A2B3]">
//           (You can choose multiple){" "}
//         </span>{" "}
//       </h1>
//       <div className="flex flex-row flex-wrap gap-4 text-[15px]">
//         <div
//           className={`text-center bg-${selectedServices.includes("Mobile Development") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("Mobile Development")}
//         >
//           <h1>Mobile Development</h1>
//         </div>
//         <div
//           className={`text-center bg-${selectedServices.includes("Software Development") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("Software Development")}
//         >
//           <h1>Software Development</h1>
//         </div>

//         <div
//           className={`text-center bg-${selectedServices.includes("API Intregation") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("API Intregation")}
//         >
//           <h1>API Intregation</h1>
//         </div>

//         <div
//           className={`text-center bg-${selectedServices.includes("SQA Solution") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("SQA Solution")}
//         >
//           <h1>SQA Solution</h1>
//         </div>

//         <div
//           className={`text-center bg-${selectedServices.includes("Apps Design") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("Apps Design")}
//         >
//           <h1> Apps Design</h1>
//         </div>

//         <div
//           className={`text-center bg-${selectedServices.includes("Digital Marketing") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("Digital Marketing")}
//         >
//           <h1>Digital Marketing</h1>
//         </div>

//         <div
//           className={`text-center bg-${selectedServices.includes("Web Development") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("Web Development")}
//         >
//           <h1>Web Development</h1>
//         </div>

//         <div
//           className={`text-center bg-${selectedServices.includes("Web UX/UI Desing") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("Web UX/UI Desing")}
//         >
//           <h1>Web UX/UI Desing</h1>
//         </div>

//         <div
//           className={`text-center bg-${selectedServices.includes("Custom Service") ? "[#13AF88]" : "[#F2F4F7]"} w-2/5 p-[8px] border border-[#D2D6DB] rounded-md lg:w-[20%] lg:text-[10px]`}
//           onClick={() => handleServiceClick("Custom Service")}
//         >
//           <h1>Custom Service</h1>
//         </div>


//       </div>
//     </div>
//   );
// };

// export default ContactForm2;


