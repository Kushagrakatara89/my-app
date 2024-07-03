import React from "react";


const Contact = () => {
    return (
        
        <div className="contact" id="Contacts">
        <main>
        <h1>Contact Us</h1>
        <form>
            <div>
            <label>Name</label>
            <input type="text" placeholder="Write name"/>
            
            </div>
            <div>
                <label>E-mail</label>
                <input type="email" placeholder="abc@xyz.com"></input>
            </div>
            <div>
                <label>Message</label>
                <input type="text" placeholder="Write your Query"></input>
            </div>
            <button type="submit">Send</button>
       
        </form>

        </main>
        </div>
    );
    }
    export default Contact;