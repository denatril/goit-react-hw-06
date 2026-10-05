import { useDispatch, useSelector } from 'react-redux'
import { changeFilter, selectNameFilter } from '../redux/filtersSlice'

export default function SearchBox() {
  const dispatch = useDispatch()
  const name = useSelector(selectNameFilter)

  return (
    <div className="search-box">
      <label htmlFor="contact-search">Search by name</label>
      <input
        id="contact-search"
        type="search"
        value={name}
        onChange={event => dispatch(changeFilter(event.target.value))}
        placeholder="Find someone…"
      />
    </div>
  )
}
