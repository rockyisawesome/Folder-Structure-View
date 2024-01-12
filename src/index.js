// fetchData();

import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Folder from "./Folder";

const obj1 = {
  id: 1,
  name: "root",
  isFolder: true,
  items: [
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "public nessted 1",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: 5,
              name: "hello.js",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "public",
      isFolder: true,
      items: [
        {
          id: 3,
          name: "public nessted 1",
          isFolder: true,
          items: [
            {
              id: 4,
              name: "index.html",
              isFolder: false,
              items: [],
            },
            {
              id: 5,
              name: "hello.js",
              isFolder: false,
              items: [],
            },
          ],
        },
      ],
    },
    {
        id: 2,
        name: "new.js",
        isFolder: false,
        items: []
      }
  ]
};

// ek aisa function banao ki vo object ki saari keys pe iterate kre
function recursiveObject() {
  let arr = [];
  for (let fld in this) {
    let newArr;
    if (typeof this[fld] === "object" && this[fld] !== null) {
      // arr.push(<li>{fld}{}</li>)
      //basically tumhe yahan pe kuch aur
      newArr = recursiveObject.call(this[fld]);
      const ele = <ul className="folder">{...newArr}</ul>;
      arr.push(
        <li>
          {fld}
          {ele}
        </li>
      );
      //   arr = [...arr, recursiveObject.call(this[fld])]
    } else {
      arr.push(<li>{this[fld]}</li>);
    }
  }
  return arr;
}

const App = () => {
  const [folders, setFolders] = useState(obj1);

  return (
    <>
      <button>Add Folder</button>
      <button>Delete Folder</button>
      <Folder data={folders} />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("start"));
root.render(<App />);
