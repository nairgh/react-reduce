import React from "react";

const ObjList = () => {
  // The nested array of lists with objects
  const allLists = [
    [
      { name: "apple", value: 10 },
      { name: "pear", value: 5 },
      { name: "kiwi", value: 3 },
    ],
    [
      { name: "grape", value: 8 },
      { name: "plum", value: 6 },
      { name: "banana", value: 12 },
    ],
    [
      { name: "mango", value: 15 },
      { name: "fig", value: 4 },
      { name: "melon", value: 20 },
    ],
  ];

  // List of selected list indices
  const selectedIndices = [0, 2]; // We're interested in lists at index 0 and 2

  // Use reduce to filter and collect items from the selected lists
  const filteredItems = selectedIndices.reduce((accumulator, index) => {
    // Get the list by index
    const selectedList = allLists[index];

    // Filter items in the selected list based on the condition
    const validItems = selectedList.filter((item) => item.name.length > 3);

    // Concatenate the valid items to the accumulator
    return [...accumulator, ...validItems];
  }, []);

  return (
    <div>
      <h1>Filtered ObjLists</h1>
      <ul style={{ listStyle: "none" }}>
        {filteredItems.map((item, index) => (
          <li key={index}>
            {item.name} (Value: {item.value})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ObjList;
