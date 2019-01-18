import React, { useState, useEffect, useRef } from "react";
import axios from "axios";

const API = "http://hn.algolia.com/api/v1";

const FetchAPI = () => {
  const [results, setResult] = useState([] as any[]);
  const [query, setQuery] = useState("react hooks");
  const [error, setError] = useState(null as any);
  const [loading, setLoading] = useState(false);

  const searchInputRef = useRef(null as any);

  const fetchAPI = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API}/search?query=${query}`);
      if (response.data.hits) {
        setResult(response.data.hits);
      }
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    fetchAPI();
  };

  const onClear = () => {
    setQuery("");
    searchInputRef.current.focus();
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <div className="container max-w-md mx-auto p-4 m-2 shadow-lg rounded">
      <img
        src="https://icon.now.sh/react/c0c"
        alt="Hooks News"
        className="float-right h-12"
      />
      <h1 className="text-grey-darkest font-thin">Hooks News</h1>
      <form onSubmit={onSubmit} className="mb-2">
        <input
          className="border p-1 rounded"
          value={query}
          ref={searchInputRef}
          type="text"
          onChange={event => setQuery(event.target.value)}
        />
        <button type="submit" className="bg-green rounded m-1 p-1">
          Search
        </button>
        <button
          type="button"
          onClick={onClear}
          className="bg-yellow rounded m-1 p-1"
        >
          Clear
        </button>
      </form>
      {loading ? (
        <p className="font-bold text-orange-dark">Loading...</p>
      ) : (
        <ul className="list-reset leading-normal">
          {results &&
            results.map(result => (
              <li key={result.objectID}>
                <a
                  href={result.url}
                  className="text-indigo-dark hover:text-indigo-darkest"
                >
                  {result.title}
                </a>
              </li>
            ))}
        </ul>
      )}
      {error && <p className="text-red font-bold">{error.message}</p>}
    </div>
  );
};

export default FetchAPI;