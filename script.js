// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// Botões de explorar coleção
const verProdutosBtn = document.getElementById('verProdutosBtn');
const ctaExclusivo = document.getElementById('ctaExclusivo');

function scrollToProdutos() {
    const produtosSection = document.getElementById('produtos');
    if (produtosSection) {
        produtosSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

if (verProdutosBtn) {
    verProdutosBtn.addEventListener('click', scrollToProdutos);
}

if (ctaExclusivo) {
    ctaExclusivo.addEventListener('click', scrollToProdutos);
}

// Modal
const modal = document.getElementById('productModal');
const closeBtn = document.querySelector('.modal-close-btn');
let selectedSize = null;

// Abrir modal
function openModal(produtoNome, produtoPreco, produtoImagem) {
    document.getElementById('modalProductName').textContent = produtoNome;
    document.getElementById('modalProductPrice').textContent = `R$ ${produtoPreco}`;
    
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = produtoImagem;
    mainImage.alt = produtoNome;
    
    // Configurar miniaturas
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb, index) => {
        thumb.src = produtoImagem;
    });
    
    // Reset tamanho
    selectedSize = null;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset thumbnail active
    document.querySelectorAll('.thumbnail-item').forEach((item, idx) => {
        if (idx === 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    modal.setAttribute('data-produto', produtoNome);
    modal.setAttribute('data-preco', produtoPreco);
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

// Fechar modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

if (closeBtn) {
    closeBtn.addEventListener('click', closeModal);
}

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// Tamanhos
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
    });
});

// Troca de imagens nas miniaturas
const thumbnailsItems = document.querySelectorAll('.thumbnail-item');
const mainImage = document.getElementById('modalMainImage');
const produtoImagemOriginal = '';

thumbnailsItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        thumbnailsItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        const imgSrc = item.querySelector('.thumbnail').src;
        mainImage.src = imgSrc;
    });
});

// WhatsApp
const modalWhatsBtn = document.getElementById('modalWhatsBtn');
const numeroWhatsApp = '5511999999999';

function enviarWhatsApp(nomeProduto, preco, tamanho) {
    let mensagem = `Olá! Gostaria de comprar o produto: *${nomeProduto}*`;
    mensagem += `\n💰 Valor: R$ ${preco}`;
    mensagem += tamanho ? `\n📏 Tamanho: *${tamanho}*` : `\n⚠️ Tamanho: *Não selecionado*`;
    mensagem += `\n\n✅ Entregam para todo Brasil?`;
    
    window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`, '_blank');
}

if (modalWhatsBtn) {
    modalWhatsBtn.addEventListener('click', () => {
        const produtoNome = modal.getAttribute('data-produto');
        const produtoPreco = modal.getAttribute('data-preco');
        
        if (!selectedSize) {
            alert('⚠️ Por favor, selecione um tamanho (P, M, G ou GG) antes de comprar!');
            return;
        }
        
        enviarWhatsApp(produtoNome, produtoPreco, selectedSize);
    });
}

// Clique nos produtos
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

// Botão WhatsApp dentro dos cards (se existir)
document.querySelectorAll('.btn-whatsapp-produto').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.product-card');
        const produtoNome = card.getAttribute('data-produto');
        const produtoPreco = card.getAttribute('data-preco');
        
        window.open(`https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(`Olá! Gostaria de comprar o produto: *${produtoNome}* - R$ ${produtoPreco}`)}`, '_blank');
    });
});

console.log('✅ ARAUJO FUTVOLEI - Modal profissional funcionando!');