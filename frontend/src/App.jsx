import { useState } from "react";
import { FaCopy } from "react-icons/fa";

import "./App.css";

function App() {
  const [steps, setSteps] = useState([
    {
      title: "Step-1 :Copy the below written Url ",
      urlSnippet: "http://kuchhkuch/.com",
      isCopied: false,
    },
    {
      title: "Step-2 :Now sit somewhere in quite and self introspect why are you doing this?",
      urlSnippet: "",
      isCopied: false,
    },
    {
      title: "Step-3 :Ahh leave anywhy it does not matter let just watch youtube",
      urlSnippet: "http://yt/.com",
      isCopied: false,
    },
  ]);

  return (
    <>
 
      <div className="flex flex-col gap-4">

        <h1 className="text-3xl font-serif">Get Hacked !!!</h1>
        
        <div>
          <ul>
            {steps.map((step, index) => (
              <li key={index}>
                <div  className="flex flex-col gap-3">
                  <div className="flex items-start"> {step.title}</div>

                  <div >
                    {step.urlSnippet && (
                      <div className="flex rounded-lg bg-gray-200 w-full p-4">
                        <div className="flex flex-1">{step.urlSnippet}</div>
                        <div className="flex items-center">
                        <FaCopy />
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default App;
