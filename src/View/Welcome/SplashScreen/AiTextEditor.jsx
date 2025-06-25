import React, { useState } from 'react'
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import 'froala-editor/js/languages/de.js';
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';
import RegisterButton from '../../../Components/RegisterButton';
import SplashLoader from './SplashLoader';
import img from '../../../assets/image (48).png'
import img2 from '../../../assets/image (49).png'
import img3 from '../../../assets/image (50).png';
import modifyImage from '../../../assets/Group 1171277288.png'
import CropImageModal from './CropImageModal';
const AiTextEditor = () => {
    const [loader, setLoader] = useState(false);
    const [aiImages, setaiImages] = useState(false);
    const [modalToggle, setmodalToggle] = useState({
        toggle1: false,
        toggle2: false
    })
    let config = {
        heightMin: 300,
        placeholderText: 'Let’s Create The Image',
        charCounterCount: false,
        events: {
            contentChanged: function (e, editor) {
                console.log("test");
            }
        }
    }

    const Timer = () => {
        setLoader(true)
        setTimeout(() => {
            setLoader(false)
            setaiImages(true)
        }, 2000);
    }

    const LoaderModal = () => {
        return (
            <>
                <div className='loader_modal_wrapper'>
                    <div className='loader_div'>
                        <SplashLoader />
                    </div>
                </div>
            </>
        )
    }

    const ModifyImageModal = () => {
        return (
            <>
                <div onClick={(() => setmodalToggle({
                    toggle1: false,
                    toggle2: false,
                }))} className='loader_modal_wrapper'></div>
                <div className='modify_modal_div'>
                    <img src={modifyImage} />
                    <h3>Modify Your Image</h3>
                    <h4>Do you want to crop or resize image</h4>

                    <div className='modify_button_wrapper'>
                        <button onClick={(() => setmodalToggle({
                            toggle1: false,
                            toggle2: false,
                        }))} className='skip_button'>Skip</button>
                        <button onClick={(() => setmodalToggle({
                            toggle1: false,
                            toggle2: true,
                        }))} className='continue_button'>Continue</button>
                    </div>
                </div>
            </>
        )
    }
    return (
        <>
        
            {loader && <LoaderModal />}
            {!aiImages && <>
                <h1 style={{
                    fontSize: '22px',
                    fontWeight: '500'
                }}>Describe Your Own Image </h1>
                <div className='ai_text_wrapper' style={{
                    width: '100%',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}>
                    <FroalaEditorComponent
                        tag="textarea"
                        config={config}
                    />

                    {/* <FroalaEditorView   
    model={this.state.content}
    /> */}
                </div>

                <div onClick={Timer} style={{
                    width: '150px',
                    marginLeft: 'auto',

                }}>
                    <RegisterButton name={'Submit'} />
                </div>
            </>}

            {aiImages && <div className='gallery_img_wrapper'>
                {[img, img2, img3].map((e, i) => {
                    return (
                        <>
                            <div onClick={(() => setmodalToggle({
                                toggle1: true,
                                toggle2: false,
                            }))} key={i} className='gallery_img'>
                                <img src={e} />
                            </div>
                        </>
                    )
                })}
            </div>}
            {modalToggle.toggle1 && <ModifyImageModal />}
            {modalToggle.toggle2 && <CropImageModal setmodalToggle={setmodalToggle}/>}
         
        </>
    )
}

export default AiTextEditor