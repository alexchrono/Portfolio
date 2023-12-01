function changeContent(source) {
    const dynamicText = document.getElementById('aboutMe');
    const layovers = document.querySelectorAll('.layover');
    const centerPicDisplay = document.querySelector('.toGrab')
    layovers.forEach(layover => layover.style.display = 'none');

    // Clear existing content
    dynamicText.textContent = '';

    // Create new elements
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    // ... add more paragraphs or other elements as needed

    if (source === 'Moodify') {
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');
        // const holderImg= document.createElement('img')
        // holderImg.src="./public/MoodifyScreenshot.PNG"
        // holderImg.className ='centerScreenRecords'
        centerPicDisplay.src = './public/MoodifyScreenshotPerfectedCroppedRight.PNG'
        paragraph1.textContent = 'Moodify';
        paragraph1.className = 'centerProject'
        paragraph2.textContent = 'A group project';
        paragraph2.className = 'linetwo'
        paragraph3.textContent = `A Spotify clone which was a joint effort between myself and three other very talented programmers.`
        paragraph4.textContent = `Truly a joy to work on,`


        dynamicText.appendChild(paragraph1)
        dynamicText.appendChild(paragraph2)
        // dynamicText.appendChild(holderImg)
        dynamicText.appendChild(paragraph3)
        dynamicText.appendChild(paragraph4)
        document.querySelector('.colm1 .layover1').style.display = 'none';

        document.querySelector('.colm2 .layover').style.display = 'flex';
    }
    else if (source === 'colm3') {
        document.querySelector('.colm1 .layover1').style.display = 'none';
        document.querySelector('.colm3 .layover').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');

        // Default content
        centerPicDisplay.src = './public/levelUpToEditCroppedPerfectToGo.png'
        paragraph1.textContent = 'Level Up Everything.';
        paragraph1.className = 'centerProject'
        paragraph2.textContent = 'A single Capstone project';
        paragraph2.className = 'linetwo'
        paragraph3.textContent = 'Level up Everything is a retro inspired clone of the website Habitica.  Users are able to track their daily habits and either receive gold/exp or health penalties, encouraging a user to live a better life  '
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
        const link = document.createElement('a')
        centerPicDisplay.src = './public/GitHub-logo-cropped-edited-perfected.png';

        // Default content
        paragraph1.textContent = 'Github';
        paragraph1.className = 'centerProject';
        paragraph2.textContent = 'My personal github account.  Feel free to follow along and see how green the garden is.';
        link.href = 'https://github.com/alexchrono';
        link.textContent = 'https://github.com/alexchrono';
        link.target = '_blank';


        paragraph3.appendChild(link);
        // paragraph4.textContent = `final stuff`
        // ... set text for other elements
        dynamicText.appendChild(paragraph1);
        dynamicText.appendChild(paragraph2);
        dynamicText.appendChild(paragraph3);
        // dynamicText.appendChild(paragraph4);

    }
    else if (source === 'colm11') {
        document.querySelector('.colm1 .layover1').style.display = 'none';
        document.querySelector('.colm11 .layover').style.display = 'flex';
        const paragraph3 = document.createElement('p');
        const paragraph4 = document.createElement('p');
        centerPicDisplay.src = './public/linkedInCroppedEditedPerfect.png'

        // Default content
        paragraph1.textContent = 'Linked in';
        paragraph1.className = 'centerProject';
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
        centerPicDisplay.src = './public/islandLuxuryForScreenshotEditedGreat.jpg'

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
        centerPicDisplay.src = './public/meInGlassesCropped.jpg'

        // Default content
        paragraph1.textContent = 'Hello and welcome to my humble portfolio.  Please Make yourself at home and enjoy your stay.';
        paragraph2.textContent = 'I am passionate about well scripted television, anime, and my cat Shyla. Oh!...and coding! first and foremost coding.  There is no greater feeling in the world than developing something new and sleek.  It truly fills a void I never knew I had.';
        paragraph3.textContent = 'When It comes to coding and learning new computer languages, one thing that sets me apart is the mindset in which I learn foreign languages.  THe question is not what I am able to say...the question is what do I WANT to say? I made this distinction long ago and live by it.  I am never satisfied until I can fully express myself.'
        paragraph4.textContent = `Another student may always reply with "I'm doing well, and you?" where myself will not be satisfied until I find the freedom to say "Kind of had a crappy morning. Stubbed my toe, burned my breakfast...but I'll manage"`
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
