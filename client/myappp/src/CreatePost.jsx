import React,{ useState} from 'react'
import axios from 'axios'
const CreatePost = () => {

    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()

const handleSubmit = (e) => {
    e.preventDefault()
    const formData = new FormData()
    

    axios.post('http://localhost:3001/create', {title, description, file})
    .then(res => {
     if(res.data === "Succcess") {
        window.location.href = "/"
     }
    })
    .catch(err => console.log(err))
}

  return (
    <div className='post_container'>
      <div className='post_form'>
        <form onSubmit={handleSubmit}>
            <h2>Create Post</h2>
            <input type="text" placeholder="Enter Title" onChange = {e => setTitle(e.target.value)}/>
            <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            placeholder='Enter Description'>
            onChange = {e => setDescription(e.target.value)}
            </textarea>
            <input type="file" className="file" placeholder="Select File"
            onChange = {e => setFile(e.target.files[0])}/>
            <button>Post</button>
        </form>
      </div>
    </div>
  )
}

export default CreatePost
