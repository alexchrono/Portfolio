function changeContent(source) {
    const dynamicText = document.getElementById('aboutMe');
    const layovers = document.querySelectorAll('.layover');
    layovers.forEach(layover => layover.style.display = 'none');

    // Clear existing content
    dynamicText.textContent = '';

    // Create new elements
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    // ... add more paragraphs or other elements as needed

    if (source === 'Moodify') {
        paragraph1.textContent = 'New paragraph for Moodify.';
        paragraph2.textContent = 'Additional details about Moodify...';
        // ... set text for other elements
        dynamicText.appendChild(paragraph1)
        dynamicText.appendChild(paragraph2)
        document.querySelector('.colm1 .layover1').style.display = 'none';

        document.querySelector('.colm2 .layover').style.display = 'flex';
    }
    else if (source === 'colm3') {
        document.querySelector('.colm1 .layover1').style.display = 'none';
        document.querySelector('.colm3 .layover').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');

        // Default content
        paragraph1.textContent = 'Level Up Everything.';
        paragraph2.textContent = 'Some lines explaining levelup';
        paragraph3.textContent = 'some more stuff.'
        paragraph4.textContent = `final stuff`
        // ... set text for other elements
        dynamicText.appendChild(paragraph1);
        dynamicText.appendChild(paragraph2);
        dynamicText.appendChild(paragraph3);
        dynamicText.appendChild(paragraph4);

    }
    else if (source === 'colm4') {
        document.querySelector('.colm1 .layover1').style.display = 'none';
        document.querySelector('.colm4 .layover').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');

        // Default content
        paragraph1.textContent = 'Github description';
        paragraph2.textContent = 'Some lines explaining github';
        paragraph3.textContent = 'some more stuff.'
        paragraph4.textContent = `final stuff`
        // ... set text for other elements
        dynamicText.appendChild(paragraph1);
        dynamicText.appendChild(paragraph2);
        dynamicText.appendChild(paragraph3);
        dynamicText.appendChild(paragraph4);

    }
    else if (source === 'colm11') {
        document.querySelector('.colm1 .layover1').style.display = 'none';
        document.querySelector('.colm11 .layover').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');

        // Default content
        paragraph1.textContent = 'Linked in description';
        paragraph2.textContent = 'Some lines explaining Linked in';
        paragraph3.textContent = 'some more stuff about Li.'
        paragraph4.textContent = `final stuff`
        // ... set text for other elements
        dynamicText.appendChild(paragraph1);
        dynamicText.appendChild(paragraph2);
        dynamicText.appendChild(paragraph3);
        dynamicText.appendChild(paragraph4);

    }
    else if (source === 'colm22') {
        document.querySelector('.colm1 .layover1').style.display = 'none';
        document.querySelector('.colm22 .layover').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');

        // Default content
        paragraph1.textContent = 'Island Luxury schpeal';
        paragraph2.textContent = 'Some lines explaining Island Luxury';
        paragraph3.textContent = 'some more stuff about isl lux.'
        paragraph4.textContent = `final stuff`
        // ... set text for other elements
        dynamicText.appendChild(paragraph1);
        dynamicText.appendChild(paragraph2);
        dynamicText.appendChild(paragraph3);
        dynamicText.appendChild(paragraph4);

    }
    else if (source === 'colm33') {
        document.querySelector('.colm1 .layover1').style.display = 'none';
        document.querySelector('.colm33 .layover').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');

        // Default content
        paragraph1.textContent = 'Languages stuff goes here';
        paragraph2.textContent = 'Langs go here';
        paragraph3.textContent = 'some more stuff about isl lux.'
        paragraph4.textContent = `final stuff`
        // ... set text for other elements
        dynamicText.appendChild(paragraph1);
        dynamicText.appendChild(paragraph2);
        dynamicText.appendChild(paragraph3);
        dynamicText.appendChild(paragraph4);

    }

    else if (source === 'colm44') {
        document.querySelector('.colm1 .layover1').style.display = 'none';
        document.querySelector('.colm44 .layover').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');

        // Default content
        paragraph1.textContent = 'this contact info';
        paragraph2.textContent = 'Some lines explaining Island Luxury';
        paragraph3.textContent = 'some more stuff about isl lux.'
        paragraph4.textContent = `final stuff`
        // ... set text for other elements
        dynamicText.appendChild(paragraph1);
        dynamicText.appendChild(paragraph2);
        dynamicText.appendChild(paragraph3);
        dynamicText.appendChild(paragraph4);

    }


    else if (source === 'default' || source === 'colm1') {
        document.querySelector('.colm1 .layover1').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');

        // Default content
        paragraph1.textContent = 'Hello and welcome to my humble portfolio.  Please Make yourself at home and enjoy your stay.';
        paragraph2.textContent = 'I am passionate about well scripted television, anime, and my cat Shyla. Oh!...and coding! first and foremost coding.  There is no greater feeling in the world than developing something new and sleek.  It truly fills a void I never knew I had.';
        paragraph3.textContent = 'When It comes to coding and learning new computer languages, one thing that sets me apart is the mindset in which I learn foreign languages.  THe question is not what I am able to say...the question is what do I WANT to say? I made this distinction long ago and live by it.  I am never satisfied until I can fully express myself.'
        paragraph4.textContent = `Another student may always reply with "I'm doing well, and you?" where myself will not be satisfied until I find the freedom to say "Kind of had a crappy morning. Stubbed my toe, burned breakfast...then the ex called`
        // ... set text for other elements
        dynamicText.appendChild(paragraph1);
        dynamicText.appendChild(paragraph2);
        dynamicText.appendChild(paragraph3);
        dynamicText.appendChild(paragraph4);

    }

    document.addEventListener('DOMContentLoaded', () => {
        changeContent('colm1');
    });

    // Append new elements to the container

    // ... append other elements as needed
}
