import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const Contact = ({ darkMode }) => {
  const formRef = useRef(null)
  const [status, setStatus] = useState('idle')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setStatus('sent')
      e.target.reset()
    } catch (err) {
      setStatus('error')
      console.error(err)
    }
  }

  return (
    <section id="contact" className="min-h-[85vh] relative pt-5 pb-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? 'white' : '#1f2937' }}
          >
            Get In{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #f97316, #f59e0b)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Touch
            </span>
          </h2>

          <p className="text-base sm:text-lg md:text-xl" style={{ color: darkMode ? '#d1d5db' : '#6b7280' }}>
            Let's discuss your project
          </p>
        </div>

        <div className="flex justify-center items-center">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            style={{
              background: darkMode
                ? 'linear-gradient(to right, #1f2937, #111827)'
                : 'linear-gradient(to right, #ffffff, #f9fafb)',
              borderColor: darkMode ? '#374151' : '#e5e7eb',
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              <input
                name="firstName"
                type="text"
                placeholder="First Name"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937',
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
              />

              <input
                name="lastName"
                type="text"
                placeholder="Last Name"
                style={{
                  backgroundColor: darkMode ? '#374151' : '#faede3',
                  borderColor: darkMode ? '#4b5563' : '#d1d5db',
                  color: darkMode ? 'white' : '#1f2937',
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all"
                required
              />
            </div>

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
              required
            />

            <input
              name="phone"
              type="tel"
              placeholder="Phone Number"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4"
              required
            />

            <textarea
              name="message"
              rows="4"
              placeholder="Your Message"
              style={{
                backgroundColor: darkMode ? '#374151' : '#faede3',
                borderColor: darkMode ? '#4b5563' : '#d1d5db',
                color: darkMode ? 'white' : '#1f2937',
              }}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 transition-all mb-3 sm:mb-4 resize-none"
              required
            />

            {/* status message */}
            {status === 'sent' && (
              <p className="text-sm mb-3" style={{ color: darkMode ? '#a7f3d0' : '#065f46' }}>
                Message sent! Thank you 😊
              </p>
            )}
            {status === 'error' && (
              <p className="text-sm mb-3" style={{ color: darkMode ? '#fecaca' : '#991b1b' }}>
                Something went wrong. Please try again.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'sending'}
              style={{ background: 'linear-gradient(to right, #f97316, #f59e0b)' }}
              className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-orange-500/25 hover:scale-[1.02] transition-all disabled:opacity-70 disabled:hover:scale-100"
            >
              {status === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
