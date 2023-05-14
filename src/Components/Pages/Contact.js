import './Contact.css';

function Contact() {
    return (
        <div className='contactPage'>
            <h2 className='contactTitle'>Contact Here</h2>
            <form method='POST'action='https://getform.io/f/bda4c087-e8fb-4e6e-af8d-1c6ee3142f83'>
                <input 
                type="text" 
                name="name" 
                placeholder="Enter your name" />
                <input 
                type="email" 
                name="email"  
                placeholder="Enter your email" />
                <textarea 
                name="message" 
                cols="30" 
                rows="20" 
                placeholder="Enter your message" />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default Contact