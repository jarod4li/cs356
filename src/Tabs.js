// Tabs.js
import React from 'react';
import './styles.css';


const Tabs = ({ categories, setActiveCategory }) => {
  return (
    <div className="tabs">
      {categories.map((category, index) => (
        <div
          key={index}
          className="tab"
          onClick={() => setActiveCategory(category === 'All' ? null : category)}
        >
          {category}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
