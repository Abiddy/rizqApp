// // components/OccupationField.tsx

// import { useFieldArray, useFormContext } from "react-hook-form";
// import { Input } from "@/components/ui/input";
// import {
//   FormField,
//   FormItem,
//   FormLabel,
//   FormControl,
//   FormMessage,
// } from "@/components/ui/form";
// import {
//   Select,
//   SelectTrigger,
//   SelectContent,
//   SelectItem,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "@/components/ui/button";

// // Dummy occupations and skills (replace with actual data)
// const occupations = [
//   { name: "Software Engineer", skills: ["Frontend", "Backend", "DevOps"] },
//   { name: "Digital Marketer", skills: ["SEO", "Email Marketing", "Content"] },
//   // Add more occupations as needed
// ];

// const OccupationField = ({ index }: { index: number }) => {
//   const { control, register, setValue } = useFormContext();
  
//   // Access fieldArray
//   const {
//     fields: skillFields,
//     append: appendSkill,
//     remove: removeSkill,
//   } = useFieldArray({
//     name: `occupations.${index}.skills`,
//     control,
//   });

//   return (
//     <div className="space-y-6">
//       {/* Occupation */}
//       <FormField
//         control={control}
//         name={`occupations.${index}.occupation`}
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Occupation</FormLabel>
//             <Select
//               onValueChange={(value) => {
//                 field.onChange(value);
//                 // Automatically set skills when occupation is selected
//                 const selectedOccupation = occupations.find((occ) => occ.name === value);
//                 setValue(`occupations.${index}.skills`, selectedOccupation?.skills || []);
//               }}
//               defaultValue={field.value}
//             >
//               <FormControl>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Select occupation" />
//                 </SelectTrigger>
//               </FormControl>
//               <SelectContent>
//                 {occupations.map((occupation) => (
//                   <SelectItem key={occupation.name} value={occupation.name}>
//                     {occupation.name}
//                   </SelectItem>
//                 ))}
//               </SelectContent>
//             </Select>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Experience in Years */}
//       <FormField
//         control={control}
//         name={`occupations.${index}.experience`}
//         render={({ field }) => (
//           <FormItem>
//             <FormLabel>Experience (Years)</FormLabel>
//             <FormControl>
//               <Input
//                 type="number"
//                 placeholder="Experience in Years"
//                 {...field}
//                 value={field.value || ""}
//               />
//             </FormControl>
//             <FormMessage />
//           </FormItem>
//         )}
//       />

//       {/* Skills */}
//       <div>
//         <FormLabel>Skills</FormLabel>
//         <div className="space-y-2">
//           {skillFields.map((skill, skillIndex) => (
//             <div key={skill.id} className="flex items-center space-x-2">
//               <Input {...register(`occupations.${index}.skills.${skillIndex}`)} value={skill.value} />
//               <Button type="button" onClick={() => removeSkill(skillIndex)}>
//                 Remove
//               </Button>
//             </div>
//           ))}
//           <Button type="button" onClick={() => appendSkill({ value: "" })}>
//             Add Skill
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OccupationField;
