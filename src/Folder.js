import { useState } from "react";

const Folder = ({ data }) => {
  console.log("render");
  const [expand, setExpand] = useState(false);

  //to control input box
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: null,
  });

  function stopExtraClicks(e,isFolder) {
        setShowInput({...showInput, visible: true, isFolder:isFolder});
  }
  if (data.isFolder) {
    return (
      <div>
        <div className="folder">
          <span onClick={() => setExpand(!expand)}>📁{data.name}</span>
          <button onClick={(e) => stopExtraClicks(e,true)}>📁Folder</button>
          <button onClick={(e) => stopExtraClicks(e,false)}>📄Filer</button>
        </div>

        <div
          style={{ display: expand ? "block" : "none", paddingLeft: "15px" }}
        >
          {showInput.visible && showInput.isFolder && (
            <div>
              <span>📁</span>
              <input  type="text" onBlur={()=>setShowInput({...showInput, visible: false})} autoFocus></input>
            </div>
          )}
          {data.items.map((ele) => {
            return <Folder data={ele} />;
          })}

          {(showInput.visible && !showInput.isFolder && showInput.isFolder !== null) && (
            <div>
              <span>📄</span>
              <input type="text" onBlur={()=>setShowInput({...showInput, visible: false})} autoFocus></input>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return <span className="span">📄{data.name}</span>;
  }
};

export default Folder;
