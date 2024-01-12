// const obj1 = {
//     fld1: {
//       "subFl1": "index.js",
//       "subfl2": "lib.js",
//       "subfl3": {
  
//       }
//     }
//   };
  
  
//   // ek aisa function banao ki vo object ki saari keys pe iterate kre
//   function recursiveObject(){
//       for (let key in this){
//           console.log(key)
//       }
//   }


// recursiveObject.call(obj1)

// return (
//     <>
//       <ul>
//         {/* {isme recursion to lagega pr basic logic theek kr lun pehle */}
//         {folders.map((ele, index) => {
//           let arrToReturn = [];
//           //isme ul daalna he
//           if (typeof obj1[ele] === 'object' && obj1[ele] !== null) {
//             const custArr = Object.keys(obj1[ele]).map((ele2, ind) => {
//               return <li>{ele2}</li>;
//             });
//             return <li>{ele}<ul>{custArr}</ul></li>
//           }
//           //isme ul nhi daalna he
//           else {
//           }
//           return arrToReturn;
//         })}
//       </ul>
//     </>
//   );


const obj1 = {
    fld1: {
      subFl1: "index.js",
      subfl2: "lib.js",
      subfl3: {},
    },
  };
  
  // ek aisa function banao ki vo object ki saari keys pe iterate kre
  function recursiveObject() {
    //agar object he to kuch aur krna he
    let arr = []
    for (let fld in this) {
      
      if (typeof this[fld] === "object" && this[fld] !== null) {
          arr.concat(recursiveObject.call(this[fld]))
      }else{
          arr.push(fld)
      }
    }
  
    return arr
  }

  console.log(recursiveObject.call(obj1))