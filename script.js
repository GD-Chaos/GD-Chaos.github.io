const initialContent = document.getElementById("initialContent");
const videoContainer = document.getElementById("videoContainer");
const laughContainer = document.getElementById("laughContainer");
const y = document.getElementById("YES");
const n = document.getElementById("no");

function showSkelly()
{
    videoContainer.classList.remove('hidden');
    initialContent.classList.add('hidden');
}

function showLaugh()
{
    laughContainer.classList.remove('hidden');
    initialContent.classList.add('hidden');
}

function showInitial1()
{
    videoContainer.classList.add('hidden');
    laughContainer.classList.add('hidden');
    initialContent.classList.remove('hidden');
}

y.addEventListener('click', showSkelly);
n.addEventListener('click', showLaugh);
