import React from 'react'

const AddButton=(props)=> {
    return (
        <button className="btn btn-success circle " data-toggle="modal" data-target={`#${props.target}`}>
            <i className="fa fa-plus"></i>
        </button>
    )
}

export default AddButton
