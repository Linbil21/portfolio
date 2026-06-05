(function () {
    // Get the prefix path from the data-prefix attribute on the script tag
    const currentScript = document.currentScript;
    const prefix = currentScript ? (currentScript.getAttribute('data-prefix') || './') : './';

    const headerHTML = `
    <header>
        <div class="logo">
            <a href="${prefix}index.html" class="logo-link">
                <img src="${prefix}logo.png" alt="Linbil Celestre Logo" class="logo-img">
                <span class="logo-text">Linbil | Portfolio</span>
            </a>
        </div>
        <nav>
            <ul>
                <li><a href="${prefix}index.html">Home</a></li>
                <li><a href="${prefix}About/index.html">About</a></li>
                <li><a href="${prefix}Projects/index.html">Projects</a></li>
                <li><a href="${prefix}Contact/index.html">Contact</a></li>
            </ul>
        </nav>
    </header>
    `;

    // Inject the header at the very beginning of the body element
    document.body.insertAdjacentHTML('afterbegin', headerHTML);
})();

