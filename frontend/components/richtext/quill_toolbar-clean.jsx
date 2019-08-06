import React from 'react'
import ReactQuill, { Quill } from 'react-quill'

const Size = Quill.import("formats/size")
Size.whitelist = ['extra-small', 'small', 'medium', 'large']
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


class WorkingQuillToolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: this.props.doc.content }
        this.debouncedUpdate = this.debounce(this.props.updateDocument, 3000)

        this.modules = {
            toolbar: [
                [{ 'header': [1, 2, false] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote'],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['link', 'image'],
                ['clean']
            ],
        }

        this.formats = [
            'header',
            'bold', 'italic', 'underline', 'strike', 'blockquote',
            'list', 'bullet', 'indent',
            'link', 'image'
        ]
        this.update = this.update.bind(this)
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
        this.setState({ content: content }, () => this.debouncedUpdate({ id, title, content }))
    }

    render() {
        if (!this.props.doc) { return null }
        return (
            <div className="editing-background">
                <ReactQuill
                    theme="snow"
                    value={this.state.content}
                    modules={this.modules}
                    formats={this.formats}
                    onChange={this.update}
                    {...{
                        ref: (node) => {
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
                    }}
                >
                    <div className="editor" />

                </ReactQuill>
            </div>
        )
    }

}


export default WorkingQuillToolbar