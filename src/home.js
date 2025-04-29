//html content creation for page-load
export function loadHome () {
    
    let parent = document.createElement('div');
    parent.setAttribute('id', 'container')
    document.getElementById('content').appendChild(parent);

    let newElement = document.createElement('h1');
    newElement.textContent = 'You Are What You Eat';
    parent.appendChild(newElement);
    
    newElement = document.createElement('p')
    newElement.textContent = `Indulgence is not just a desire—it’s destiny. Hidden behind velvet drapes and gilded menus, we offer a dining experience that transcends the physical and whispers to the primal. Our chefs craft each dish with reverence, artistry, and the finest... human touch.\nDiscreet, decadent, and unapologetically intimate—this is cuisine for those who understand that the truest flavors are born from the bond between predator and prey.\n\nAfter all, isn’t it only natural to become what you consume?`;
    newElement.setAttribute('class', 'mainBody');
    parent.appendChild(newElement);
    
    newElement = document.createElement('h4')
    newElement.textContent = 'Call For A Reservation... We’re Dying to Hear From You';
    newElement.setAttribute('class', 'mainBody');
    parent.appendChild(newElement);

    newElement = document.createElement('h4')
    newElement.textContent = '(666)-666-6666';
    newElement.setAttribute('id', 'number');
    parent.appendChild(newElement);

    let newList = document.createElement('ul')
    parent.appendChild(newList);
    
    newElement = document.createElement('p')
    newElement.textContent = 'Hours of indulgence';
    newList.appendChild(newElement);

    newElement = document.createElement('li')
    newElement.textContent = 'Monday: 8pm-2am';
    newList.appendChild(newElement);

    newElement = document.createElement('li')
    newElement.textContent = 'Tuesday: 8pm-2am';
    newList.appendChild(newElement);

    newElement = document.createElement('li')
    newElement.textContent = 'Wednesday: 8pm-2am';
    newList.appendChild(newElement);

    newElement = document.createElement('li')
    newElement.textContent = 'Thursday: 8pm-2am';
    newList.appendChild(newElement);

    newElement = document.createElement('li')
    newElement.textContent = 'Friday: 6pm-4am';
    newList.appendChild(newElement);

    newElement = document.createElement('li')
    newElement.textContent = 'Saturday: 6pm-4am';
    newList.appendChild(newElement);
    
    newElement = document.createElement('li')
    newElement.textContent = 'Sunday: 8pm-12am';
    newList.appendChild(newElement);

    newElement = document.createElement('h3')
    newElement.textContent = `Bring Your Own Source – An Invitation for the Discerning Epicure`;
    newElement.setAttribute('class', 'mainBody');
    parent.appendChild(newElement);

    newElement = document.createElement('p')
    newElement.textContent = `For our most loyal patrons, we offer the exclusive BYOS program—an intimate collaboration between you and our chefs.\n\nAfter a thorough screening process (including legality checks and temperament evaluations), you may present a personally selected Source for bespoke preparation. Whether it’s a former rival, a willing participant, or an heirloom inheritance, our team ensures your Source is treated with the utmost respect, artistry, and subtlety.\n\nYour Source will undergo a multi-day marination and ritual purification before being rendered into a multi-course experience, tailored to both their attributes and your preferences. Dine in our Sealed Atrium, away from prying eyes, with personalized ambiance and service.\n\nAdvance booking required. Discretion guaranteed.`;
    newElement.setAttribute('class', 'mainBody');
    newElement.classList.add('closer');
    parent.appendChild(newElement);
}