const quotes = [
  "The quick brown fox jumps over the lazy dog.",
  "Look out! There are llamas!",
  "No, really, don't get up.",
  "Whatever",
  "Etc.",
  "egassem sdrawkcab.",
  "retsis ym tib ecno esøøm A .esøøm kitsejam eht gnidulcni ,slamina yrruf gnitseretni inäm dna ,metsys enøhpelet lufrëdnøw eht ,sekal ilevøl eht ees ,?rëy siht nedewS ni yadiløh a iert tøn iW",
  "LOL",
  "You got games on your phone?",
  "Teeth are just tiny hardened bats sleeping upside down.",
  "All Work and no play makes jack a dull boy.",
  "Do not trust anyone you see wearing this costume.",
  "You are receiving this email because Santa Claus has chosen you.",
  "WE MUST SURVIVE.",
  "Build a better mousetrap and get smarter mice.",
  "Block one site and two more shall take its place.",
  "Lorem ipsum dolor sit amet, adipiscing consequat adipiscing sit amet",
  "check steam",
  "We are all E G G",
  "Cephalopod Conundrums",
  "SOMETHING WONDERFUL HAS HAPPNED",
  "Me when get",
  "As seen on TV!",
  "Kind of dragon free!",
  "One of a kind!",
  "Yaaay!",
  "The bee's knees!",
  "Baby Yoda Is Our Leader",
  "Random splash!",
  "Uninflammable!",
  "Happiness has to be fought for.",
  "Cogito ergo sum!",
  "and then a skeleton popped out!",
  "I miss the cheese chain",
  "Deltarune Tomorrow",
  "Cow tools",
  "Your sister knows",
  "Grammy warned you not to talk to the wind, but you went ahead and talked to the wind, didn't you? Grammy warned you!",
  "SEE HOW THE SERFS WORK THE GROUND",
  "B E H I N D   Y O U",
  "THIS IS THE GREATEST PLAAAAAN!",
  "I Can Has Cheezburger?",
  "DARK DARKER YET DARKER THE DARKNESS KEEPS GROWING THE SHADOWS CUTTING DEEPER PHOTON READINGS NEGATIVE THIS NEXT EXPERIMENT SEEMS VERY VERY INTERESTING",
  "G R E A T E R   T H A N   L I F E",
  "Why you drive on a parkway and park in a driveway",
  "Emergency Frog Situation",
  "EUGENE! not again",
  "Me when games are unblocked",
  "But wait, here comes the parasympathetic nervous system with the chair!",
  "For the music of its crying, never dead, ever dying,",
  "This is not your grave but you are welcome in it",
  "Remember! Reality is an illusion, the universe is a hologram, buy gold! bye",
  "Mr. skinny legs wants to find you",
  "If we don't have a game, request it",
  "Don't turn left at the crossroads",
  "DO NOT GET WITHIN 6 FT OF THE ILLUMINATION",
  "This is a splash text!",
  "All copies of Arcade 5 are personalized",
  "penguin",
  "i forgor",
  "i rember",
  "We put the 'pro' in procrastination",
  "me when i the me the when the the me the when i the when the me the the the when the",
  "We're the website that's taking over the world.",
  "ǝɯoɔlǝM",
  "All your base are belong to us",
  "If u self-hosted this then ur cool.",
  "Do you think God stays in heaven because he too fears what he has created",
  "For every many that dreames up th electric lightbulb, there is the man who dreams up the atom bomb.",
  "The river does not flow with water.",
  "Remember When The Platform Was Sliding Into The Fire Pit, And I Said 'Goodbye,' And You Were Like 'No Way!' And Then I Was All, 'We Pretended We Were Going To Murder You.' That Was Great",
  "How Are You Holding Up? Because Im A Potato"
];

function displayRandomQuote() {
const quoteElement = document.getElementById("test");
const q = quotes[Math.floor(Math.random() * quotes.length)];

// Instantly hide the current text
quoteElement.style.opacity = "0";
quoteElement.style.animation = "none";

// Force browser to recognize the reset
void quoteElement.offsetWidth;

// Update text and restart fade animation
quoteElement.innerHTML = q;
quoteElement.style.animation = "fadeIn 1.2s ease forwards";
}
