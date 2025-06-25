import React from 'react'
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import 'froala-editor/js/languages/de.js';
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';
import check from '../../../assets/check (2) 1.png'
const ProjectObjective = () => {
    let config = {
        heightMin: 300,
        placeholderText: '',
        charCounterCount: false,
        events: {
            contentChanged: function (e, editor) {
                console.log("test");
            }
        }
    }
  return (
    <>
        <div className='createProject_div'>
        <h3>Project Objective and impact</h3>
        <div className='project_obj_editor_wrapper' style={{
                    width: '100%',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}>
                    <FroalaEditorComponent
                        tag="textarea"
                        config={config}
                    />
                </div>

                <div className='create_project_input_wrapper'>
                    <div className='project_input_div'>
                        <label>Total required to support project (optional)</label>
                        <input placeholder='$8900.00'/>
                        <img style={{
                            position:'absolute',
                            top:'40px',
                            right:'10px',
                            width:'25px'
                        }} src={check}
                        />
                    </div>

                    <div className='project_input_div'>
                        <label>Amount we commit to (optional)</label>
                        <input part='$1000.00' />
                        <img style={{
                            position:'absolute',
                            top:'40px',
                            right:'10px',
                            width:'25px'
                        }} src={check}/>
                    </div>


                    <div className='project_input_div'>
                        <label>No of community members required (optional)</label>
                        <input placeholder='0'/>
                    </div>


                    <div className='project_input_div'>
                        <label>Amount required for project (optional)</label>
                        <input placeholder='Environmental'/>
                    </div>
                </div>
        </div>
    </>
  )
}

export default ProjectObjective