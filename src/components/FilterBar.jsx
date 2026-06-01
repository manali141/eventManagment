import "../styles/Style.css";

function FilterBar({ category, setCategory }) {
  return (
    <div className="mb-4">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value="All">All Categories</option>
        <option value="Technology">Technology</option>
        <option value="Music">Music</option>
        <option value="Sports">Sports</option>
      </select>
    </div>
  );
}

export default FilterBar;