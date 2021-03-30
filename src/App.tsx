import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import jsonServerProvider from "ra-data-json-server";
import React from "react";
import { Admin, Resource } from "react-admin";
import "./App.css";
import authProvider from "./authProvider";
import Dashboard from "./Lists/Dashboard";
import { PostCreate } from "./Lists/PostCreate";
import { PostEdit } from "./Lists/PostEdit";
import { PostList } from "./Lists/PostList";
import { UserList } from "./Lists/UserList";
const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");

const App = () => (
  <Admin
    dashboard={Dashboard}
    authProvider={authProvider}
    dataProvider={dataProvider}
  >
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />

    {/* <Resource name="comments" list={ListGuesser} />
    <Resource name="albums" list={ListGuesser} />
    <Resource name="photos" list={ListGuesser} />
    <Resource name="todos" list={ListGuesser} /> */}
  </Admin>
);

export default App;
