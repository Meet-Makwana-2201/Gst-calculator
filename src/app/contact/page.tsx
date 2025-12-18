export const metadata = {
  title: "Contact Us - Get Support or Feedback | GST Calculator",
  description: "Have questions or need help? Contact us today. We're here to assist you with GST calculations and support requests.",
  keywords: [
    "easy gst calculator",
    "gstcalc",
    "reverse gst calculator",
    "reverse gst",
    "easy reverse gst",
    "Contact GST Calculator",
    "Support",
    "Feedback",
    "Get Help GST"],
  alternates: {
    canonical: "https://onecalculator.online/contact",
  },
  openGraph: {
    title: "Contact Us - Get Support or Feedback | GST Calculator",
    description: "Have questions or need help? Contact us today. We're here to assist you with GST calculations and support requests.",
    url: "/contact",
    siteName: "GST Calculator",
    images: [
      {
        url: "/logo.svg",
        width: 512,
        height: 512,
        alt: "Contact GST Calculator",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Get Support or Feedback | GST Calculator",
    description: "Have questions or need help? Contact us today. We're here to assist you with GST calculations and support requests.",
    images: ["/logo.svg"],
  },
};



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
