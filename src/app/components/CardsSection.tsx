import { Card, CardContent } from "@/components/ui/card";

export default function CardsSection() {
  return (
    <div className="overflow-x-scroll w-full flex space-x-6 py-20 px-6 text-left" style={{ fontFamily: 'DM Sans, sans-serif' }} >
      {/* First Card */}
      <Card className="min-w-[300px] border border-yellow-400 shadow-yellow-100 shadow-lg hover:shadow-xl p-5">
        <CardContent>
          <h3 className="text-xl">Circular Economy</h3>
          <p className="mt-2 text-sm text-gray-500">
            Encourages transactions within the Muslim community, supporting local businesses and fostering economic sustainability.
          </p>
        </CardContent>
      </Card>

      {/* Second Card */}
      <Card className="min-w-[300px] border border-blue-500 shadow-blue-100 shadow-lg hover:shadow-2xl  p-5">
        <CardContent>
          <h3 className="text-xl ">Advanced Matching Algorithms</h3>
          <p className="mt-2 text-sm text-gray-500">
            Utilizes technology to match users with jobs that align with their skills and experience.
          </p>
        </CardContent>
      </Card>

      {/* Third Card */}
      <Card className="min-w-[300px] border border-orange-500 shadow-orange-100 shadow-lg hover:shadow-2xl  p-5">
        <CardContent>
          <h3 className="text-xl ">Secure Payments</h3>
          <p className="mt-2 text-sm text-gray-500">
            Provides a reliable and transparent payment system, ensuring fair and timely compensation.
          </p>
        </CardContent>
      </Card>

      {/* Fourth Card */}
      <Card className="min-w-[300px] border border-purple-500 shadow-purple-100 shadow-lg hover:shadow-2xl  p-5">
        <CardContent>
          <h3 className="text-xl ">Comprehensive Support</h3>
          <p className="mt-2 text-sm text-gray-500">
            Offers skill development, certification assistance, language support, and community integration resources.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
