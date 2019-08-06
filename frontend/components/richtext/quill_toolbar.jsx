import React from 'react'
import ReactQuill, { Quill } from 'react-quill'
// import 'react-quill/dist/quill.snow.css'
import '../../../app/assets/stylesheets/quillstylesheet.css'


const CustomToolbar = () => (     
    <div id="cust-toolbar">
        <select className="ql-font">
            <option value="calibri" defaultValue>Calibri</option>
            <option value="arial">Arial</option>
            <option value="cambria">Cambria</option>
            <option value="comic-sans">Comic Sans</option>
            <option value="courier-new">Courier New</option>
            <option value="georgia">Georgia</option>
            <option value="helvetica">Helvetica</option>
            <option value="lucida">Lucida</option>
            <option value="roboto">Roboto</option>
            <option value="times-new-roman">Times New Roman</option>
            <option value="trebuchet">Trebuchet</option>
            <option value="verdana">Verdana</option>
        </select>
        <select className="ql-size">
            <option value="eleven">Extra small</option>
            <option value="small" defaultValue>Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>
    </div>
)

const Size = Quill.import("formats/size")
Size.whitelist = [ 'extra-small', 'small', 'medium', 'large']
Quill.register(Size, true)

const Font = Quill.import("formats/font")
Font.whitelist = [
    "arial",
    'calibri',
    'cambria',
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida",
    'montserrat',
    'oswald',
    'roboto',
    'times-new-roman',
    'trebuchet',
    'verdana'
]
Quill.register(Font, true)


class QuillToolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: this.props.doc.content }
        this.debouncedUpdate = this.debounce(this.props.updateDocument, 3000)

        this.modules = {
            toolbar: {
                container: "#cust-toolbar",
            }
        };

        this.formats = [
            "header",
            "font",
            "size",
            "bold",
            "italic",
            "underline",
            "strike",
            "blockquote",
            "list",
            "bullet",
            "indent",
            "link",
            "image",
            "color"
        ];
        // this.modules = {
        //     toolbar: [
        //         [{ 'header': [1, 2, false] }],
        //         ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        //         [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
        //         ['link', 'image'],
        //         ['clean']
        //     ],
        // }

        // this.formats = [
        //     'header',
        //     'bold', 'italic', 'underline', 'strike', 'blockquote',
        //     'list', 'bullet', 'indent',
        //     'link', 'image'
        // ]
        this.update= this.update.bind(this)
    }

    debounce(func, time) {
        let timeout
        return function () {
            const call = () => func.apply(this, arguments)
            clearTimeout(timeout)
            timeout = setTimeout(call, time)
        }
    }

    update(content) {
        const { id, title } = this.props.doc
        this.setState({ content: content }, () => this.debouncedUpdate({id, title, content}))
    }

    render() {
        if (!this.props.doc) {return null}
        return(
            <div className="editing-background">
                <CustomToolbar />
                <ReactQuill
                    // theme="snow"
                    value={this.state.content}
                    modules={this.modules}
                    formats={this.formats}
                    onChange={this.update} 
                    {...{ ref: (node) => {
                            if (!node) return
                            const originalSetRange = node.editor.selection.__proto__.setNativeRange.bind(node.editor.selection)
                            node.editor.selection.__proto__.setNativeRange = (startNode, startNodeOffset, endNode, endNodeOffset) => {
                                if (
                                    node.editor.root.contains(startNode) &&
                                    node.editor.root.contains(endNode)
                                ) {
                                    originalSetRange(startNode, startNodeOffset, endNode, endNodeOffset)
                                }
                            }
                        }
                    } }
                     >
                    <div className="editor"/>

                </ReactQuill>
            </div>
        )
    }

}


export default QuillToolbar