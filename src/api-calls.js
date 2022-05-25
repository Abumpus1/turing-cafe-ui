const getReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
  .then(response => {
    if (!response.ok) {
      throw new Error()
    }
    
    return response.json()
  })
}

const addReservation = () => {

}

export { getReservations, addReservation }