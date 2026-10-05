import { useDispatch } from 'react-redux'
import { addContact } from '../redux/contactsSlice'

export default function ContactsForm() {
  const dispatch = useDispatch()

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)
    const name = data.get('name').trim()
    const number = data.get('number').trim()
    if (!name || !number) return

    dispatch(addContact({ name, number }))
    form.reset()
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="contact-name">Full name</label>
      <input
        id="contact-name"
        name="name"
        autoComplete="name"
        required
        minLength={3}
        maxLength={50}
        pattern=".*\S.*"
        title="Enter a name with at least 3 characters."
        placeholder="e.g. Alex Morgan"
      />
      <label htmlFor="contact-number">Phone number</label>
      <input
        id="contact-number"
        name="number"
        type="tel"
        autoComplete="tel"
        required
        minLength={3}
        maxLength={50}
        pattern="[+0-9\(\)\s.\-]*[0-9][+0-9\(\)\s.\-]*"
        title="Use digits, spaces, +, parentheses, periods, and hyphens."
        placeholder="e.g. +1 (555) 123-4567"
      />
      <button type="submit">Add contact</button>
    </form>
  )
}
