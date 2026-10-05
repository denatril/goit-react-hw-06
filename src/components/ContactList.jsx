import { useSelector } from 'react-redux'
import { selectContacts } from '../redux/contactsSlice'
import { selectNameFilter } from '../redux/filtersSlice'
import Contact from './Contact'

export default function ContactList() {
  const contacts = useSelector(selectContacts)
  const nameFilter = useSelector(selectNameFilter)
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLocaleLowerCase('en').includes(nameFilter.trim().toLocaleLowerCase('en')),
  )

  if (contacts.length === 0) {
    return <p className="empty-state" role="status">Your contact book starts here. Add your first contact using the form.</p>
  }

  if (visibleContacts.length === 0) {
    return <p className="empty-state" role="status">No contacts found. Try a different name.</p>
  }

  return (
    <ul className="contact-list">
      {visibleContacts.map(contact => (
        <li key={contact.id}><Contact contact={contact} /></li>
      ))}
    </ul>
  )
}
