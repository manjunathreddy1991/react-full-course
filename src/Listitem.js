
export const Listitem = (props) => {
    const {id, email, name, body} = props
  
    return (
    <li key={id} className="comment">
    <div className="comments-header">
      <h3 className="email">{email}</h3>
      <h3 className="name">{name}</h3>
    </div>
    <div className="message">{body} </div>
  </li>
  
  )}

  