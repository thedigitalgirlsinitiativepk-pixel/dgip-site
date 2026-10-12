/* Quiz data for each DG·IP skill module */
window.DGIP_GAMES = {
  "html-css": {
    id: "html-css",
    num: "01",
    title: "HTML & CSS Tag Match",
    course: "HTML & CSS",
    courseUrl: "html-css.html",
    blurb: "Match tags, properties and layout ideas. Build your web foundations one round at a time.",
    questions: [
      { q: "Which tag creates the largest heading?", options: ["<h6>", "<h1>", "<heading>", "<title>"], answer: 1 },
      { q: "Which attribute describes an image for accessibility?", options: ["src", "href", "alt", "title"], answer: 2 },
      { q: "Where should most CSS live for a clean project?", options: ["Inside every HTML tag", "In a separate .css file", "Only in JavaScript", "In the browser bookmark bar"], answer: 1 },
      { q: "Which CSS property changes text colour?", options: ["font-color", "text-style", "color", "paint"], answer: 2 },
      { q: "Flexbox is mainly used for…", options: ["Database queries", "Layout and alignment", "Virus scanning", "Email sending"], answer: 1 },
      { q: "Which tag wraps the main unique content of a page?", options: ["<main>", "<script>", "<meta>", "<link>"], answer: 0 }
    ]
  },
  "javascript": {
    id: "javascript",
    num: "02",
    title: "JavaScript Logic Sprint",
    course: "JavaScript Fundamentals",
    courseUrl: "javascript.html",
    blurb: "Variables, conditions and the DOM — race through bite-size challenges.",
    questions: [
      { q: "Which keyword declares a block-scoped variable you can reassign?", options: ["var only", "const", "let", "define"], answer: 2 },
      { q: "What does === check?", options: ["Only value", "Value and type", "Only type", "Memory address"], answer: 1 },
      { q: "Which method selects one element by CSS selector?", options: ["getElement", "querySelector", "findTag", "pickOne"], answer: 1 },
      { q: "An array index in JavaScript starts at…", options: ["1", "0", "-1", "10"], answer: 1 },
      { q: "What does addEventListener do?", options: ["Deletes a file", "Runs code when an event happens", "Styles a page", "Creates a database"], answer: 1 },
      { q: "Which value is falsy?", options: ["\"0\"", "[]", "0", "{}"], answer: 2 }
    ]
  },
  "python": {
    id: "python",
    num: "03",
    title: "Python Puzzle Run",
    course: "Python Programming",
    courseUrl: "python.html",
    blurb: "Syntax, loops and functions — solve short puzzles like a mini coding sprint.",
    questions: [
      { q: "How do you start a comment in Python?", options: ["//", "<!-- -->", "#", "/* */"], answer: 2 },
      { q: "Which type stores key–value pairs?", options: ["list", "tuple", "dict", "set only"], answer: 2 },
      { q: "What does len(\"DGIP\") return?", options: ["3", "4", "5", "Error"], answer: 1 },
      { q: "Which loop is best when you know how many times to repeat?", options: ["for", "while forever", "switch", "goto"], answer: 0 },
      { q: "A function is defined with…", options: ["function name():", "def name():", "func name[]", "method name{}"], answer: 1 },
      { q: "What catches errors so a program does not crash?", options: ["try / except", "hope / wish", "print / input", "open / close"], answer: 0 }
    ]
  },
  "design": {
    id: "design",
    num: "04",
    title: "UI/UX Design Detective",
    course: "Graphic Design & UI/UX",
    courseUrl: "design.html",
    blurb: "Spot good design choices — contrast, hierarchy and user-first thinking.",
    questions: [
      { q: "UI mainly focuses on…", options: ["Server speed", "How the interface looks and behaves", "Tax law", "Battery life only"], answer: 1 },
      { q: "UX mainly focuses on…", options: ["The user’s overall experience", "Only choosing fonts", "Writing SQL", "Hosting domains"], answer: 0 },
      { q: "Visual hierarchy helps users…", options: ["Ignore important buttons", "See what matters first", "Hide all text", "Disable colour"], answer: 1 },
      { q: "Good contrast means…", options: ["Text is hard to read", "Text is easy to read against the background", "Everything is the same grey", "No borders ever"], answer: 1 },
      { q: "A wireframe is usually…", options: ["A finished photo-realistic mock", "A simple layout sketch of structure", "A virus scan report", "A Python package"], answer: 1 },
      { q: "Whitespace in design is…", options: ["Wasted space to avoid", "Useful breathing room for clarity", "Only for print newspapers", "A coding error"], answer: 1 }
    ]
  },
  "cybersecurity": {
    id: "cybersecurity",
    num: "05",
    title: "Cyber Safety Challenge",
    course: "Cybersecurity Awareness",
    courseUrl: "cybersecurity.html",
    blurb: "Phishing, passwords and safe habits — protect yourself like a digital defender.",
    questions: [
      { q: "A strong password is usually…", options: ["Your name + 123", "Long, unique and hard to guess", "Shared with friends", "Written on a sticky note on the monitor"], answer: 1 },
      { q: "Phishing emails often…", options: ["Ask you to click urgent fake links", "Only send flowers", "Fix your code automatically", "Turn off the internet"], answer: 0 },
      { q: "Two-factor authentication (2FA) adds…", options: ["A second proof of identity", "A second keyboard", "A second email address only", "Nothing useful"], answer: 0 },
      { q: "HTTPS in a URL means…", options: ["The connection is encrypted", "The site is always trustworthy forever", "No password is needed", "It is a government website"], answer: 0 },
      { q: "You should update software because…", options: ["Updates only change colours", "Updates often patch security holes", "Updates delete all files", "Updates are illegal"], answer: 1 },
      { q: "Public Wi‑Fi is safer when you…", options: ["Bank with no protection", "Avoid sensitive logins or use a VPN", "Share your password with strangers", "Disable your firewall always"], answer: 1 }
    ]
  },
  "data-science": {
    id: "data-science",
    num: "06",
    title: "Data Science Clue Hunt",
    course: "Data Science Basics",
    courseUrl: "data-science.html",
    blurb: "Charts, averages and clean data — find the clues hidden in numbers.",
    questions: [
      { q: "A row in a dataset usually represents…", options: ["One observation / record", "Only a colour", "A password", "A font family"], answer: 0 },
      { q: "The average of 2, 4 and 6 is…", options: ["4", "6", "12", "2"], answer: 0 },
      { q: "A bar chart is best for…", options: ["Comparing categories", "Playing music", "Encrypting files", "Writing essays"], answer: 0 },
      { q: "Missing values in data are often called…", options: ["Null / NaN / blank", "Perfect data", "CSS bugs", "VPN tunnels"], answer: 0 },
      { q: "Cleaning data means…", options: ["Fixing errors and inconsistencies before analysis", "Deleting the whole project", "Only changing fonts", "Uploading viruses"], answer: 0 },
      { q: "Correlation means…", options: ["Two variables tend to move together", "Two variables are always identical forever", "A type of keyboard", "A CSS layout"], answer: 0 }
    ]
  },
  "digital-literacy": {
    id: "digital-literacy",
    num: "07",
    title: "Digital Literacy Quest",
    course: "Digital Literacy & Safety",
    courseUrl: "digital-literacy.html",
    blurb: "Online citizenship, privacy and smart searching — level up your everyday digital skills.",
    questions: [
      { q: "Digital literacy means…", options: ["Using tech tools confidently and responsibly", "Only playing games", "Avoiding the internet forever", "Owning the newest phone"], answer: 0 },
      { q: "Before sharing a news post you should…", options: ["Check if the source is reliable", "Share it as fast as possible", "Change the headline randomly", "Ignore the date"], answer: 0 },
      { q: "Privacy settings help you…", options: ["Control who sees your information", "Make your battery last forever", "Write Python faster", "Hide from your own files"], answer: 0 },
      { q: "A good search query is usually…", options: ["Specific and clear", "One random letter", "Only emojis", "Your password"], answer: 0 },
      { q: "Copyright means…", options: ["Creators have rights over their original work", "Anyone can claim any image as theirs forever with no rules", "Only applies to books from 1800", "Is a type of Wi‑Fi"], answer: 0 },
      { q: "Cyberbullying should be…", options: ["Reported and not ignored", "Encouraged", "Posted publicly for fun", "Called a skill"], answer: 0 }
    ]
  },
  "entrepreneurship": {
    id: "entrepreneurship",
    num: "08",
    title: "Startup Founder Flashcards",
    course: "Tech Entrepreneurship",
    courseUrl: "entrepreneurship.html",
    blurb: "Customers, MVPs and value — think like a founder in quick rounds.",
    questions: [
      { q: "An MVP is…", options: ["A Minimum Viable Product to test an idea", "A Maximum Virtual Password", "A type of CSS grid", "A government form"], answer: 0 },
      { q: "A value proposition explains…", options: ["Why customers should care about your offer", "Your favourite colour", "Only your office address", "How to install Python"], answer: 0 },
      { q: "Talking to potential users early helps you…", options: ["Learn real needs before building too much", "Avoid all customers forever", "Skip learning", "Hide your product"], answer: 0 },
      { q: "Revenue means…", options: ["Money coming into the business", "Only likes on social media", "A coding language", "A font weight"], answer: 0 },
      { q: "A competitor analysis helps you…", options: ["Understand similar products in the market", "Delete the internet", "Write HTML tags", "Charge your laptop"], answer: 0 },
      { q: "Iteration means…", options: ["Improving the product based on feedback", "Never changing anything", "Copying passwords", "Closing the business on day one"], answer: 0 }
    ]
  }
};
