import React, { useReducer, useEffect } from "react";

import Header from "./Header";
import Item from "./Item";
import Search from "./Search";
import { initialState, reducer } from "../store/reducer";
import axios from "axios";

const INITIAL_STATE_URL =
  "https://198182tj3g.execute-api.ap-northeast-1.amazonaws.com/edbaseapi?q=zoom";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // useEffect(() => {
  //   axios.get(INITIAL_STATE_URL).then((jsonResponse) => {
  //     dispatch({
  //       type: "SEARCH_SUCCESS",
  //       payload: jsonResponse.data,
  //     });
  //   });
  // }, []);

  const refreshPage = () => {
    window.location.reload();
  };

  const search = (searchValue) => {
    dispatch({
      type: "SEARCH_REQUEST",
    });

    axios(
      `https://198182tj3g.execute-api.ap-northeast-1.amazonaws.com/edbaseapi?q=${searchValue}`
    ).then((jsonResponse) => {
      if (jsonResponse.data !== "error") {
        dispatch({
          type: "SEARCH_SUCCESS",
          payload: jsonResponse.data,
        });
      } else {
        dispatch({
          type: "SEARCH_FAILURE",
          error: "見つかりません",
        });
      }
    });
  };

  const { items, errorMessage } = state;

  return (
    <div className="App">
      <div className="container">
        <Header text="オンライン授業Lab" />
        <Search search={search} />
        <div className="items">
          {errorMessage ? (
            <div className="errorMessage">{errorMessage}</div>
          ) : (
            items.map((item, index) => <Item key={`${index}`} item={item} />)
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
