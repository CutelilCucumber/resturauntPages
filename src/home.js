//html content creation for page-load
export function loadHome () {
    
    let parent = document.createElement('div');
    parent.setAttribute('id', 'container')
    document.getElementById('content').appendChild(parent);

    let newElement = document.createElement('h1');
    newElement.textContent = 'You Are What You Eat';
    parent.appendChild(newElement);
    
    newElement = document.createElement('h3')
    newElement.textContent = 'Only the finest.';
    parent.appendChild(newElement);
    
    let newList = document.createElement('ul')
    parent.appendChild(newList);
    
    newElement = document.createElement('p')
    newElement.textContent = 'Hours of operation';
    newList.appendChild(newElement);
}