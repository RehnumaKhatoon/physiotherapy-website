import { useState } from 'react'
import Icon from '../../common/Icons'

const emptyForm = { name: '', email: '', phone: '', date: '', message: '' }

export default function AppointmentForm() {
  const [form, setForm] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: send `form` to your backend / email service here
    setSubmitted(true)
    setForm(emptyForm)
  }

  if (submitted) {
    return (
      <div className="appointment appointment--success" id="appointment">
        <span className="appointment__success-icon">
          <Icon name="check" size={28} />
        </span>
        <h3>Appointment requested!</h3>
        <p>Thank you. Our team will call you shortly to confirm your visit.</p>
        <button className="appointment__submit" onClick={() => setSubmitted(false)}>
          Book another
        </button>
      </div>
    )
  }

  return (
    <form className="appointment" id="appointment" onSubmit={handleSubmit}>
      <label className="appointment__field">
        <span>Your Name *</span>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Ann Morris" required />
      </label>

      <div className="appointment__row">
        <label className="appointment__field">
          <span>Your Email *</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="address@example.com"
            required
          />
        </label>
        <label className="appointment__field">
          <span>Phone *</span>
          <input type="tel" name="phone" value={form.phone} onChange={handleChange} placeholder="(123) 456 789 00" required />
        </label>
      </div>

      <label className="appointment__field">
        <span>Date &amp; Time *</span>
        <input type="datetime-local" name="date" value={form.date} onChange={handleChange} required />
      </label>

      <label className="appointment__field">
        <span>Your Message</span>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Write your message..." rows="3" />
      </label>

      <button type="submit" className="appointment__submit">
        Book an Appointment
      </button>
    </form>
  )
}
