import React from 'react'
import { Link } from 'react-router-dom'

const DocIndexItem = ( { doc } ) => {
    const date = new Date(doc.created_at)
    const fDate = date.toDateString().split(' ').slice(1)
    fDate[1] += ","
    const fDateString = fDate.join(' ')
    return( 
        <li>
            <Link to={`/documents/${doc.id}`}>
                <div className="one-doc">
                    {/* <img src=""/> */}
                    <div className="doc-thumbnail">
                        image thumbnail of doc
                    </div>
                    <div className="doc-info">
                        <p>{doc.title}</p> 
                        <div className="date-str">{fDateString}
                            <div className="dotDropdown">
                                &#8226;&#8226;&#8226;
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </li>
    )
}


export default DocIndexItem