const { useState } = React;

function App() {
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const searchMovies = async () => {
    setError(null);
    setLoading(true);
    try {
      const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
      const data = await res.json();
      if (data.Search) {
        setMovies(data.Search);
      } else {
        setMovies([]);
        if (data.Error) setError(data.Error);
      }
    } catch (err) {
      setError('Error searching movies');
    } finally {
      setLoading(false);
    }
  };

  return React.createElement(
    'div',
    { className: 'max-w-xl mx-auto' },
    React.createElement('h1', { className: 'text-2xl font-bold mb-4 text-center' }, 'Movie Search'),
    React.createElement('div', { className: 'flex gap-2 mb-4' },
      React.createElement('input', {
        className: 'flex-1 border rounded p-2',
        value: query,
        onChange: e => setQuery(e.target.value),
        placeholder: 'Search for a movie...'
      }),
      React.createElement('button', {
        className: 'bg-blue-500 text-white px-4 py-2 rounded',
        onClick: searchMovies
      }, loading ? 'Searching...' : 'Search')
    ),
    error && React.createElement('p', { className: 'text-red-600 mb-4' }, error),
    React.createElement('ul', { className: 'space-y-2' },
      movies.map(movie =>
        React.createElement('li', {
          key: movie.imdbID,
          className: 'border rounded p-2 bg-white'
        }, `${movie.Title} (${movie.Year})`)
      )
    )
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
