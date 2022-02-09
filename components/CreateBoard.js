import React, { useState } from 'react';
import { Boards } from './Boards';

const CreateBoard = ({ onChangeForm, createBoard}) => {

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-7 mrgbtm'>
                    <h2>Create Board</h2>
                    <form>
                        <div className='row'>
                            <div className='form-group col-md-6'>
                                <label htmlFor = 'title'>Title</label>
                                {/* <input onChange={(e) => onChangeForm(ee} /> */}
                                <input id = 'title' name = 'title' type = 'text' onChange={(e) => onChangeForm(e)} />
                            </div>
                            <div className='form-group col-md-6'>
                                <label htmlFor='writer'>Writer</label>
                                {/* <input onChange={(e) => onChangeForm(e)} /> */}
                                <input id = 'writer' name = 'writer' type = 'text' onChange={(e) => onChangeForm(e)} />
                            </div>
                        </div>
                        <div className='form-group col-md-12'>
                            <label htmlFor = 'content'>Content</label>
                            {/* <input type="text" onChange={(e) => onChangeForm(e)} /> */}
                            <input id = 'content' name = 'content' type="text" onChange={(e) => onChangeForm(e)} />
                        </div>
                        <button type="button" onClick = {(e) => createBoard(e.target)} className='btn btn-danger'>Create</button>
                        {/* <input type="submit"></input> */}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateBoard