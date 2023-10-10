import React from 'react';
import '../css/footer.css';

function footer() {
  return (
      <>
          <footer>
            <div className="column">
            <h2>Column 1</h2>
            <p>Random content for column 1.</p>
            </div>
            <div className="column">
            <h2>Column 2</h2>
            <p>Random content for column 2.</p>
            </div>
            <div className="column">
            <h2>Column 3</h2>
            <p>Random content for column 3.</p>
            </div>
        </footer>
      </>
  )
}

export default footer