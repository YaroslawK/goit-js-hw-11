// pixabay-api.js

const API_KEY = '43277181-ebb9172f58fa43bc64ca23581';

export function fetchImages(searchQuery) {
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${encodeURIComponent(searchQuery)}&image_type=photo&orientation=horizontal&safesearch=true`;

    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch images');
            }
            return response.json();
        })
        .then(data => data.hits)
        .catch(error => {
            throw new Error('Failed to fetch images');
        });
}
