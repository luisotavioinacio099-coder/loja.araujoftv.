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

// Fechar menu ao clicar em link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('show');
    });
});

// ============================================
// BOTÕES "EXPLORAR COLEÇÃO"
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
// ALERTA PERSONALIZADO (CORRIGIDO)
// ============================================
const customAlert = document.getElementById('customAlert');

function showAlert(message) {
    if (customAlert) {
        const alertMessage = customAlert.querySelector('p');
        if (alertMessage) {
            alertMessage.textContent = message || 'Por favor, selecione um tamanho (P, M, G ou GG) antes de continuar.';
        }
        customAlert.classList.add('show');
        
        // Fechar automaticamente após 3 segundos
        setTimeout(() => {
            closeAlert();
        }, 3000);
    }
}

function closeAlert() {
    if (customAlert) {
        customAlert.classList.remove('show');
    }
}

// Fechar alerta ao clicar no botão
const alertBtn = document.querySelector('.alert-btn');
if (alertBtn) {
    alertBtn.addEventListener('click', closeAlert);
}

// Fechar alerta ao clicar fora
if (customAlert) {
    customAlert.addEventListener('click', (e) => {
        if (e.target === customAlert) {
            closeAlert();
        }
    });
}

// ============================================
// MODAL DO PRODUTO
// ============================================
const modal = document.getElementById('productModal');
const modalClose = document.querySelector('.modal-close-btn');
let selectedSize = null;

function openModal(produtoNome, produtoPreco, produtoImagem) {
    document.getElementById('modalProductName').textContent = produtoNome;
    document.getElementById('modalProductPrice').textContent = `R$ ${produtoPreco}`;
    
    const mainImage = document.getElementById('modalMainImage');
    mainImage.src = produtoImagem;
    mainImage.alt = produtoNome;
    
    const thumbnails = document.querySelectorAll('.thumbnail');
    thumbnails.forEach((thumb) => {
        thumb.src = produtoImagem;
    });
    
    selectedSize = null;
    document.querySelectorAll('.size-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    document.querySelectorAll('.thumbnail-item').forEach((item, idx) => {
        if (idx === 0) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
    
    modal.setAttribute('data-produto', produtoNome);
    modal.setAttribute('data-preco', produtoPreco);
    modal.setAttribute('data-imagem', produtoImagem);
    
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

if (modalClose) {
    modalClose.addEventListener('click', closeModal);
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
        closeModal();
    }
});

// ============================================
// SELETORES DE TAMANHO
// ============================================
document.querySelectorAll('.size-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => {
            b.classList.remove('active');
        });
        btn.classList.add('active');
        selectedSize = btn.getAttribute('data-size');
    });
});

// ============================================
// TROCA DE IMAGENS NAS MINIATURAS
// ============================================
const thumbnailsItems = document.querySelectorAll('.thumbnail-item');
const mainImage = document.getElementById('modalMainImage');

thumbnailsItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        thumbnailsItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        
        const thumbImg = item.querySelector('.thumbnail');
        if (thumbImg && thumbImg.src) {
            mainImage.src = thumbImg.src;
        }
    });
});

// ============================================
// WHATSAPP - NÚMERO CORRETO
// ============================================
const numeroWhatsApp = '5543991471566';

function enviarWhatsApp(nomeProduto, preco, tamanho) {
    const data = new Date();
    const dataFormatada = data.toLocaleDateString('pt-BR');
    
    let mensagem = `🏐 *NOVO PEDIDO - ARAUJO FUTVOLEI* 🏐\n\n`;
    mensagem += `*PRODUTO:* ${nomeProduto}\n`;
    mensagem += `*PREÇO:* R$ ${preco}\n`;
    mensagem += `*TAMANHO:* ${tamanho || 'Não selecionado'}\n`;
    mensagem += `*DATA:* ${dataFormatada}\n\n`;
    mensagem += `*ENTREGA:* ✅ Entregam para todo Brasil\n`;
    mensagem += `*PAGAMENTO:* PIX / Cartão / Boleto\n\n`;
    mensagem += `_Mensagem automática - Agradecemos o contato!_ 🏐`;
    
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
    window.open(url, '_blank');
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

// ============================================
// CLIQUE NOS PRODUTOS - ABRIR MODAL
// ============================================
const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('click', (e) => {
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
        
        enviarWhatsApp(produtoNome, produtoPreco, 'A definir');
    });
});

console.log('✅ ARAUJO FUTVOLEI - Site funcionando perfeitamente!');