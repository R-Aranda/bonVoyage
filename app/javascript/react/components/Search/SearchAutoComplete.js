import React, { useEffect, useState, useRef, useMemo } from "react";
import SearchListItem from "./SearchListItem";

const SearchAutoComplete = ({ data, onSelect }) => {
  const [visible, setVisible] = useState(false);
  const [search, setSearch] = useState("");
  const [cursor, setCursor] = useState(-1);
  const searchContainer = useRef(null);
  const searchResultRef = useRef(null);
  const showSuggestion = () => setVisible(true);
  const hideSuggestion = () => setVisible(false);

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollIntoView = (position) => {
    searchResultRef.current.parentNode.scrollTo({
      top: position,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (cursor < 0 || cursor > suggestions.length || !searchResultRef) {
      return () => {};
    }
    let listItems = Array.from(searchResultRef.current.children);
    listItems[cursor] && scrollIntoView(listItems[cursor].offsetTop);
  }, [cursor]);

  const suggestions = useMemo(() => {
    if (!search) return data;

    setCursor(-1);
    scrollIntoView(0);

    return data.filter((item) =>
      item.name.common.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);

  const handleClickOutside = (event) => {
    if (
      searchContainer.current &&
      !searchContainer.current.contains(event.target)
    ) {
      hideSuggestion();
    }
  };

  const keyboardNav = (e) => {
    if (e.key === "ArrowDown") {
      visible
        ? setCursor((c) => (c < suggestions.length - 1 ? c + 1 : c))
        : showSuggestion();
    }
    if (e.key === "ArrowUp") {
      setCursor((c) => (c > 0 ? c - 1 : 0));
    }
    if (e.key === "Escape") {
      hideSuggestion();
    }
    if (e.key === "Enter" && cursor > 0) {
      setSearch(suggestions[cursor].name.common);
      hideSuggestion();
      onSelect(suggestions[cursor]);
    }
  };

  return (
    <div style={{ height: "100%" }} ref={searchContainer}>
      <input
        type="text"
        name="search"
        className="search-bar"
        autoComplete="off"
        value={search}
        onClick={showSuggestion}
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={(e) => keyboardNav(e)}
      />
      <div className={`search-result ${visible ? "visible" : "invisible"}`}>
        <ul className="list-group" ref={searchResultRef}>
          {suggestions.map((item, idx) => (
            <SearchListItem
              key={item.name.common}
              onSelectItem={() => {
                hideSuggestion();
                setSearch(item.name.common);
                onSelect(item);
              }}
              isHighlighted={cursor === idx ? true : false}
              {...item}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchAutoComplete;
