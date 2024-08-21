// Get the modal
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalContent = document.getElementById("modalContent");
const span = document.getElementsByClassName("close")[0];

// Function to populate sections
function populateSections() {
    for (let key in infographicData) {
        const section = document.getElementById(key);
        section.addEventListener('click', () => openModal(key));
    }
}

// Function to open modal and display content
function openModal(sectionKey) {
    const sectionData = infographicData[sectionKey];
    modalTitle.textContent = sectionData.title;
    
    let content = '';
    if (sectionKey === 'keyTerminologies') {
        content = createTerminologyContent(sectionData.terms);
    } else {
        content = createSectionContent(sectionData.sections);
    }
    
    modalContent.innerHTML = content;
    modal.style.display = "block";
}

// Function to create content for regular sections
function createSectionContent(sections) {
    let content = '<ul>';
    sections.forEach(section => {
        content += `<li><h3>${section.title}</h3><ul>`;
        section.content.forEach(item => {
            content += `<li><strong>${item.subtitle}:</strong> ${item.text}</li>`;
        });
        content += '</ul></li>';
    });
    content += '</ul>';
    return content;
}

// Function to create content for terminology section
function createTerminologyContent(terms) {
    let content = '<ul>';
    terms.forEach(term => {
        content += `<li><strong>${term.term}:</strong> ${term.definition}</li>`;
    });
    content += '</ul>';
    return content;
}

// Close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// Close the modal if clicked outside
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Initialize the infographic
populateSections();