window.onload = function() {
    // Function is now scoped inside the onload function

    const showContact = function() {
        const wholePage=document.querySelector('#alexWrapper')

        Array.from(wholePage.children).forEach(child => {
            if (child.id !== 'masterForm') {
                wholePage.removeChild(child);
            }
        });
        // let masterDiv=document.createElement('div')
        // masterDiv.setAttribute('class','masterForm')
        // let newDiv=document.createElement('div')
        let aboutMenu= document.querySelector('#aboutMenu')

        aboutMenu.removeAttribute('class','active')
        let aboutResumee=document.querySelector('#aboutResumee')
        aboutResumee.removeAttribute('class','active')
        let aboutContactt=document.querySelector('#aboutContactt')
        aboutContactt.setAttribute('class','active')
        // newDiv.setAttribute('class','contactHolder')

        let hiddenForm=document.querySelector('#masterForm')
        console.log('hidden form is',hiddenForm)
        hiddenForm.style.visibility='visible'
    //     let script = document.createElement('script');
    // script.type = 'text/javascript';
    // script.src = 'https://form.jotform.com/jsform/240586343122047';

    //     newDiv.appendChild(script);
    //     masterDiv.appendChild(newDiv)
    //     wholePage.appendChild(masterDiv)


    };
    const showResume = function() {
        let hiddenForm=document.querySelector('#masterForm')
        console.log('hidden form is',hiddenForm)
        hiddenForm.style.visibility='hidden'
        const wholePage=document.querySelector('#alexWrapper')

        while (wholePage.firstChild) {
            wholePage.removeChild(wholePage.firstChild);
        }

        let newDiv=document.createElement('div')
        let aboutMenu= document.querySelector('#aboutMenu')
        aboutMenu.removeAttribute('class','active')
        let aboutContactt=document.querySelector('#aboutContactt')
        aboutContactt.removeAttribute('class','active')
        let aboutResumee=document.querySelector('#aboutResumee')
        aboutResumee.setAttribute('class','active')
        newDiv.setAttribute('class','resumeeHolder')


        let pdfIframe = document.createElement('iframe');
        pdfIframe.setAttribute('src', 'https://docs.google.com/document/d/e/2PACX-1vTWCXV4B8a-64tXUtuX-FtGooIfm1dZsQG9FfaCov0ndYffEPn2iPLcNZeIsHPHfyC4FKNcVWnyJyOE/pub?embedded=true');


        pdfIframe.style.width = '100%';
        pdfIframe.style.height = '100%';

        newDiv.appendChild(pdfIframe);
        wholePage.appendChild(newDiv)


    };


    const resumeLink = document.querySelector('#letsShowResumee');
    if (resumeLink) {
        resumeLink.addEventListener('click', function(event) {
            event.preventDefault();
            showResume();
        });
    }

    const contactLink = document.querySelector('#aboutContact');
    if (contactLink) {
        contactLink.addEventListener('click', function(event) {
            event.preventDefault();
            showContact();
        });
    }
};
