import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  export function FAQAccordion() {
    return (
      <div style={{ fontFamily: 'DM Sans, sans-serif' }} className="faq-container mx-auto max-w-lg text-left py-4">
        <h2 className="text-2xl mb-8">FAQ</h2>
  
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is the purpose of this platform?</AccordionTrigger>
            <AccordionContent>
              <p className="text-base font-light">
         
This platform is designed to connect freelancers, refugees, immigrants, and handymen within Muslim communities, providing opportunities for them to offer their skills and services while promoting economic sustainability within the community.
              </p>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-2">
            <AccordionTrigger>Is this platform exclusive to Muslims?
</AccordionTrigger>
            <AccordionContent>
              <p className="text-base font-light">
              No, while the platform focuses on empowering Muslim freelancers and businesses, anyone can join as a freelancer or client. Our goal is to support communities by providing a space where talent and opportunity can meet.
              </p>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-3">
            <AccordionTrigger>How does the platform work?</AccordionTrigger>
            <AccordionContent>
              <p className="text-base font-light">
   
Clients post jobs or projects, and freelancers apply or get matched through our advanced algorithms. Once a job is completed, payment is securely processed through the platform.
              </p>
            </AccordionContent>
          </AccordionItem>
  
          <AccordionItem value="item-4">
            <AccordionTrigger>What services does Rizq provide?</AccordionTrigger>
            <AccordionContent>
              <p className="text-base font-light">
              You can find both physical and digital services on our platform. Physical work includes tasks such as handyman services, home repairs, cleaning, and more. On the digital side, services range from web development, graphic design, content creation, business consultancy, and technical support. The platform is designed to cater to a wide variety of skills, ensuring that clients can find the right talent for their specific needs.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>How do we support refugees and immigrants?</AccordionTrigger>
            <AccordionContent>
              <p className="text-base font-light">
      
Our platform provides a unique opportunity for refugees and immigrants to showcase their skills and gain work experience, helping them integrate into the economy while receiving support from their local community.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    )
  }
  