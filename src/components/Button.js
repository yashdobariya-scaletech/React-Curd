import React from 'react'

export default function Button() {
    return (
        <div className="btn-wrap">
            <button
                type="submit"
                value="Submit"
                className="">
                Submit
            </button>
            <button
                type="button"
                onClick={(e) => { this.handleReset(e) }}
                value="Reset"
                className="">
                Reset
            </button>
        </div>
    )
}
