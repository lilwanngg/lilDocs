![lilDocslogo](https://github.com/lilwanngg/lilDocs/blob/master/app/assets/read_me_images/Screen%20Shot%202019-08-09%20at%2011.35.43%20AM.png)

**[Click Here to Visit Site](https://lildocs.herokuapp.com)**

Welcome to lilDocs! A full-stack, single-page GoogleDocs clone where users can create rich-text documents and share documents with other users. It was designed using Ruby on Rails in the backend and React/Redux in the front end. The React-Quill library was implemented for rich-text editing (including document templates), and a debounce method was implemented for seamless autosaving.

## Technologies
* Ruby on Rails
* React/Redux
* React-Quill
* PostgreSQL
* Webpack
* CSS


## Key Features

### User Auth
* user is verified through two factor authentication using a custom designed verification route within the controller to first check if the email exists then allows the user to enter a password
* document index is only available to signed in users, and users can only see documents they have access to
* front and back end methods ensure that email/password combinations pass validations

```
get "/verify_user", to: "users#verify_user"
```

```
  def verify_user
    @user = User.find_by(email: params[:email])
      if @user
        render :show
      else
        render json: [" Email could not be found"], status: 404
      end
  end
```


![logingif](https://github.com/lilwanngg/lilDocs/blob/master/app/assets/read_me_images/login.gif)
### Document Editing
* implementation of react-quill library and incorporation of custom toolbar
* debounced auto-save method to only save when the user stops typing for 3 seconds
* quill component renders with readOnly flag being true or false dependent upon user's edit/view permission
* quill component also is designated as an uncontrolled component by using the flag of defaultValue instead of value


![lildocsgif](https://github.com/lilwanngg/lilDocs/blob/master/app/assets/read_me_images/lildocs.gif)

```
class QuillToolbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = { content: this.props.doc.content }
        this.debouncedUpdate = this.debounce(this.props.updateDocument, 2000)

        this.modules = {
            toolbar: [
                [{ 'header': [1, 2, false, 3, 4] }],
                [{
                    'font': [
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
                    ]}],
                [{ 'size': ['8px', '9px', '10px', '11px', '12px', '14px', '18px', '24px', '30px', '36px', '48px', '60px'] }],
                ['bold', 'italic', 'underline', 'strike', 'blockquote', { 'color': [] }, { 'background': [] }],
                [{ 'script': 'sub' }, { 'script': 'super' }  ],
                ['code', 'formula', 'link', 'image'],
                [{ 'align' : '' }, { 'align' : 'center' }, { 'align' : 'right' }, { 'align' : 'justify' }],
                [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
                ['clean']
            ],
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
```

```
    let readOnly
    this.props.type === "view" ? readOnly = true : readOnly = false
    if (readOnly) {
        return (
            <div className="editing-background">
                <ReactQuill
                    theme="snow"
                    defaultValue={this.state.content}
                    modules={this.modules}
                    onChange={this.update}
                    readOnly="true"
                >
                </ReactQuill>
            </div>
        )

```
### Sharing
* sharing component rendered via modal for seamless integration into the document show page
* only document owners may share, and permissinos can be changed, updated, or deleted once granted
* documents that are shared with other users have a sharing icon on the description within the document index page

```
<div className="share-right">
    {doc.user_id === perm.user.id ? (<div className="perm-dropdown">Is owner</div>) : (
        <>
        <div className="perm-dropdown" onClick={() => this.setState({ open: !this.state.open })}>
            <img className="share-button-pen perm-pen" src={`${this.state.type === "edit" ? window.editURL : window.viewURL}`} />
            <div className={`perm-options ${this.state.open ? "share-perms-on" : ""}`}>
                <div className="perm-option" onClick={this.handleEditClick}>{this.state.type === "edit" ? (<div>✔</div>) : (<div></div>)}Can edit</div>
                <div className="perm-option" onClick={this.handleViewClick}>{this.state.type === "view" ? (<div>✔</div>) : (<div></div>)}Can view</div>
            </div>
        </div>
        <div className="delete-perm" onClick={ () => this.props.deleteDocPermission(perm)}>
            X
        </div>
        </>
    )}
</div>
```

![sharinggif](https://github.com/lilwanngg/lilDocs/blob/master/app/assets/read_me_images/sharing.gif)

```
// one of two options when toggling permissions to be updated, the permission updates automatically by sending an action
// when the edit/view option is clicked from the dropdown
handleViewClick() {
    const { perm } = this.props
    this.setState({ type: "view", open: !this.state.open })
    this.props.updateDocPermission( {id: perm.id, doc_id: perm.doc_id, user_id: perm.user_id, permission_type: "view"})
}
```



## Future Implementations
* `comments` users will be able to comment on documents, and the comments will dynamically move to match the position of the selected text
* `document search bar` users will be able to search through documents with a search bar that filters while typing
* `simultaneous editing` will allow users to work on documents at the same time through websockets



