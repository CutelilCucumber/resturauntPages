//html content creation for page-load
export function loadReviews () {
    
    let parent = document.createElement('div');
    parent.setAttribute('id', 'container')
    document.getElementById('content').appendChild(parent);

    let newElement = document.createElement('h2')
    newElement.textContent = 'Last words from our patrons...';
    parent.appendChild(newElement);
    
    let container = document.createElement('div');
    container.setAttribute('class', 'reviewContainer');
    parent.appendChild(container);
    //first review
    let review = document.createElement('p');
    review.textContent = `"Exquisite. The texture was unlike anything I’ve tasted—both haunting and sublime. The servers were attentive but never overbearing. Ask about the 'Sacrifice' if you're feeling adventurous. And yes, it pairs beautifully with the Bordeaux."`;
    container.appendChild(review);

    newElement = document.createElement('h4');
    newElement.textContent = 'Jeffrey';
    review.appendChild(newElement);
    //second
    review = document.createElement('p');
    review.textContent = `"A rare find for connoisseurs of... elevated tastes. The tartare was transcendental, and the marrow brûlée left me speechless. Discretion is clearly their forte. The chef even accommodated a special request from my private cellar. Will return—if only to indulge my darker appetites."`;
    container.appendChild(review);

    newElement = document.createElement('h4');
    newElement.textContent = 'Richard';
    review.appendChild(newElement);
    //third
    review = document.createElement('p');
    review.textContent = `"Finally, a place that takes ethical sourcing seriously. My Source was prepared with reverence and skill. The sear? Impeccable. The presentation? A work of art. Worth every drop of anticipation."`;
    container.appendChild(review);

    newElement = document.createElement('h4');
    newElement.textContent = 'Hannibal';
    review.appendChild(newElement);
}