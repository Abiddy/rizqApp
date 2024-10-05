const Footer = () => {
    return (
      <footer style={{ fontFamily: 'DM Sans, sans-serif' }} className="bg-gray-900 text-white py-8 px-6">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* About Section */}
          <div>
            <p className="text-sm text-gray-400">
              Rizq is a platform dedicated to empowering communities by providing a freelancing ecosystem that supports Muslims, refugees, immigrants, and handymen. We aim to foster growth and collaboration within our community, one gig at a time.
            </p>
          </div>
  
          {/* Contact and Socials */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <p className="text-sm text-gray-400 mb-4">
              Have questions or feedback? Feel free to reach out to us.
            </p>
            <p className="text-sm">Email: <a href="mailto:info@rizq.com" className="text-blue-500 hover:underline">info@rizq.com</a></p>
            
            {/* Social Media Icons */}
            <div className="flex justify-center space-x-4 mt-4 text-4xl">
              {/* <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-linkedin"></i></a> */}
              <a href="https://www.instagram.com/rizq_freelance/" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
  
        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-500">
          <p>&copy; 2024 Rizq. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  