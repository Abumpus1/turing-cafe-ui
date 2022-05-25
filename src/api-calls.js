const getReservations = () => {
  return fetch("http://localhost:3001/api/v1/reservations")
  .then(response => {
    if (!response.ok) {
      throw new Error()
    }
    
    return response.json()
  })
}

const addReservation = (resy) => {
  console.log(resy);
  return fetch("http://localhost:3001/api/v1/reservations", {
    method: "POST",
    body: JSON.stringify(resy),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error()
    }
    
    return response.json()
  })
}

export { getReservations, addReservation }