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

    // In a real app, we'd validate, submit to the backend, and then proceed
     console.log('User Registered:', {name, email});
      // Generate and store a random verification code (simulated)
    verificationCodeGenerated = generateVerificationCode();
    console.log('Verification Code:', verificationCodeGenerated);
    alert('Verification code sent to your email. Please check console for code.')
     // In a real app, you would send the code by email using a backend server
     switchSection('verificationSection');
}

function verifyEmail(){
    const verificationCode = document.getElementById("verificationCode").value
     // Verify User
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
   // Fetch meta description (this would be a server side job in a real app)
    console.log('Organization Details:', {companyName, companyUrl});

    // Simulate fetching data from the backend
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
    webpageListDiv.innerHTML = ''; // clear previous data

    webpages.forEach(page => {
        const pageDiv = document.createElement('div');
        pageDiv.textContent = `${page.url} - Status: ${page.status}`;
        pageDiv.addEventListener('click', () => showDataChunks(page.id)); // Add a click event listener
        webpageListDiv.appendChild(pageDiv);
    });
}
//Simulated data chunk
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
    //Move to next
    switchSection('integrationSection')
}
function testChatbot(){
    document.getElementById('chatbotTestFrame').classList.remove('hidden');
    document.getElementById('websiteFrame').src = document.getElementById('companyUrl').value; // set iframe URL
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
function testIntegration(){
    document.getElementById('testIntegrationModal').classList.remove('hidden');
    setTimeout(() => {
      if (Math.random() > 0.5) {
           document.getElementById('testStatus').innerHTML = ""; //clear any initial state
            document.getElementById('integrationSuccessful').classList.remove('hidden')
      } else{
          document.getElementById('testStatus').innerHTML = ""; //clear any initial state
        document.getElementById('integrationFailed').classList.remove('hidden')
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

    // In a real app, we'd validate, submit to the backend, and then proceed
    console.log('User Registered:', {name, email});

      // Generate and store a random verification code (simulated)
    verificationCodeGenerated = generateVerificationCode();
    console.log('Verification Code:', verificationCodeGenerated);

      alert(`Verification code has been sent to ${email}. The code is: ${verificationCodeGenerated}`);
     // In a real app, you would send the code by email using a backend server
     switchSection('verificationSection');
}