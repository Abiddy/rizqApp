'use client'
import { useState } from 'react';
import { Progress } from "@/components/ui/progress";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Onboarding = () => {
  const [step, setStep] = useState(1);  // State for tracking current step
  const [fullName, setFullName] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [profilePicture, setProfilePicture] = useState('');
  const [description, setDescription] = useState('');
  const [languages, setLanguages] = useState([]);
  const [occupation, setOccupation] = useState('');
  const [skills, setSkills] = useState([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      fullName,
      displayName,
      profilePicture,
      description,
      languages,
      occupation,
      skills
    });
  };

  // Function to handle next step
  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  // Function to handle previous step
  const handlePrevious = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <div className="max-w-3xl mx-auto p-8">
      <Progress value={step === 1 ? 33 : step === 2 ? 66 : 100} className="h-2 bg-gray-200 rounded-full overflow-hidden mb-4">
        <div className="bg-green-500 h-full" style={{ width: `${step === 1 ? '33%' : step === 2 ? '66%' : '100%'}` }} />
      </Progress>

      <div className="flex items-center space-x-2 mb-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Personal Info</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="#">Professional Info</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbPage>Account Security</BreadcrumbPage>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <h1 className="text-2xl font-bold mb-4">Tell Us About You!</h1>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        {step === 1 && (
          <>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Full Name*</label>
              <input 
                type="text" 
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Display Name*</label>
              <input 
                type="text" 
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Profile Picture URL</label>
              <input 
                type="text" 
                value={profilePicture}
                onChange={(e) => setProfilePicture(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Description*</label>
              <textarea 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold"
            >
              Next
            </button>
          </>
        )}

        {step === 2 && (
          <>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Languages*</label>
              <input 
                type="text" 
                value={languages}
               
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Occupation*</label>
              <input 
                type="text" 
                value={occupation}
                onChange={(e) => setOccupation(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Skills*</label>
              <input 
                type="text" 
                value={skills}
             
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required 
              />
            </div>

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className="w-full bg-gray-400 hover:bg-gray-500 text-white px-4 py-3 rounded-lg font-semibold mr-4"
              >
                Previous
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-500 hover:bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold"
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-lg font-semibold mb-4">Account Security Section</h2>
            {/* You can add account security fields here */}

            <div className="flex justify-between">
              <button
                type="button"
                onClick={handlePrevious}
                className="w-full bg-gray-400 hover:bg-gray-500 text-white px-4 py-3 rounded-lg font-semibold mr-4"
              >
                Previous
              </button>

              <button
                type="submit"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold"
              >
                Submit
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default Onboarding;
