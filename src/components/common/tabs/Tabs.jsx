import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Tabs.css';

export default function Tabs(props) {
  const { tabs } = props;
  if (tabs.length === 0) return null;
  const [currentTabIndex, setCurerentTabIndex] = useState(0);

  function handleTabChange(tabIndex) {
    setCurerentTabIndex(tabIndex);
  }

  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <div className="tabs-container">
          {tabs.map((tab, index) => (
            <button
              type="button"
              key={tab.label}
              className={`tabs-tab text-center ${
                currentTabIndex === index && 'tabs-active'
              }`}
              onClick={() => handleTabChange(index)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="tabs-content">{tabs[currentTabIndex].component}</div>
      </div>
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      component: PropTypes.node,
    }),
  ),
};

Tabs.defaultProps = {
  tabs: Array,
};
