// MENU MOBILE
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// BOTÕES EXPLORAR
const verProdutosBtn = document.getElementById('verProdutosBtn');
const ctaExclusivo = document.getElementById('ctaExclusivo');

function scrollToProdutos() {
    const produtosSection = document.getElementById('produtos');
    if (produtosSection) {
        produtosSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

if (verProdutosBtn) verProdutosBtn.addEventListener('click', scrollToProdutos);
if (ctaExclusivo) ctaExclusivo.addEventListener('click', scrollToProdutos);

// ALERTA PERSONALIZADO
const customAlert = document.getElementById('customAlert');

window.showAlert = function(message) {
    if (customAlert) {
        const alertMessage = customAlert.querySelector('p');
        if (alertMessage && message) {
            alertMessage.textContent = message;
        }
        customAlert.classList.add('show');
        setTimeout(() => {
            closeAlert();
        }, 3000);
    }
}

window.closeAlert = function() {
    if (customAlert) {
        customAlert.classList.remove('show');
    }
}

if (customAlert) {
    customAlert.addEventListener('click', (e) => {
        if (e.target === customAlert) closeAlert();
    });
}

// MODAL
const modal = document.getElementById('productModal');
const modalClose = document.querySelector('.modal-close-btn');
let selectedSize = null;

function openModal(produtoNome, produtoPreco, produtoImagem) {
    document.getElementById('modalProductName').textContent = produtoNome;
    document.getElementById('modalProductPrice').textContent = `R$ ${produtoPreco}`;
    
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = produtoImagem;
    
    document.querySelectorAll('.thumbnail').forEach(thumb => {
        thumb.src = produtoImagem;
    });
    
    selectedSize = null;
    document.querySelectorAll('.size-btn').forEach(btn => btn.classList.remove('active'));
    
    document.querySelectorAll('.thumbnail-item').forEach((item, idx) => {
        if (idx === 0) item.classList.add('active');
        else item.classList.remove('active');
    });
    
    modal.setAttribute('data-produto', produtoNome);
    modal.setAttribute('data-preco', produtoPreco);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

if (modalClose) modalClose.addEventListener('click', closeModal);
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) closeModal();
});

// TAMANHOS
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
    });
});

// MINIATURAS
const thumbnailsItems = document.querySelectorAll('.thumbnail-item');
const mainImage = document.getElementById('modalMainImage');

thumbnailsItems.forEach((item) => {
    item.addEventListener('click', () => {
        thumbnailsItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        const thumbImg = item.querySelector('.thumbnail');
        if (thumbImg && thumbImg.src) {
            mainImage.src = thumbImg.src;
        }
    });
});

// WHATSAPP - NÚMERO CORRETO
const numeroWhatsApp = '5543991471566';

function enviarWhatsApp(nomeProduto, preco, tamanho) {
    const data = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR');
    const hora = data.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
   
}

// Botão WhatsApp no modal
const modalWhatsBtn = document.getElementById('modalWhatsBtn');
if (modalWhatsBtn) {
    modalWhatsBtn.addEventListener('click', () => {
        const produtoNome = modal.getAttribute('data-produto');
        const produtoPreco = modal.getAttribute('data-preco');
        
        if (!selectedSize) {
            showAlert('⚠️ Selecione um tamanho (P, M, G ou GG) antes de comprar!');
            return;
        }
        
        enviarWhatsApp(produtoNome, produtoPreco, selectedSize);
    });
}

// CLIQUE NOS PRODUTOS
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
        const produtoNome = card.getAttribute('data-produto');
        const produtoPreco = card.getAttribute('data-preco');
        const produtoImagem = card.getAttribute('data-imagem');
        
        if (produtoNome && produtoPreco && produtoImagem) {
            openModal(produtoNome, produtoPreco, produtoImagem);
        }
    });
});

console.log('✅ ARAUJO FUTVOLEI - Site funcionando perfeitamente!');