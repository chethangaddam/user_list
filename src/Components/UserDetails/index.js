import './index.css'

const UserDetails = props => {
  const {userData} = props
  const {imageUrl, name, role} = userData

  return (
    <li className="user-card-container">
      <img src={imageUrl} className="avatar" alt="avatar" />
      <div className="user-details-container">
        <h1 className="user-name ">{name}</h1>
        <p className="user-designation">{role}</p>
      </div>
    </li>
  )
}

export default UserDetails
