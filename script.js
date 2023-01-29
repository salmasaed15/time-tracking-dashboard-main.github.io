const stateLinks = document.querySelectorAll(".stateLink");
const trackLinks = document.querySelectorAll(".tracks");

for (i = 0; i < trackLinks.length; i++) {
    trackLinks[i].style.display = "none"
} 

function openTrack(evt, tracksName) {
    for (i = 0; i < trackLinks.length; i++) {
        trackLinks[i].style.display = "none"
    }

    for (i = 0; i < stateLinks.length; i++) {
        stateLinks[i].className = stateLinks[i].className.replace(" active", "");
        }

    document.getElementById(tracksName).style.cssText = `
    display: block; 
    display: grid;
    gap: 15px 15px;
    grid-templete-columns: auto auto auto;
    @media (max-width=375ps){
        display:flex;
        flex-direction:column;
    }
    `;
        evt.currentTarget.className += " active";
        
}
