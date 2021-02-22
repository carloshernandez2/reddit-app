import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'

import "./Session.css"

export const Session = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [type, setType] = useState('')
  const [canSave, setCanSave] = useState(true)

  const dispatch = useDispatch()

  const onUsernameChanged = e => setUsername(e.target.value)
  const onPasswordChanged = e => setPassword(e.target.value)
  const onTypeChanged = e => setType(e.target.value)

  const onSavePostClicked = async () => {
    setCanSave(false);
    setTimeout(() => {
      setCanSave(true);
    }, 5000)
  }

  return (
      <form className="tendencies hotPosts">
        <h2>Username</h2>
        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              type="text"
              id="postUsername"
              name="postUsername"
              value={username}
              onChange={onUsernameChanged}
              required
            />
            <span className="omrs-input-label">Required</span>
            <span className="omrs-input-helper">Has to be unique</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><circle cx="15.5" cy="9.5" r="1.5" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" /></svg>
          </label>
        </div>
        <h2>Password</h2>
        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              type="text"
              id="postPassword"
              name="postPassword"
              value={password} 
              onChange={onPasswordChanged}
              required
            />
            <span className="omrs-input-label">Required</span>
            <span className="omrs-input-helper">More than 8 characters long</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><circle cx="15.5" cy="9.5" r="1.5" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" /></svg>
          </label>
        </div>
        <h2>Type</h2>
        <div className="omrs-input-group">
          <label className="omrs-input-underlined">
            <input
              type="text"
              id="postType"
              name="postType"
              value={type}
              onChange={onTypeChanged}
              required
            />
            <span className="omrs-input-label">Required</span>
            <span className="omrs-input-helper">specific permissions (user, admin)</span>
            <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24"><path fill="none" d="M0 0h24v24H0V0z" /><circle cx="15.5" cy="9.5" r="1.5" /><circle cx="8.5" cy="9.5" r="1.5" /><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm-5-6c.78 2.34 2.72 4 5 4s4.22-1.66 5-4H7z" /></svg>
          </label>
        </div>
        <button type="button" onClick={onSavePostClicked} disabled={!canSave}>
          Submit
        </button>
      </form>
  )
}