// ============================================
// MENU MOBILE
// ============================================
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });
}

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// ============================================
// BOTÕES "EXPLORAR COLEÇÃO" (CORRIGIDO)
// ============================================
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

// ============================================
// MODAL DO PRODUTO (CORRIGIDO)
// ============================================
const modal = document.getElementById('productModal');
const modalClose = document.querySelector('.modal-close');
let selectedSize = null;

// Dados dos tamanhos disponíveis
const tamanhosDisponiveis = ['P', 'M', 'G', 'GG'];

// Função para abrir o modal
function openModal(produtoNome, produtoPreco, produtoImagem) {
    // Preencher dados do produto
    document.getElementById('modalProductName').textContent = produtoNome;
    document.getElementById('modalProductPrice').textContent = `R$ ${produtoPreco}`;
    
    // Configurar imagem principal
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = produtoImagem;
    mainImage.alt = produtoNome;
    
    // Configurar miniaturas (usando a mesma imagem por enquanto)
    const thumbnails = document.querySelectorAll('.thumbnail');
    const imagensThumb = [produtoImagem, produtoImagem, produtoImagem, produtoImagem];
    
    thumbnails.forEach((thumb, index) => {
        if (imagensThumb[index]) {
            thumb.src = imagensThumb[index];
            thumb.alt = `${produtoNome} - visão ${index + 1}`;
        }
    });
    
    // Resetar tamanho selecionado
    selectedSize = null;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Armazenar dados no modal para usar no WhatsApp
    modal.setAttribute('data-produto', produtoNome);
    modal.setAttribute('data-preco', produtoPreco);
    modal.setAttribute('data-imagem', produtoImagem);
    
    // Mostrar modal
    modal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Travar scroll da página
}

// Função para fechar o modal
function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = ''; // Liberar scroll
}

// Evento de fechar modal
if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

// Fechar modal ao clicar fora do conteúdo
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

// Evento para tecla ESC fechar modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
        closeModal();
    }
});

// ============================================
// SELETORES DE TAMANHO (P, M, G, GG)
// ============================================
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover active de todos
        document.querySelectorAll('.size-btn').forEach(b => {
            b.classList.remove('active');
        });
        // Adicionar active no clicado
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
    });
});

// ============================================
// BOTÃO COMPRAR VIA WHATSAPP NO MODAL
// ============================================
const modalWhatsBtn = document.getElementById('modalWhatsBtn');
const numeroWhatsApp = '5511999999999';

function enviarWhatsApp(nomeProduto, preco, tamanho) {
    let mensagem = `Olá! Gostaria de comprar o produto: *${nomeProduto}*`;
    mensagem += `\n💰 Valor: R$ ${preco}`;
    
    if (tamanho) {
        mensagem += `\n📏 Tamanho : *${tamanho}*`;
    } else {
        mensagem += `\n⚠️ Tamanho: *Não selecionado* (por favor, informe)`;
    }
    
    mensagem += `\n\n✅ Entregam para todo Brasil?`;
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
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

// ============================================
// CLIQUE NOS PRODUTOS - ABRIR MODAL (CORRIGIDO)
// ============================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', (e) => {
        // Impedir que o clique no botão dentro do card dispare duas vezes
        if (e.target.classList && e.target.classList.contains('btn-whatsapp-produto')) {
            return;
        }
        
        const produtoNome = card.getAttribute('data-produto');
        const produtoPreco = card.getAttribute('data-preco');
        const produtoImagem = card.getAttribute('data-imagem');
        
        if (produtoNome && produtoPreco && produtoImagem) {
            openModal(produtoNome, produtoPreco, produtoImagem);
        }
    });
});

// ============================================
// BOTÕES WHATSAPP DENTRO DOS CARDS (se existirem)
// ============================================
document.querySelectorAll('.btn-whatsapp-produto').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const card = btn.closest('.product-card');
        const produtoNome = card.getAttribute('data-produto');
        const produtoPreco = card.getAttribute('data-preco');
        
        // Abrir WhatsApp direto sem modal
        const mensagem = `Olá! Gostaria de comprar o produto: *${produtoNome}* - R$ ${produtoPreco}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    });
});

// ============================================
// CONFIGURAR MINIATURAS DO MODAL
// ============================================
function setupThumbnails() {
    const thumbnails = document.querySelectorAll('.thumbnail');
    const mainImage = document.getElementById('modalMainImage');
    
    thumbnails.forEach(thumb => {
        thumb.addEventListener('click', () => {
            // Trocar a imagem principal pela miniatura clicada
            const newSrc = thumb.src;
            mainImage.src = newSrc;
            
            // Remover borda de todos e adicionar no selecionado
            thumbnails.forEach(t => t.style.borderColor = 'transparent');
            thumb.style.borderColor = '#2563eb';
        });
    });
}

// Inicializar miniaturas após carregar a página
document.addEventListener('DOMContentLoaded', () => {
    setupThumbnails();
});

