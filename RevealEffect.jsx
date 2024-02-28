export const RevealEffect = (revealType, revealPt) => {

    const revealTypes = ['up2down', 'down2up' , 'left2right', 'right2left', 'fadeIn', 'fadeOut'];
    const reveals = document.querySelectorAll('.reveal');
    
    const classesImplementation = async () => {
        for (let i = 0; i < reveals.length; i++){
        reveals[i].classList.add(`${revealType}`); 
        }
    };

    const revealEffectTrigger = () => {
        const windowHeight = window.innerHeight;
        const revealPoint = revealPt;

        for (let i = 0; i < reveals.length; i++) {
            let revealTop = reveals[i].getBoundingClientRect().top;

            (revealTop < windowHeight - revealPoint) ? reveals[i].classList.add(revealType, 'active') : reveals[i].classList.remove('active');
        }
    }

    revealTypes.includes(revealType) && (async() => {
        await classesImplementation();

        window.addEventListener('scroll', revealEffectTrigger);
    })();

}; 