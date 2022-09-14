export function apiRequest(query, page) {
  return fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=28166430-49d596e3415ce5cac11c6cb0f&image_type=photo&orientation=horizontal&per_page=12`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(console.error());
}
