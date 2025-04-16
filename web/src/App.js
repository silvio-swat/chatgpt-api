import { useState } from 'react';

import './styles/App.css';
import './styles/reset.css';

import { makeRequest} from './api/api'
import  {SideMenu}  from './components/SideMenu/SideMenu';
import { ChatMessage } from './components/ChatMessage/ChatMessage'

function App() {

  const[input, setInput] =useState("")
  const[chatlog, setChatlog] =useState([{
    user: "gpt",
    message: "Como posso te ajudar hoje?"
  }])

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      let response = await makeRequest({prompt: input})
      response = response.data.split('\n').map(line =>
        <p>{line}</p>)
  
        setChatlog([...chatlog,{
          user: 'me',
          message: `${input}`
        },
        {
          user: 'gpt',
          message: response
        },      
        ])
  
        setInput("")      
    } catch (error) {
      // Aqui entra quando a resposta do backend tem status 500
      const errorMessage =
        error.response && error.response.data && error.response.data.error
          ? error.response.data.error
          : "Erro desconhecido. Por favor, tente novamente.";

      setChatlog([
        ...chatlog,
        { user: 'me', message: input },
        { user: 'gpt', message: `Erro: ${errorMessage}` },
      ]);

      setInput("");      
    }


  }

  return (
    <div className="App">
      <SideMenu></SideMenu>
      <section className='chat-box'>
        <div className='chat-log'>
          {chatlog.map((message, index)=>(
            <ChatMessage
              key={index}
              message={message}
            />
          ))}
        </div>
        <div className='chat-input-holder'>
            <form onSubmit={handleSubmit}>
              <input
                rows='1'
                className='chat-input-textarea'
                value={input}
                onChange={e => setInput(e.target.value)}
              >
              </input>
            </form>
        </div>        
      </section>
    </div>
  );
}

export default App;
