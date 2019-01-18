import React, { useState, useEffect } from "react";
import axios from "axios";

const API = "http://hn.algolia.com/api/v1";

const FetchAPI = () => {
  const [results, setResult] = useState([] as any[]);

  const fetchAPI = async () => {
    const response = await axios.get(`${API}/search?query=reacthooks`);
    if (response.data.hits) {
      setResult(response.data.hits);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  return (
    <>
      <ul>
        {results &&
          results.map(result => (
            <li key={result.objectID}>
              <a href={result.url}>{result.title}</a>
            </li>
          ))}
      </ul>
    </>
  );
};

export default FetchAPI;
