import React from 'react'
import { withRouter } from 'react-router-dom';

const Progress = () => {
    return (
        <React.Fragment> {/* same as empty tags explicit naming only required if it has keys */}
            <div className="steps">
                <div className="step">
                    <div>1</div>
                    <div>Step 1</div>
                </div>
                <div className="step">
                    <div>2</div>
                    <div>Step 2</div>
                </div>
                <div className="step">
                    <div>3</div>
                    <div>Step 3</div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Progress);
