import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div >
      <Card className="max-h-49 max-w-49 m-8 bg-white text-black">
        <CardHeader>
          <CardTitle>Rizq is in recruitment phase!</CardTitle>
          <CardDescription>We are finding the best freelancers and servicemen to join our community!</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center">
        <img src="/search.png" className="max-h-48 max-h-48" alt="Gig Image" />
        </CardContent>

      </Card>
      <Card className="max-h-49 max-w-49 m-8">
  <CardHeader>
    <CardTitle>Become a Rizq Seller in 2 easy steps!</CardTitle>
    <CardDescription className="mb-4">Showcase your services to potential buyers</CardDescription>
  </CardHeader>

  <CardContent className="flex justify-center mb-6">
    <img src="/gigImage.png" className="max-h-48" alt="Gig Image" />
  </CardContent>

  <CardFooter className="flex flex-col items-start space-y-4">
    <div className="flex items-center space-x-2">
      <Badge variant="outline">1</Badge>
      <h1 className="text-gray-700">Create a Seller Profile</h1>
    </div>

    <div className="flex items-center space-x-2 mb-5">
      <Badge variant="outline">2</Badge>
      <h1 className="text-gray-700">Post a gig!</h1>
    </div>

    <Button className="w-full bg-blue-500 text-white mt-20">Get Started</Button>
  </CardFooter>
</Card>

</div>
  );
  
}
