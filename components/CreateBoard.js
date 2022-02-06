import React from 'react';

const CreateBoard = ({ onChangeForm, createBoard}) => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 mrgbtm'>
                    <h2>Create Board</h2>
                    <form>
                        <div className='row'>
                            <div className='form-group col-md-6'>
                                <label>Title</label>
                                <input onChange={(e) => onChangeForm(e)} className='form-control' />
                            </div>
                            <div className='form-group col-md-6'>
                                <label>Writer</label>
                                <input onChange={(e) => onChangeForm(e)} className='form-control' />
                            </div>
                        </div>
                        <div className='form-group col-md-12'>
                            <label>Content</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className='form-control' />
                        </div>
                        <button type="button" onClick = {(e) => createBoard()} className='btn btn-danger'>Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBoard