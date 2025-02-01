let currentSection = 'registrationSection';
let verificationCodeGenerated = '';
function switchSection(nextSection) {
    document.getElementById(currentSection).classList.remove('active');
    document.getElementById(currentSection).classList.add('hidden');
    document.getElementById(nextSection).classList.add('active');
    document.getElementById(nextSection).classList.remove('hidden');
    currentSection = nextSection;
}
function registerUser() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

   
     console.log('User Registered:', {name, email});
      
    verificationCodeGenerated = generateVerificationCode();
    console.log('Verification Code:', verificationCodeGenerated);
    alert('Verification code sent to your email. Please check console for code.')
     
     switchSection('verificationSection');
}

function verifyEmail(){
    const verificationCode = document.getElementById("verificationCode").value
     
     if (verificationCode === verificationCodeGenerated)
     {
         alert("Email Verification successful")
        switchSection('organizationSection');
     }
     else{
         alert("Incorrect verification code!")
     }
}

function setupOrganization() {
    const companyName = document.getElementById('companyName').value;
    const companyUrl = document.getElementById('companyUrl').value;
    const companyDescription = document.getElementById('companyDescription').value;
   
    console.log('Organization Details:', {companyName, companyUrl});

    const dummyWebpages = [
        { url: 'https://www.example.com/page1', status: 'scraped', id: 1 },
        { url: 'https://www.example.com/page2', status: 'pending', id: 2 },
        { url: 'https://www.example.com/page3', status: 'scraped', id: 3 }
    ];
    populateWebpageList(dummyWebpages);

    switchSection('scrapingSection');
}
function populateWebpageList(webpages) {
    const webpageListDiv = document.getElementById('webpageList');
    webpageListDiv.innerHTML = ''; 

    webpages.forEach(page => {
        const pageDiv = document.createElement('div');
        pageDiv.textContent = `${page.url} - Status: ${page.status}`;
        pageDiv.addEventListener('click', () => showDataChunks(page.id)); // Add a click event listener
        webpageListDiv.appendChild(pageDiv);
    });
}

function showDataChunks(pageId){
    const dummyDataChunks = {
        1: ["Chunk 1 for page 1", "Chunk 2 for page 1", "Chunk 3 for page 1"],
        2: [],
        3:["Chunk 1 for page 3", "Chunk 2 for page 3"]
    };
     const chunks = dummyDataChunks[pageId];
    if (chunks && chunks.length > 0) {
        alert("Data chunks for page "+pageId +": \n" + chunks.join("\n"));
    } else {
      alert("No data found for this page");
    }
}
function nextScraping() {
  
    switchSection('integrationSection')
}
function testChatbot() {
    document.getElementById('chatbotContainer').classList.remove('hidden'); // Show chatbot
}

function integrateChatbot(){
    document.getElementById('integrationModal').classList.remove('hidden');
}
function closeModal(){
    document.getElementById('integrationModal').classList.add('hidden');
    hideAllModalPanels();
}
function showCopyPasteInstruction(){
    hideAllModalPanels();
    document.getElementById('copyPaste').classList.remove('hidden');
}
function showSendInstructions(){
    hideAllModalPanels();
    document.getElementById('sendInstructions').classList.remove('hidden');
}
function hideAllModalPanels(){
     document.getElementById('copyPaste').classList.add('hidden');
     document.getElementById('sendInstructions').classList.add('hidden');
}
function sendMail(){
    const email = document.getElementById('developerEmail').value
    console.log("Mail Sent to",email);
    alert("Mail sent to "+ email);
    closeModal()
}

function testIntegration() {
    document.getElementById('testIntegrationModal').classList.remove('hidden');
    document.getElementById('testStatus').innerHTML = "Testing integration...";
    setTimeout(() => {
        document.getElementById('testStatus').innerHTML = ""; // Clear loading message
        if (Math.random() > 0.5) {
            document.getElementById('integrationSuccessful').classList.remove('hidden');
        } else {
            document.getElementById('integrationFailed').classList.remove('hidden');
        }
    }, 2000);
}

function closeTestModal(){
    document.getElementById('testIntegrationModal').classList.add('hidden');
    document.getElementById('integrationSuccessful').classList.add('hidden');
    document.getElementById('integrationFailed').classList.add('hidden')
}
function openAdminPanel(){
    alert("Admin panel opened");
}
function startChatting(){
    alert("Start Chatting!");
}
function generateVerificationCode() {
    const code = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit code
    return String(code);
}
function registerUser() {
    const name = document.getElementById('regName').value;
    const email = document.getElementById('regEmail').value;
    const password = document.getElementById('regPassword').value;

    console.log('User Registered:', {name, email});

    verificationCodeGenerated = generateVerificationCode();
    console.log('Verification Code:', verificationCodeGenerated);

      alert(`Verification code has been sent to ${email}. The code is: ${verificationCodeGenerated}`);
    
     switchSection('verificationSection');
}
function sendMessage() {
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');

    if (chatInput.value.trim() === '') return;

    const userText = chatInput.value.toLowerCase(); 
    const userMsg = document.createElement('div');
    userMsg.textContent = "You: " + chatInput.value;
    userMsg.style.fontWeight = 'bold';
    chatMessages.appendChild(userMsg);

    chatInput.value = ''; 

    setTimeout(() => {
        
        const botMsg = document.createElement('div');
        botMsg.textContent = "Chatbot: " + getChatbotResponse(userText);
        chatMessages.appendChild(botMsg);
    }, 1000);
}

function getChatbotResponse(input) {
    const responses = {
        "hello": "Hi there! How can I assist you?",
        "hi": "Hello! Need help with something?",
        "hey": "Hey! How can I support you today?",
        "how are you": "I'm just a chatbot, but I'm here to help!",
        "what is beyondchats": "BeyondChats is an AI-powered chatbot platform for businesses.",
        "tell me about beyondchats": "BeyondChats helps businesses integrate AI chatbots easily with website scraping and training features.",
        "how does this chatbot work": "This chatbot processes your input and gives predefined responses based on keywords.",
        "how do i integrate beyondchats": "You can integrate BeyondChats by following the copy-paste instructions in the integration modal.",
        "how to setup beyondchats": "Simply follow the setup steps: Register > Verify Email > Setup Organization > Scrape Webpages > Integrate Chatbot!",
        "thank you": "You're welcome! Let me know if you need more help.",
        "bye": "Goodbye! Have a great day! 😊",
        "who made you": "I was created by the BeyondChats team to assist users like you!"
    };

    const fallbackResponses = [
        "I'm still learning! Can you rephrase that?",
        "Hmm... I don't have an answer for that yet.",
        "I'm not sure, but I can try to help!",
        "That's interesting! Can you give me more details?"
    ];

    return responses[input] || fallbackResponses[Math.floor(Math.random() * fallbackResponses.length)];
}

