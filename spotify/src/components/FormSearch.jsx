import { Form, FormControl } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getSearch } from "../redux/action"

const FormSearch = () => {
  const searchValue = useSelector((state) => state.search.searchValue)
  const dispatch = useDispatch()

  return (
    <Form
      className="input-group mt-3"
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <FormControl
        type="text"
        className="form-control"
        id="searchField"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="basic-addon2"
        value={searchValue}
        onChange={(e) => {
          dispatch(getSearch(e.target.value))
        }}
      />
      <div className="input-group-append">
        <button
          className="btn btn-outline-secondary btn-sm h-100"
          type="submit"
        >
          GO
        </button>
      </div>
    </Form>
  )
}

export default FormSearch