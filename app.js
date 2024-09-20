document.addEventListener('DOMContentLoaded', function() {
    // Galería - Carrusel
    const galleryCarousel = document.querySelector('#gallery .carousel-inner');
    const galleryItems = document.querySelectorAll('#gallery .carousel-item');
    const galleryPrevButton = document.querySelector('#gallery .carousel-button.prev');
    const galleryNextButton = document.querySelector('#gallery .carousel-button.next');
    let galleryIndex = 0;

    function showGalleryItem(index) {
        const itemWidth = galleryItems[0].offsetWidth; // Ancho de un item
        const offset = index * itemWidth; // Desplazamiento para el ítem actual
        galleryCarousel.style.transform = `translateX(-${offset}px)`;
    }

    galleryPrevButton.addEventListener('click', function() {
        galleryIndex = (galleryIndex > 0) ? galleryIndex - 1 : galleryItems.length - 1;
        showGalleryItem(galleryIndex);
    });

    galleryNextButton.addEventListener('click', function() {
        galleryIndex = (galleryIndex < galleryItems.length - 1) ? galleryIndex + 1 : 0;
        showGalleryItem(galleryIndex);
    });

    // Inicializa la vista del carrusel
    showGalleryItem(galleryIndex);

    // Servicios - Carrusel
    const servicesCarousel = document.querySelector('#services .services-carousel .carousel-inner');
    const servicesItems = document.querySelectorAll('#services .service');
    const servicesPrevButton = document.querySelector('#services .carousel-button.prev');
    const servicesNextButton = document.querySelector('#services .carousel-button.next');
    let servicesIndex = 0;

    function showServiceItem(index) {
        const itemWidth = servicesItems[0].offsetWidth; // Ancho de un item
        const offset = index * itemWidth; // Desplazamiento para el ítem actual
        servicesCarousel.style.transform = `translateX(-${offset}px)`;

        // Silenciar el video y pausar el video anterior
        servicesItems.forEach((item, i) => {
            const video = item.querySelector('video');
            if (video) {
                if (i === index) {
                    video.volume = 0; // Silenciar el video actual
                    video.play(); // Reproducir el video actual
                } else {
                    video.pause(); // Pausar videos que no están visibles
                    video.currentTime = 0; // Reiniciar el video a su posición inicial
                }
            }
        });
    }

    servicesPrevButton.addEventListener('click', function() {
        servicesIndex = (servicesIndex > 0) ? servicesIndex - 1 : servicesItems.length - 1;
        showServiceItem(servicesIndex);
    });

    servicesNextButton.addEventListener('click', function() {
        servicesIndex = (servicesIndex < servicesItems.length - 1) ? servicesIndex + 1 : 0;
        showServiceItem(servicesIndex);
    });

    // Inicializa la vista del carrusel
    showServiceItem(servicesIndex);

    // Carrito de Compras
    const cartButton = document.querySelector('.cart-button');
    const cartModal = document.getElementById('cart-modal');
    const closeCartButton = document.querySelector('#cart-modal .close-button');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    const cartItemsContainer = document.getElementById('cart-items');

    let cartItems = [];

    // Mostrar el modal del carrito
    cartButton.addEventListener('click', function() {
        cartModal.style.display = 'block';
        updateCartDisplay();
    });

    // Cerrar el modal del carrito
    closeCartButton.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        }
    });

    // Añadir elementos al carrito
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function() {
            const service = this.parentElement.querySelector('h3').innerText;
            const prices = this.parentElement.querySelector('.price').innerText;
            const item = { service, prices };
            cartItems.push(item);
            updateCartDisplay();
            alert(`${service} añadido al carrito.`);
        });
    });

    // Actualizar la visualización del carrito
    function updateCartDisplay() {
        cartItemsContainer.innerHTML = '';
        cartItems.forEach((item, index) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${item.service} - ${item.prices}`;
            cartItemsContainer.appendChild(listItem);
        });
    }

    // Sección de pago futura (Botón de pago)
    const checkoutButton = document.getElementById('checkout-button');
    checkoutButton.addEventListener('click', function() {
        alert('Funcionalidad de pago estará disponible próximamente.');
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const answer = faqItem.querySelector('.faq-answer');

            // Alternar la clase 'open'
            faqItem.classList.toggle('open');
            
            // Cerrar las otras respuestas si se abre una nueva
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) {
                    item.classList.remove('open');
                }
            });
        });
    });
});
