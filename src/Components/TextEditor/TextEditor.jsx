import React, { useState } from 'react'
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
import "froala-editor/js/plugins.pkgd.min.js";
import FroalaEditorComponent from "react-froala-wysiwyg";
import 'froala-editor/js/languages/de.js';
import 'froala-editor/js/third_party/image_tui.min.js';
import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/js/third_party/spell_checker.min.js';
const TextEditor = () => {
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
    return (
        <>
         
             <div className='ai_text_wrapper' style={{
                    width: '100%',
                    marginTop: '20px',
                    marginBottom: '20px'
                }}>
                    <FroalaEditorComponent
                        tag="textarea"
                        config={config}
                    />
                </div>
        </>
    )
}

export default TextEditor