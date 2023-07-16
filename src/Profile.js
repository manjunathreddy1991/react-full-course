

const Profile = (props) =>{

    const {thumbnailUrl, title, url} = props;
        return <article className="profile-card">
              <img src={thumbnailUrl} alt ="some thing"/>
              <h2 className="title" >{title}</h2>
              <a href={url} className="button">details</a>
        </article>
}

export default Profile;