//html content creation for page-load
export function loadReviews () {
    
    let parent = document.createElement('div');
    parent.setAttribute('id', 'container')
    document.getElementById('content').appendChild(parent);

    let newElement = document.createElement('h3')
    newElement.textContent = 'What they say...';
    parent.appendChild(newElement);
    
    newElement = document.createElement('p')
    newElement.textContent = 'This place works miracles. my husband and I shared a wonderful date night for the first time in ages while the staff took care of our children.';
    parent.appendChild(newElement);
    
}