async function showDevVisibility({title, confirmButtonText, denyButtonText, html}) {
    const showDevVisibility = await Swal.fire({
        title,
        html,
        showDenyButton: true,
        confirmButtonText,
        denyButtonText
    });
    localStorage.setItem("hideDevVisibilityCheck", document.querySelector("#hideDevVisibilityCheck").checked ? "true" : "false")
    if (showDevVisibility.isConfirmed) {
        hideDevInfo ();
    };
};

const showDevVisibilityLangs = {
    "BR": {
        title: 
        `Para tornar meu site mais acessível para quem não entende de programação, você pode ocultar as partes mais técnicas voltadas exclusivamente para programação. Essa opção pode ser ajustada no menu de navegação.`,
        confirmButtonText: "Sim, desejo ocultar!",
        denyButtonText: "Não, pode manter!",
        html: `
        <input class="form-check-input" type="checkbox" value="" id="hideDevVisibilityCheck" checked>
        <label class="form-check-label" for="hideDevVisibilityCheck">
          Não mostrar isso novamente
        </label>
        `
    },
    "EN": {
        title: 
        `To make my website more concise for those who don't understand programming,
        you have the option to hide the more technical parts that only talk about programming. Remember that you can control this in the navigation menu.`,
        confirmButtonText: "Yes, I want to hide!",
        denyButtonText: "No, you can keep it!",
        html: `
        <input class="form-check-input" type="checkbox" value="" id="hideDevVisibilityCheck" checked>
        <label class="form-check-label" for="hideDevVisibilityCheck">
          Do not show this again
        </label>
        `
    }
};