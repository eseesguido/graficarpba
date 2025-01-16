document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    if (faqItems.length === 0) {
        console.error("No se encontraron elementos FAQ en el HTML.");
        return;
    }

    faqItems.forEach(item => {
        const question = item.querySelector(".faq-question");

        if (!question) {
            console.error("No se encontró un elemento con clase .faq-question dentro de un .faq-item");
            return;
        }

        question.addEventListener("click", () => {
            // Alterna la clase 'active' en el ítem actual
            item.classList.toggle("active");

            // Comportamiento tipo acordeón (opcional)
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });

    console.log("El script se cargó correctamente y está funcionando.");
});
