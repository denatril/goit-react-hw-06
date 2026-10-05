import { useDispatch } from 'react-redux'
import { deleteContact } from '../redux/contactsSlice'

export default function Contact({ contact }) {
  const dispatch = useDispatch()

  return (
    <article className="contact-card">
      <span className="contact-avatar" aria-hidden="true">
        {contact.name.trim().split(/\s+/).slice(0, 2).map(part => part[0]).join('').toUpperCase()}
      </span>
      <div className="contact-details">
        <h3>{contact.name}</h3>
        <p>{contact.number}</p>
      </div>
      <button
        className="delete-button"
        type="button"
        aria-label={`Delete ${contact.name}`}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </article>
  )
}
