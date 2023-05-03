import React from 'react'

function FilterButton (props){
 
    return (
        <div className="btn-group">
        <button type="button" className="btn toggle-btn" 
        aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>all</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" 
        aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>Active</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      <button type="button" className="btn toggle-btn" 
        aria-pressed="true">
        <span className="visually-hidden">Show </span>
        <span>Completed</span>
        <span className="visually-hidden"> tasks</span>
      </button>
      </div>
    )
  }


export default FilterButton
