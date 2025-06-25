import React from 'react'

const CreateProject = () => {
  return (
    <>
        <div className='createProject_div'>
            <h3>Create Project</h3>
            <div className='create_project_input_wrapper'>
                <div className='project_input_div'>
                    <label>Project Type</label>
                    <select>
                        <option value={'Environment'}>Environment</option>
                        <option value={'Environment'}>Environment</option>
                        <option value={'Environment'}>Environment</option>
                        <option value={'Environment'}>Environment</option>
                        <option value={'Environment'}>Environment</option>
                        <option value={'Environment'}>Environment</option>  
                        <option value={'Environment'}>Environment</option>
                    </select>
                    <i class="fa-solid fa-angle-down"></i>
                </div>


                <div className='project_input_div'>
                    <label>Project Title</label>
                    <input placeholder='Environment' type='text'/>
               
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateProject