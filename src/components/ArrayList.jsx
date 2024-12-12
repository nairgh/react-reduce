function ArrayList() {
  const allLists = [
    ["apple", "pear", "kiwi"],
    ["grape", "plum", "banana"],
    ["mango", "fig", "melon"],
  ];

  // List of selected list indices
  const selectedIndices = [0, 2]; // We're interested in lists at index 0 and 2

  // Use reduce to filter and collect items from the selected lists
  const filteredItems = selectedIndices.reduce((accumulator, index) => {
    // Get the list by index
    const selectedList = allLists[index];

    // Ensure filtering logic works properly
    const validItems = selectedList.filter((item) => {
      return item.length > 3; // Condition: Keep items longer than 3 characters
    });
    return [...accumulator, ...validItems];
  }, []);

  return (
    <div>
      <h1>Original Fruits</h1>
      <ul style={{ listStyle: "none" }}>
        {allLists.map((item, index) => (
          <li key={index}>{item + ""}</li>
        ))}
      </ul>
      <h1>Filtered Fruits</h1>
      <ul style={{ listStyle: "none" }}>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayList;
