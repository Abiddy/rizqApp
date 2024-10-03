// onboarding/layout.tsx
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";

// interface OnboardingLayoutProps {
//   children: React.ReactNode;
//   currentStep: number;
// }

const steps = [
  { label: "Personal Info", path: "/onboarding/personal-info" },
  { label: "Professional Info", path: "/onboarding/professional-info" },
];

const currentStep = 1

export default function OnboardingLayout({  children,
}: {
  children: React.ReactNode}) {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/forms-light.png"
          width={1280}
          height={791}
          alt="Forms"
          className="block dark:hidden"
        />
        <Image
          src="/examples/forms-dark.png"
          width={1280}
          height={791}
          alt="Forms"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden space-y-6 p-10 pb-16 md:block">
        <div className="space-y-0.5">
          <h2 className="text-2xl font-bold tracking-tight">Create a Rizq Seller Profile</h2>
          <p className="text-muted-foreground">
            Manage your account settings and set e-mail preferences.
          </p>
        </div>
        <Separator className="my-6" />

        {/* Breadcrumb */}
        <Breadcrumb>
          <BreadcrumbList>
            {steps.map((step, index) => (
              <React.Fragment key={step.label}>
                <BreadcrumbItem>
                  {currentStep === index + 1 ? (
                    <BreadcrumbPage>{step.label}</BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={step.path}>{step.label}</BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < steps.length - 1 && <BreadcrumbSeparator />} {/* Separator between items */}
              </React.Fragment>
            ))}
          </BreadcrumbList>
        </Breadcrumb>

        <Separator className="my-6" />

        <div className="flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0">
          <div className="flex-1 lg:max-w-2xl">{children}</div>
        </div>
      </div>
    </>
  );
}
