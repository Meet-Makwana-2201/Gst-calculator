export default function Contact() {
    return (
      <div>
        <h2 className="text-2xl mb-4">Contact Us</h2>
        <p>If you have any questions or need support, please reach out to us.</p>
        <form className="mt-4">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border w-full"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border w-full"
            />
          </div>
          <div className="mb-4">
            <textarea
              placeholder="Your Message"
              className="p-2 border w-full"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Send Message
          </button>
        </form>
      </div>
    )
  }
  