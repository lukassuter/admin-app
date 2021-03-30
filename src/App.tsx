import jsonServerProvider from "ra-data-json-server";
import React from "react";
import { Admin, ListGuesser, Resource } from "react-admin";
import "./App.css";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="posts" list={ListGuesser} />
    <Resource name="comments" list={ListGuesser} />
    <Resource name="albums" list={ListGuesser} />
    <Resource name="photos" list={ListGuesser} />
    <Resource name="todos" list={ListGuesser} />
  </Admin>
);

export default App;
