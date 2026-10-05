import ContactsForm from './components/ContactsForm'
import SearchBox from './components/SearchBox'
import ContactList from './components/ContactList'
import ThemeToggle from './components/ThemeToggle'
import './App.css'

export default function App() {
  return (
    <main className="phonebook">
      <header className="page-header">
        <div className="header-top">
          <span className="eyebrow">A little more connected</span>
          <ThemeToggle />
        </div>
        <h1>Contact Book</h1>
        <p>Your people, a little closer. Keep every contact in one place.</p>
      </header>
      <div className="phonebook-layout">
        <section className="panel" aria-labelledby="add-heading">
          <h2 id="add-heading">Add a contact</h2>
          <p className="section-description">Save the details. Stay in touch.</p>
          <ContactsForm />
        </section>
        <section className="panel" aria-labelledby="contacts-heading">
          <h2 id="contacts-heading">Your contacts</h2>
          <SearchBox />
          <ContactList />
        </section>
      </div>
    </main>
  )
}
