import React from 'react'

const ProjectItinerary = () => {
  return (
    <>
      <div className='createProject_div'>
        <h3>Project Itinerary</h3>
        <div className='create_project_input_wrapper'>
        <div className='project_input_div'>
          <label>Project Location</label>
          <input style={{
            padding:'0px 30px'
          }} placeholder='Enter Location'/>
          <i style={{
            position:'absolute',
            top:'42.5px',
            left:'10px',
            fontSize:'15px'
          }}  class="fa-solid fa-location-dot"></i>
        </div>

        <div className='project_input_div'>
          <label>Project language</label>
          <select>
            <option>English</option>
            <option>English</option>
            <option>English</option>
            <option>English</option>
          </select>
          <i class="fa-solid fa-angle-down"></i>
        </div>


        <div className='project_input_div'>
          <label>Time (optional)</label>
          <input  type='time' style={{
            padding:'0px 30px'
          }} />
          <i style={{
            position:'absolute',
            top:'42.5px',
            left:'10px',
            fontSize:'15px'
          }}  class="fa-solid fa-clock"></i>
        </div>
        </div>

      </div>
    </>
  )
}

export default ProjectItinerary