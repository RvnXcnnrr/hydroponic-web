export default function Contact() {
    return (
      <section id="contact" className="py-16 px-4 max-w-4xl mx-auto">
        <h3 className="text-3xl font-bold mb-6 text-center">Contact Us</h3>
        <form className="grid gap-4">
          <input className="p-3 rounded border" type="text" placeholder="Full Name" />
          <input className="p-3 rounded border" type="email" placeholder="Email" />
          <textarea className="p-3 rounded border" rows="5" placeholder="Message"></textarea>
          <button className="bg-green-600 text-white py-2 px-6 rounded hover:bg-green-700 transition w-fit">Send Message</button>
        </form>
      </section>
    )
  }
  