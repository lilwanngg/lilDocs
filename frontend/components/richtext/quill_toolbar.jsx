import React from 'react'
import ReactQuill from 'react-quill'

const Size = ReactQuill.Quill.import("attributors/style/size")
Size.whitelist = ['8px', '9px', '10px', '11px', '12px', '14px', '18px', '24px', '30px', '36px', '48px', '60px']
ReactQuill.Quill.register(Size, true)

const Font = ReactQuill.Quill.import("formats/font")
Font.whitelist = [
    "arial",
    'calibri',
    'cambria',
    "comic-sans",
    "courier-new",
    "georgia",
    "helvetica",
    "lucida",
    'roboto',
    'times-new-roman',
    'trebuchet',
    'verdana'
]
ReactQuill.Quill.register(Font, true)


class QuillNoToolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: this.props.doc.content }
        this.debouncedUpdate = this.debounce(this.props.updateDocument, 2000)

        this.modules = {
            toolbar: false
        }
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
                    defaultValue={this.state.content}
                    modules={this.modules}
                    onChange={this.update}
                >
                </ReactQuill>
                {/* <div className="page-break"></div> */}
            </div>
        )
    }

}


export default QuillNoToolbar