<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes">
    <title>ARAUJO FUTVOLEI | Sua Loja de Futvôlei</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:opsz,wght@14..32,300;14..32,400;14..32,600;14..32,700;14..32,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="style.css">
</head>
<body>

<div class="navbar">
    <div class="container">
        <h1 class="logo">ARAUJO <span>FUTVOLEI</span></h1>
        <div class="menu-icon" id="menuToggle">
            <i class="fas fa-bars"></i>
        </div>
        <ul class="nav-links" id="navLinks">
            <li><a href="#produtos">Produtos</a></li>
            <li><a href="#depoimentos">Depoimentos</a></li>
            <li><a href="#contato">Contato</a></li>
            <li><a href="#contato">Minha Conta</a></li>
        </ul>
    </div>
</div>

<!-- HERO -->
<header class="hero">
    <div class="container hero-grid">
        <div class="hero-content">
            <h2>Vista a Areia com <br><span>Atitude e Estilo</span></h2>
            <p>Os melhores kits para futvôlei, com tecido premium, liberdade de movimento e o design que a galera do FTV aprova. Do treino ao campeonato, jogue com personalidade.</p>
            <button class="btn-primary" id="verProdutosBtn">Explorar Coleção →</button>
        </div>
        <div class="hero-image">
            <img src="images/bg branco.jpeg" alt="Kit exclusivo ARAUJO FUTVOLEI">
        </div>
    </div>
</header>

<main>
    <!-- PRODUTOS DESTAQUE -->
    <div class="container section" id="produtos">
        <h3 class="section-title">Produtos em Destaque</h3>
        <div class="underline"></div>
        <div class="products-grid">
            <div class="product-card" data-produto="Kit Big Wolf Branco" data-preco="0,000.00">
                <img src="images/bg branco.jpeg" class="product-img" alt="Kit Big Wolf Branco">
                <div class="product-info">
                    <p class="product-name">Kit Big Wolf Branco</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Kit Big Wolf Preto" data-preco="0,000.00">
                <img src="images/bg preto.jpeg" class="product-img" alt="Kit Big Wolf Preto">
                <div class="product-info">
                    <p class="product-name">Kit Big Wolf Preto</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Kit Araujo FTV Feminino" data-preco="0,000.00">
                <img src="images/Fminino.jpeg" class="product-img" alt="Kit Araujo FTV Feminino">
                <div class="product-info">
                    <p class="product-name">Kit Araujo FTV Feminino</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Garrafa Térmica Araujo FTV" data-preco="0,000.00">
                <img src="images/Garrfa.jpeg" class="product-img" alt="Garrafa Térmica">
                <div class="product-info">
                    <p class="product-name">Garrafa Térmica Araujo FTV</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>
        </div>
    </div>

    <!-- ÚLTIMOS PRODUTOS -->
    <div class="container section">
        <h3 class="section-title">Últimos Produtos</h3>
        <div class="underline"></div>
        <div class="products-grid">
            <div class="product-card" data-produto="Bola Mikasa" data-preco="0,000.00">
                <img src="images/bola.jpeg" class="product-img" alt="Bola Mikasa">
                <div class="product-info">
                    <p class="product-name">Bola Mikasa</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Kit Wolf Edição Limitada" data-preco="0,000.00">
                <img src="images/bg branco.jpeg" class="product-img" alt="Kit Wolf Edição">
                <div class="product-info">
                    <p class="product-name">Kit Wolf Edição Limitada</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Kit Wolf Preto Premium" data-preco="0,000.00">
                <img src="images/bg preto.jpeg" class="product-img" alt="Kit Wolf Preto">
                <div class="product-info">
                    <p class="product-name">Kit Wolf Preto Premium</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Kit Feminino Power" data-preco="0,000.00">
                <img src="images/Fminino.jpeg" class="product-img" alt="Kit Feminino Power">
                <div class="product-info">
                    <p class="product-name">Kit Feminino Power</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Garrafa Térmica Preta" data-preco="0,000.00">
                <img src="images/Garrfa.jpeg" class="product-img" alt="Garrafa Térmica Preta">
                <div class="product-info">
                    <p class="product-name">Garrafa Térmica Preta</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Bola Mikasa Pro" data-preco="0,000.00">
                <img src="images/bola.jpeg" class="product-img" alt="Bola Mikasa Pro">
                <div class="product-info">
                    <p class="product-name">Bola Mikasa Pro</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Kit Storm Branco" data-preco="0,000.00">
                <img src="images/bg branco.jpeg" class="product-img" alt="Kit Storm Branco">
                <div class="product-info">
                    <p class="product-name">Kit Storm Branco</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>

            <div class="product-card" data-produto="Kit Storm Preto" data-preco="0,000.00">
                <img src="images/bg preto.jpeg" class="product-img" alt="Kit Storm Preto">
                <div class="product-info">
                    <p class="product-name">Kit Storm Preto</p>
                    <div class="rating">★★★★☆</div>
                    <p class="price">R$ 0,000.00</p>
                    <button class="btn-whatsapp-produto">📱 Comprar via WhatsApp</button>
                </div>
            </div>
        </div>
    </div>

    <!-- BLOCO EXCLUSIVO -->
    <div class="container banner-exclusive">
        <div class="banner-inner">
            <div class="banner-text">
                <h3>🏐 Sucesso nem sempre tem haver com grandeza</h3>
                <p>Tem haver com consistência. Trabalho duro e consistência superam tudo! Vista nossa camisa e entre em quadra com confiança.</p>
                <button class="btn-primary" id="ctaExclusivo">Ver Coleção →</button>
            </div>
            <div class="banner-img">
                <img src="images/bg preto.jpeg" alt="Uniforme exclusivo">
            </div>
        </div>
    </div>

    <!-- DEPOIMENTOS -->
    <div class="container section" id="depoimentos">
        <h3 class="section-title">O que nossos clientes dizem</h3>
        <div class="underline"></div>
        <div class="testimonials">
            <div class="testimonial-card">
                <div class="quote">"</div>
                <p>O melhor uniforme para seus jogos. Tecido leve e resistente, perfeito para a areia!</p>
                <div class="rating">★★★★★</div>
                <p style="font-weight: 600; margin-top: 10px;">— Rafael Oliveira</p>
            </div>
            <div class="testimonial-card">
                <div class="quote">"</div>
                <p>Atendimento excelente e produtos de altíssima qualidade. Recomendo demais a ARAUJO FTV.</p>
                <div class="rating">★★★★★</div>
                <p style="font-weight: 600; margin-top: 10px;">— Camila Santos</p>
            </div>
            <div class="testimonial-card">
                <div class="quote">"</div>
                <p>Comprei o kit feminino e amei! Confortável, bonito e com preço justo. Nota 10!</p>
                <div class="rating">★★★★★</div>
                <p style="font-weight: 600; margin-top: 10px;">— Juliana M.</p>
            </div>
        </div>
    </div>
</main>

<!-- FOOTER -->
<footer id="contato">
    <div class="container">
        <div class="footer-grid">
            <div class="footer-col">
                <h1 class="logo" style="font-size: 1.7rem;">ARAUJO <span style="color:#fff;">FUTVOLEI</span></h1>
                <p style="margin-top: 0.8rem;">Nosso objetivo é melhorar seu estilo no FTV.</p>
                <div class="social-icons">
                    <a href="https://instagram.com" target="_blank" class="instagram-btn"><i class="fab fa-instagram"></i></a>
                    <a href="https://wa.me/5511999999999" target="_blank" class="whatsapp-footer"><i class="fab fa-whatsapp"></i></a>
                </div>
            </div>
            <div class="footer-col">
                <h4 style="color:white;">Links Rápidos</h4>
                <ul style="list-style: none; margin-top: 1rem;">
                    <li style="margin-bottom: 0.6rem;"><a href="#produtos" style="color:#a0aec0; text-decoration: none;">Produtos</a></li>
                    <li style="margin-bottom: 0.6rem;"><a href="#depoimentos" style="color:#a0aec0; text-decoration: none;">Depoimentos</a></li>
                    <li style="margin-bottom: 0.6rem;"><a href="#contato" style="color:#a0aec0; text-decoration: none;">Contato</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 style="color:white;">Contato</h4>
                <p style="margin-top: 1rem;">📞 (43) 99147-1566</p>
                <p>📧 contato@araujoftv.com.br</p>
                <p>📍 Brasil - Enviamos para todo país</p>
            </div>
        </div>
        <div class="copyright">
            <p>copyright 2026 - Luis Otavio - Todos os Direitos Reservados</p>
        </div>
    </div>
</footer>

<!-- ÍCONES FLUTUANTES -->
<a href="https://wa.me/43991471566" target="_blank" class="whatsapp-float">
    <i class="fab fa-whatsapp"></i>
</a>

<a href="https://www.instagram.com/luiss.otavio___/" target="_blank" class="instagram-float">
    <i class="fab fa-instagram"></i>
</a>

<script>
    // Menu mobile
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Botão WhatsApp para cada produto
    const numeroWhatsApp = '43991471566';
    
    function enviarWhatsApp(nomeProduto, preco) {
        const mensagem = `Olá! Gostaria de comprar o produto: *${nomeProduto}* - Valor: R$ ${preco}`;
        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    }

    // Adicionar evento a todos os botões de produto
    document.querySelectorAll('.btn-whatsapp-produto').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const card = btn.closest('.product-card');
            const nomeProduto = card.getAttribute('data-produto');
            const preco = card.getAttribute('data-preco');
            enviarWhatsApp(nomeProduto, preco);
        });
    });

    // Scroll para produtos
    const verBtn = document.getElementById('verProdutosBtn');
    if(verBtn) {
        verBtn.addEventListener('click', () => {
            document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const ctaExclusivo = document.getElementById('ctaExclusivo');
    if(ctaExclusivo) {
        ctaExclusivo.addEventListener('click', () => {
            document.getElementById('produtos').scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Fechar menu ao clicar em link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('show');
        });
    });
</script>
</body>
</html>