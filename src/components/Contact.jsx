import{useState} from 'react'
import { MdEmail } from "react-icons/md";

const Contact = () => {

  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('');
  // const [message, setMessage] = useState('')

  // function formHandle(e) {
  //   e.preventDefault();
  // }
  
  return (
    <div className='contact-section' id='contact'>
      <div className="container">
      
        <div className="contact-content">
          <div className="contact-info contact-form">
            <h3>Contact Me</h3>
            
            <p className='email-icon'><MdEmail className='icon'/> korxuey@gmail.com</p>
            {/* <form action="" method='POST' onSubmit={formHandle}>
              <h3>Contact Me</h3>
              <div className="input-group">
              <label htmlFor="name">Name</label>
              <input type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
              </div>
              <div className="input-group">
              <label htmlFor="email">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
              </div>
              <div className="input-group">
              <label htmlFor="message">Message</label>
              <textarea cols="50" rows="20" value={message} onChange={(e) => setMessage(e.target.value)}/>
              </div>
              <div className='input-group'>
                <button type='submit'>Send</button>
              </div>
            </form> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact