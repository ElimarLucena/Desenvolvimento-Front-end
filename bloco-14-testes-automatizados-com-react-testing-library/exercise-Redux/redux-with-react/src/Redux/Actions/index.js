import ADD_ELEMENT from "./ActionsName";

const addAssignment = (value) => {
  return {
    type: ADD_ELEMENT,
    value: value,
  }
}

export default addAssignment;