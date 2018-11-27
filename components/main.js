    if (typeof document !== 'undefined') {
        const openNav = function() {
            document.getElementById("menu-mobile").style.width = "25rem";
        }
    }
    if (typeof document !== 'undefined') {
        const closeNav = function() {
            document.getElementById("menu-mobile").style.width = "0";
        }
    }

export { openNav };
export { closeNav };