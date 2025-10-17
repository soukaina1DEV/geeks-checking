import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCategories,
  selectSelectedCategoryId,
  selectCategory,
} from "../features/tasks/taskSlice";

const CategorySelector = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const selectedCategoryId = useSelector(selectSelectedCategoryId);

  return (
    <div style={{ marginBottom: "20px" }}>
      <h3>Select Category:</h3>
      <select
        value={selectedCategoryId}
        onChange={(e) => dispatch(selectCategory(Number(e.target.value)))}
        style={{ padding: "10px", borderRadius: "5px" }}
      >
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategorySelector;
