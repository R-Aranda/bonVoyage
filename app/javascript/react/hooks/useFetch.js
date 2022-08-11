import axios from "axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [response, setResponse] = useState();
  const [error, setError] = useState();
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => {
        setResponse(resp.data);
        debugger;
        setLoaded(true);
      })
      .catch((resp) => setError(resp));
  }, []);

  return response;
};

export default useFetch;
