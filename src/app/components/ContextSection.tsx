import '../components/components.css';

export default function ContextSection() {
  return (
<div
  style={{
     fontFamily: 'DM Sans, sans-serif',
    paddingLeft: '50px',
    paddingRight: '50px',
    maxWidth: '800px',
    margin: '0 auto', // Center the text content
  }}
  className="text-center lg:max-w-xl lg:px-30 lg:text-center"
>
  {/* Adjust the text size for larger screens using Tailwind responsive classes */}
  <h2 className="text-5xl lg:text-6xl mb-10 lg:text-center">
    America is home to over 3.85 million Muslims...
  </h2>

  <h4 className="text-xl lg:text-2xl mb-6">
    ...representing a diverse range of cultures, ethnicities, and traditions. This population contributes significantly to the fabric of American society including
  </h4>

  {/* Image Section: Overlapping and Hovering Images */}
  <div className="overflow-x-scroll relative overflow-hidden mb-6" style={{ height: "300px" }}>
  <div className="image-container flex justify-start items-center space-x-4">
    <img
      src="/13.png"
      alt="Image 1"
      className="hover-image w-3 rounded-lg lg:w-30"
    />
    <img
      src="/12.png"
      alt="Image 3"
      className="hover-image w-30 rounded-lg lg:w-30"
    />
    <img
      src="/11.png"
      alt="Image 4"
      className="hover-image w-30 rounded-lg lg:w-30"
    />
        <img
      src="/10.png"
      alt="Image 5"
      className="hover-image w-30 rounded-lg lg:w-30"
    />
  </div>
  </div>


  <h2 className="text-5xl lg:text-5xl mt-10 mb-4">
    business, technology, art, cuisine, and public service
  </h2>

  <h2 className="text-5xl lg:text-5xl mt-10 mb-4">
    The potential is HUGE
  </h2>

  <p className="text-xl lg:text-2xl">
    Rizq is on a mission to create a platform that helps unite our community
    <span className="font-bold"> socially</span> and
    <span className="font-bold"> economically</span>
  </p>
</div>

  );
}
