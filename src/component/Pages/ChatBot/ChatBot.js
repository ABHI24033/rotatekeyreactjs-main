import ChatBot from 'react-simple-chatbot';
import "./ChatBot.css";
// import { ThemeProvider } from 'styled-components';
 
const steps = [
    {
        id: '0',
        message: 'Hey !',
        trigger: '1',
    }, {
        id: '1',
        message: 'Please write your username',
        trigger: '2'
    }, {
        id: '2',
        user: true,
        trigger: '3',
    }, {
        id: '3',
        message: " hi {previousValue}, how can I help you?",
        trigger: 4
    }, {
        id: '4',
        options: [
            { value: 1, label: 'View Courses' },
            { value: 2, label: 'Read Articles' },
 
        ],
        end: true
    }
];

const theme = {
    background: '#C9FF8F',
    headerBgColor: '#197B22',
    headerFontSize: '20px',
    botBubbleColor: '#0F3789',
    headerFontColor: 'white',
    botFontColor: 'white',
    userBubbleColor: '#FF5733',
    userFontColor: 'white',
};
const config = {
    botAvatar: "https://img.freepik.com/free-vector/robot-icon-chat-bot-sign-support-service-concept-chatbot-character-flat-style_41737-795.jpg?w=740",
    floating: true,
};
 

const Chatbot = () => {

 
    return (
        <div >
<div className='text-center bg-white'>
<div className='stylo fs-16' id="style-2" data-replace="Hola9.com"><span>Welcome to Hola9.com</span></div>
</div>
            {/* <ThemeProvider theme={theme}> */}
                <ChatBot
 
                    // This appears as the header
                    // text for the chat bot
                    headerTitle="Hola9Bot"
                    steps={steps}
                    {...config}
 
                />
            {/* </ThemeProvider> */}
          
        </div>
    );
  }
  
  export default Chatbot