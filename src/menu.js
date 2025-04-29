//html content creation for page-load
export function loadMenu () {
    
    let parent = document.createElement('div');
    parent.setAttribute('id', 'container')
    document.getElementById('content').appendChild(parent);

    let newElement = document.createElement('h3')
    newElement.textContent = 'Menu';
    parent.appendChild(newElement);
    
    let newList = document.createElement('ul')
    parent.appendChild(newList);
    
    newElement = document.createElement('li')
    newElement.textContent = 'some foods';
    newList.appendChild(newElement);
}