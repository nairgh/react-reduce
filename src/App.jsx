import React from "react";
import "./App.css";
import ArrayList from "./components/ArrayList.jsx"
import ObjList from "./components/ObjectList.jsx";

const App = () => {
    return (
    <div>
       <ArrayList />
       <ObjList />
    </div>
  );
};

export default App;


// import React from "react";
// import "./App.css";
// const App = () => {
//   // The nested array of lists
//   const allLists = [
//     ["apple", "pear", "kiwi"],
//     ["grape", "plum", "banana"],
//     ["mango", "fig", "melon"],
//   ];

//   // List of selected list indices
//   const selectedIndices = [0, 2]; // We're interested in lists at index 0 and 2
//   // Use reduce to filter and collect items from the selected lists
//   const filteredItems = selectedIndices.reduce((accumulator, index) => {
//     // Get the list by index
//     const selectedList = allLists[index];
//     // Filter items in the selected list based on the condition
//     const validItems = selectedList.filter((item) => item.length > 3);
//     // Concatenate the valid items to the accumulator
//     return [...accumulator, ...validItems];
//   }, []);

//   return (
//     <div>
//       <h1>Original Items</h1>
//       <ul style={{ listStyle: "none" }}>
//         {allLists.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       <h1>Filtered Items</h1>
//       <ul style={{ listStyle: "none" }}>
//         {filteredItems.map((item, index) => (
//           <li key={index}>{item}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default App;
