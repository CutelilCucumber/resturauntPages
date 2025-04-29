//html content creation for page-load
export function loadMenu () {
    
    let parent = document.createElement('div');
    parent.setAttribute('id', 'container')
    document.getElementById('content').appendChild(parent);

    //create appetizer menu
    let newElement = document.createElement('h2')
    newElement.textContent = 'Appetizers';
    parent.appendChild(newElement);
    
    let newUl = document.createElement('ul');
    newUl.setAttribute('class', 'menuContainer');
    parent.appendChild(newUl);
    
    let newLi = document.createElement('li');
    newLi.textContent = 'Charred Long Pig Croquette';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'Smoked root vegetables and “free-range protein” encased in golden panko, served with bone marrow aioli.';
    newLi.appendChild(newElement);

    newLi = document.createElement('li');
    newLi.textContent = 'Crimson Tartare';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'Finely minced "foraged" meat, hand-chopped and tossed with shallot, quail egg, fermented black garlic, and heirloom capers. Served raw.';
    newLi.appendChild(newElement);

    newLi = document.createElement('li');
    newLi.textContent = 'Young Velouté';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'A creamy, silky bisque made from select tender cuts, lightly poached in milk and wine with whispers of nutmeg and coriander.';
    newLi.appendChild(newElement);


    //create Main course menu
    newElement = document.createElement('h2')
    newElement.textContent = 'Main Course';
    parent.appendChild(newElement);
    
    newUl = document.createElement('ul');
    newUl.setAttribute('class', 'menuContainer');
    parent.appendChild(newUl);
    
    newLi = document.createElement('li');
    newLi.textContent = `Chef’s Select Rib “From the Source”`;
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'Slow-roasted, bone-in heritage cut, dry-aged to perfection and glazed with a reduction of blood-orange, veal stock, and "private cellar" port.';
    newLi.appendChild(newElement);

    newLi = document.createElement('li');
    newLi.textContent = 'The Sacrifice';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'A whole, deconstructed loin presented tableside and seared over Himalayan salt. Served with blistered grapes, forest truffle oil, and a hint of sorrow.';
    newLi.appendChild(newElement);

    newLi = document.createElement('li');
    newLi.textContent = 'Braised Choice Limb';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'Marinated in absinthe and herbs, then slow-cooked until the muscle fibers nearly weep apart. Finished with crisped skin and ash-dusted leeks.';
    newLi.appendChild(newElement);

    //create dessert menu
    newElement = document.createElement('h2')
    newElement.textContent = 'Dessert';
    parent.appendChild(newElement);
    
    newUl = document.createElement('ul');
    newUl.setAttribute('class', 'menuContainer');
    parent.appendChild(newUl);
    
    newLi = document.createElement('li');
    newLi.textContent = 'Blood Velvet Pavé';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'Layers of dark cacao sponge soaked in cherry liqueur and a "red secret," with mascarpone cream and gold-leaf garnish.';
    newLi.appendChild(newElement);

    newLi = document.createElement('li');
    newLi.textContent = 'Marrow Crème Brûlée';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'A rich custard steeped with bone marrow and Madagascar vanilla, topped with a caramelized sugar shell and sugared thyme.';
    newLi.appendChild(newElement);

    //create drinks menu
    newElement = document.createElement('h2')
    newElement.textContent = 'Drinks';
    parent.appendChild(newElement);
    
    newUl = document.createElement('ul');
    newUl.setAttribute('class', 'menuContainer');
    parent.appendChild(newUl);
    
    newLi = document.createElement('li');
    newLi.textContent = 'Red Market Negroni';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'Classic with a twist: infused gin, crimson bitters, and a vermouth aged in oak barrels once used to store "preserved imports."';
    newLi.appendChild(newElement);

    newLi = document.createElement('li');
    newLi.textContent = 'Still Beating';
    newUl.appendChild(newLi);

    newElement = document.createElement('p');
    newElement.textContent = 'A shaken cocktail of beet syrup, vodka, black pepper, and an herbal tincture that “awakens the primal.” Served over a large, heart-shaped ice cube.';
    newLi.appendChild(newElement);
}