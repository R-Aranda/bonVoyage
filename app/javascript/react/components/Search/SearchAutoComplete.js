import React, { useEffect, useState, useRef, useMemo } from "react";
import SearchListItem from "./SearchListItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

library.add(faMagnifyingGlass);

const SearchAutoComplete = ({ data, onSelect, navigateCountry }) => {
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
    if (search === "") hideSuggestion();
    if (!search) return data;
    showSuggestion();
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
        ? setCursor((cursor) =>
            cursor < suggestions.length - 1 ? cursor + 1 : cursor
          )
        : showSuggestion();
    }
    if (e.key === "ArrowUp") {
      setCursor((cursor) => (cursor > 0 ? cursor - 1 : 0));
    }
    if (e.key === "Tab") {
      setSearch(suggestions[cursor].name.common);
      hideSuggestion();
    }
    if (e.key === "Escape") {
      hideSuggestion();
    }
    if (e.key === "Enter" && cursor > -1) {
      setSearch(suggestions[cursor].name.common);
      hideSuggestion();
      onSelect(suggestions[cursor]);
    }
  };

  const handleClickSearch = () => {
    navigateCountry(search);
  };

  return (
    <div ref={searchContainer}>
      <form action="">
        <input
          type="text"
          name="search"
          className="search-bar"
          autoComplete="off"
          placeholder="Search by country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => keyboardNav(e)}
        />

        <FontAwesomeIcon
          icon="fa-solid fa-magnifying-glass"
          className="search-bar-icon"
          onClick={handleClickSearch}
        />
      </form>
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
