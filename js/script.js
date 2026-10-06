
// --- FORM VALIDATION UTILITIES ---

function showError(element, message) {
    clearError(element);
    if (!element) return;
    element.style.borderColor = '#e21e2c';
    const err = document.createElement('div');
    err.className = 'error-msg';
    err.style.color = '#e21e2c';
    err.style.fontSize = '12px';
    err.style.marginTop = '5px';
    err.style.lineHeight = '1.2';
    err.innerText = message;
    
    // Always append inside the wrapper so it doesn't break flex layouts
    if(element.parentElement && element.parentElement.style.position === 'relative') {
        element.parentElement.appendChild(err);
    } else {
        element.insertAdjacentElement('afterend', err);
    }
}

function clearError(element) {
    if (!element) return;
    element.style.borderColor = '#ddd';
    if(element.parentElement) {
        const errs = element.parentElement.querySelectorAll('.error-msg');
        errs.forEach(e => e.remove());
    }
}

const products = [
    { id: 1, name: "Performance Running Shoes", category: "Footwear", gender: "Men", price: 2499, oldPrice: 3499, rating: 4.8, img: "images/prod_1.webp", isNew: true, bestselling: true, stock: "In Stock", desc: "Built for speed and endurance, these performance running shoes feature advanced cushioning and an ultra-lightweight mesh upper for optimal breathability on the track or the treadmill.", features: ["Responsive energy-return midsole", "Breathable engineered mesh upper", "Durable rubber outsole for superior traction"] },
    { id: 2, name: "Men's Training T-Shirt", category: "Sportswear", gender: "Men", price: 899, oldPrice: 1299, rating: 4.5, img: "images/prod_2.webp", isNew: false, bestselling: true, stock: "In Stock", desc: "Stay cool during your toughest workouts. This training t-shirt is designed with quick-dry technology and an athletic fit that moves with your body.", features: ["Moisture-wicking quick-dry fabric", "Anti-odor technology", "Ergonomic seams for full range of motion"] },
    { id: 3, name: "Women's Sports Leggings", category: "Sportswear", gender: "Women", price: 1499, oldPrice: 1999, rating: 4.9, img: "images/prod_3.webp", isNew: true, bestselling: true, stock: "Low Stock", desc: "Experience maximum flexibility and comfort. These premium sports leggings are completely squat-proof, featuring a high-waisted design for a secure and flattering fit.", features: ["100% squat-proof opaque material", "High-rise waistband for core support", "Hidden pocket for keys or cards"] },
    { id: 4, name: "Adjustable Dumbbells (10kg)", category: "Equipment", gender: "Unisex", price: 4999, oldPrice: 6500, rating: 4.7, img: "images/prod_4.webp", isNew: false, bestselling: true, stock: "In Stock", desc: "Transform your home gym with this space-saving adjustable dumbbell set. Quickly shift between weights to customize your strength training routine seamlessly.", features: ["Easily adjustable weight plates", "Non-slip textured grip", "Durable rust-resistant coating"] },
    { id: 5, name: "Gym Water Bottle (1L)", category: "Accessories", gender: "Unisex", price: 499, oldPrice: 699, rating: 4.2, img: "images/prod_5.webp", isNew: false, bestselling: false, stock: "Out of Stock", desc: "Stay hydrated throughout your session. This 1L sports water bottle features a leak-proof lid, ergonomic grip, and time markers to track your daily water intake.", features: ["BPA-free durable plastic", "Leak-proof flip-top lid", "Convenient carrying strap"] },
    { id: 6, name: "Sports Backpack", category: "Accessories", gender: "Unisex", price: 1999, oldPrice: 2499, rating: 4.6, img: "images/prod_6.webp", isNew: true, bestselling: false, stock: "In Stock", desc: "The ultimate bag for athletes on the go. Features a dedicated shoe compartment, ventilated pockets for wet gear, and a padded laptop sleeve.", features: ["Water-resistant exterior", "Ventilated shoe compartment", "Padded adjustable shoulder straps"] },
    { id: 7, name: "Resistance Bands Set", category: "Equipment", gender: "Unisex", price: 999, oldPrice: 1499, rating: 4.4, img: "images/prod_7.webp", isNew: true, bestselling: false, stock: "In Stock", desc: "Build strength and improve mobility anywhere. This complete set includes multiple resistance levels, handles, and door anchors for a full-body workout.", features: ["5 color-coded resistance levels", "Snap-resistant natural latex", "Includes carry bag and accessories"] },
    { id: 8, name: "Women's Running Shoes", category: "Footwear", gender: "Women", price: 2999, oldPrice: 3999, rating: 4.8, img: "images/prod_8.webp", isNew: false, bestselling: false, stock: "In Stock", desc: "Designed specifically for the female foot, these running shoes offer exceptional arch support, cloud-like cushioning, and a sleek, aerodynamic profile.", features: ["Contoured arch support", "Shock-absorbing foam midsole", "Lightweight and flexible design"] },
    { id: 9, name: "Yoga Mat Pro", category: "Equipment", gender: "Unisex", price: 1299, oldPrice: 1599, rating: 4.5, img: "images/prod_9.webp", isNew: true, bestselling: true, stock: "In Stock", desc: "Find your balance on our premium pro yoga mat. Extra thick for joint protection, featuring a dual-sided non-slip surface for perfect stability in any pose.", features: ["Eco-friendly TPE material", "6mm thickness for joint comfort", "Textured non-slip grip"] },
    { id: 10, name: "Compression Socks", category: "Accessories", gender: "Unisex", price: 399, oldPrice: 599, rating: 4.3, img: "images/prod_10.webp", isNew: false, bestselling: false, stock: "In Stock", desc: "Boost your circulation and speed up recovery. These graduated compression socks reduce muscle fatigue during long runs and intense training sessions.", features: ["Graduated 20-30 mmHg compression", "Seamless toe for blister prevention", "Moisture-wicking breathable yarn"] },
    { id: 11, name: "Men's Track Pants", category: "Sportswear", gender: "Men", price: 1699, oldPrice: 2199, rating: 4.6, img: "images/prod_11.webp", isNew: false, bestselling: true, stock: "In Stock", desc: "Perfect for warm-ups or casual wear. These athletic track pants feature a tapered fit, zippered pockets, and a stretchy, breathable fabric blend.", features: ["Tapered athletic fit", "Secure zippered side pockets", "Adjustable drawstring waistband"] },
    { id: 12, name: "Women's Sports Bra", category: "Sportswear", gender: "Women", price: 1199, oldPrice: 1599, rating: 4.7, img: "images/prod_12.webp", isNew: true, bestselling: true, stock: "Low Stock", desc: "Maximum support for high-impact activities. This sports bra minimizes bounce while maximizing comfort with its racerback design and breathable mesh panels.", features: ["High-impact support", "Removable padded cups", "Breathable mesh ventilation"] },
    { id: 13, name: "Weightlifting Belt", category: "Equipment", gender: "Unisex", price: 2199, oldPrice: 2999, rating: 4.5, img: "images/prod_13.webp", isNew: false, bestselling: false, stock: "In Stock", desc: "Protect your core and lower back during heavy lifts. Made from premium leather, this contoured belt provides rigid support for squats and deadlifts.", features: ["Genuine heavy-duty leather", "Double-prong steel buckle", "Contoured for lower back comfort"] },
    { id: 14, name: "Smart Fitness Watch", category: "Accessories", gender: "Unisex", price: 5499, oldPrice: 6999, rating: 4.9, img: "images/prod_14.webp", isNew: true, bestselling: true, stock: "In Stock", desc: "Track your progress precisely. This smartwatch monitors your heart rate, sleep, steps, and features 20+ built-in sports modes to analyze your performance.", features: ["Continuous heart rate tracking", "Water-resistant up to 50m", "7-day battery life"] },
    { id: 15, name: "Men's Basketball Shoes", category: "Footwear", gender: "Men", price: 3499, oldPrice: 4599, rating: 4.8, img: "images/prod_15.webp", isNew: false, bestselling: true, stock: "In Stock", desc: "Dominate the court with explosive agility. These basketball shoes offer incredible ankle support and a multi-directional grip pattern for quick crossovers.", features: ["High-top ankle support", "Impact-absorbing heel cushioning", "Multi-directional herringbone traction"] },
    { id: 16, name: "Women's Training Tank Top", category: "Sportswear", gender: "Women", price: 799, oldPrice: 999, rating: 4.4, img: "images/prod_16.webp", isNew: false, bestselling: false, stock: "In Stock", desc: "Lightweight and completely unrestricted. This racerback training tank keeps you cool and allows for maximum shoulder mobility during your lifting or cardio sessions.", features: ["Ultra-lightweight fabric", "Racerback design for mobility", "Dropped back hem for coverage"] },
    { id: 17, name: "Kettlebell (15kg)", category: "Equipment", gender: "Unisex", price: 2799, oldPrice: 3500, rating: 4.7, img: "images/prod_17.webp", isNew: true, bestselling: false, stock: "In Stock", desc: "The ultimate tool for functional fitness. Cast from solid iron, this kettlebell features a wide, flat base and a smooth handle for comfortable swings and snatches.", features: ["Solid cast iron construction", "Smooth wide grip handle", "Flat base for easy storage"] },
    { id: 18, name: "Gym Towel Set", category: "Accessories", gender: "Unisex", price: 599, oldPrice: 799, rating: 4.1, img: "images/prod_18.webp", isNew: false, bestselling: false, stock: "In Stock", desc: "Keep sweat at bay. This set of two premium microfiber gym towels is highly absorbent, quick-drying, and perfectly sized for gym benches.", features: ["Ultra-absorbent microfiber", "Quick-drying technology", "Soft and gentle on skin"] },
    { id: 19, name: "Unisex Running Cap", category: "Accessories", gender: "Unisex", price: 449, oldPrice: 699, rating: 4.3, img: "images/prod_19.webp", isNew: true, bestselling: false, stock: "In Stock", desc: "Shield your eyes and stay cool. This lightweight running cap features a glare-reducing underbill and built-in sweatband for uninterrupted focus.", features: ["Adjustable velcro strap", "Built-in moisture-wicking sweatband", "Reflective details for visibility"] },
    { id: 20, name: "Protein Shaker Bottle", category: "Accessories", gender: "Unisex", price: 349, oldPrice: 499, rating: 4.2, img: "images/prod_20.webp", isNew: false, bestselling: true, stock: "In Stock", desc: "Mix your supplements perfectly every time. This durable shaker includes a stainless steel whisk ball and a secure, leak-proof flip cap.", features: ["Includes stainless steel mixing ball", "BPA-free and odor-resistant", "Measurement markings on the side"] }
];

window.showToast = function(msg, isError = false) {
    let t = document.createElement('div');
    t.style.position = 'fixed';
    t.style.bottom = '20px';
    t.style.right = '20px';
    t.style.backgroundColor = isError ? '#e21e2c' : '#28a745';
    t.style.color = '#fff';
    t.style.padding = '15px 25px';
    t.style.borderRadius = '5px';
    t.style.zIndex = '9999';
    t.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
    t.style.fontSize = '14px';
    t.innerText = msg;
    document.body.appendChild(t);
    setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity 0.5s'; setTimeout(()=>t.remove(), 500); }, 3000);
}

// State
let cart = JSON.parse(localStorage.getItem('cartItems')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlistItems')) || [];

function updateBadges() {
    const wCount = document.querySelectorAll('.wishlist-count');
    const cCount = document.querySelectorAll('.cart-count');
    wCount.forEach(el => el.innerText = wishlist.length);
    cCount.forEach(el => el.innerText = cart.reduce((a,b)=>a+b.qty,0));
}

window.toggleWishlist = function(id) {
    const idx = wishlist.findIndex(p => p.id === id);
    if(idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist', true);
    } else {
        const product = products.find(p => p.id === id);
        wishlist.push(product);
        showToast('Added to wishlist');
    }
    localStorage.setItem('wishlistItems', JSON.stringify(wishlist));
    updateBadges();
    
    if (window.location.pathname.includes('wishlist.html')) {
        renderWishlist();
    } else {
        const shopGrid = document.getElementById('shop-product-grid');
        if (shopGrid && typeof renderShop === 'function') {
            renderShop();
        } else {
            const featuredGrid = document.getElementById('featured-products');
            if (featuredGrid) featuredGrid.innerHTML = products.map(p => renderProductCard(p)).join('');
            const newGrid = document.getElementById('new-arrivals');
            if (newGrid) newGrid.innerHTML = products.filter(p => p.isNew).map(p => renderProductCard(p)).join('');
            const bestGrid = document.getElementById('best-sellers');
            if (bestGrid) bestGrid.innerHTML = products.filter(p => p.bestselling).map(p => renderProductCard(p)).join('');
        }
    }
};

window.addToCart = function(id, qty = 1) {
    const product = products.find(p => p.id === id);
    if(product.stock === 'Out of Stock') {
        showToast('Product is currently out of stock.', true);
        return;
    }
    const existing = cart.find(p => p.id === id);
    if (existing) {
        existing.qty += parseInt(qty);
    } else {
        cart.push({ ...product, qty: parseInt(qty) });
    }
    localStorage.setItem('cartItems', JSON.stringify(cart));
    updateBadges();
    showToast('Added to cart!');
};

window.renderProductCard = function(product) {
    const isWished = wishlist.some(p => p.id === product.id);
    const wishIcon = isWished ? 'fa-solid fa-heart' : 'fa-regular fa-heart';
    
    return `
        <div class="product-card" data-aos="fade-up">
            <div class="product-img-wrap">
                <img src="${product.img}" alt="${product.name}">
                <div class="hover-btn-wrap">
                    
                    <div class="action-icons">
                        <button class="icon-btn" onclick="toggleWishlist(${product.id})"><i class="${wishIcon}"></i></button>
                        <button class="icon-btn" onclick="addToCart(${product.id})"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>
                </div>
            </div>
            <div class="product-info-new">
                
                <h3 class="product-title-new">${product.name}</h3>
                <div class="product-price-new">PRICE $${product.price}</div>
                <div class="product-rating-new">
                    <span class="stars">${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))}</span> <span class="rev-count">(32)</span>
                </div>
            </div>
        </div>
    `;
};

// Page logic
document.addEventListener('DOMContentLoaded', () => {

    // --- HOME PAGE ---
    const featuredGrid = document.getElementById('featured-products');
    const newGrid = document.getElementById('new-arrivals');
    const bestGrid = document.getElementById('best-sellers');
    
    if (featuredGrid) {
        featuredGrid.innerHTML = products.map(p => renderProductCard(p)).join('');
    }
    if (newGrid && bestGrid) {
        newGrid.innerHTML = products.filter(p => p.isNew).map(p => renderProductCard(p)).join('');
        bestGrid.innerHTML = products.filter(p => p.bestselling).map(p => renderProductCard(p)).join('');
        
        document.querySelectorAll('.prod-tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.prod-tab-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                
                const target = e.target.getAttribute('data-target');
                newGrid.style.display = target === 'new-arrivals' ? 'grid' : 'none';
                bestGrid.style.display = target === 'best-sellers' ? 'grid' : 'none';
            });
        });
    }

    // --- SHOP PAGE ---
    const shopGrid = document.getElementById('shop-product-grid');
    if (shopGrid) {
        window.renderShop = function() {
            const urlParams = new URLSearchParams(window.location.search);
            const search = (urlParams.get('search') || document.getElementById('shop-search')?.value || "").toLowerCase();
            
            const cat = document.querySelector('input[name="cat"]:checked')?.value || 'all';
            const price = document.querySelector('input[name="price"]:checked')?.value || 'all';
            const gender = document.querySelector('input[name="gender"]:checked')?.value || 'all';
            const ratingFilter = parseFloat(document.querySelector('input[name="rating"]:checked')?.value || 0);
            
            let filtered = products.filter(p => {
                if (search && !p.name.toLowerCase().includes(search) && !p.category.toLowerCase().includes(search)) return false;
                if (cat !== 'all' && p.category !== cat) return false;
                if (gender !== 'all' && p.gender !== gender) return false;
                if (ratingFilter > 0 && p.rating < ratingFilter) return false;
                
                if (price !== 'all') {
                    const [min, max] = price.split('-');
                    if (p.price < parseFloat(min) || p.price > parseFloat(max)) return false;
                }
                return true;
            });
            
            const sort = document.getElementById('sort-select')?.value;
            if (sort === 'price-asc') filtered.sort((a,b) => a.price - b.price);
            if (sort === 'price-desc') filtered.sort((a,b) => b.price - a.price);
            if (sort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
            if (sort === 'newest') filtered = filtered.filter(p=>p.isNew).concat(filtered.filter(p=>!p.isNew));
            if (sort === 'bestselling') filtered = filtered.filter(p=>p.bestselling).concat(filtered.filter(p=>!p.bestselling));

            shopGrid.innerHTML = filtered.map(p => renderProductCard(p)).join('');
            document.getElementById('product-count').innerText = `Showing ${filtered.length} results`;
            
            const noMsg = document.getElementById('no-products-msg');
            if (filtered.length === 0) noMsg.style.display = 'block';
            else noMsg.style.display = 'none';
        }
        
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.has('cat')) {
            const val = urlParams.get('cat');
            const el = document.querySelector(`input[name="cat"][value="${val}"]`);
            if (el) el.checked = true;
        }
        if (urlParams.has('gender')) {
            const val = urlParams.get('gender');
            const el = document.querySelector(`input[name="gender"][value="${val}"]`);
            if (el) el.checked = true;
        }
        
        renderShop();
        
        document.querySelectorAll('.filter-list input').forEach(el => el.addEventListener('change', renderShop));
        document.getElementById('sort-select')?.addEventListener('change', renderShop);
        document.getElementById('shop-search')?.addEventListener('input', renderShop);
    }

    // --- GLOBAL SEARCH ---
    const globalSearch = document.getElementById('global-search');
    const searchBtn = document.getElementById('search-btn');
    function executeSearch() {
        if(globalSearch.value.trim() !== '') {
            window.location.href = `shop.html?search=${encodeURIComponent(globalSearch.value.trim())}`;
        }
    }
    if (searchBtn) searchBtn.addEventListener('click', executeSearch);
    if (globalSearch) globalSearch.addEventListener('keypress', (e) => { if(e.key === 'Enter') executeSearch(); });

    // --- PRODUCT DETAIL PAGE ---
    const detailContainer = document.getElementById('product-detail-container');
    if (detailContainer) {
        const urlParams = new URLSearchParams(window.location.search);
        const pid = parseInt(urlParams.get('id') || 1);
        const product = products.find(p => p.id === pid) || products[0];
        
        detailContainer.innerHTML = `
            <div style="display:flex; gap:20px;">
                <div style="display:flex; flex-direction:column; gap:10px; width:100px;">
                    <img src="${product.img}" style="width:100px; height:120px; object-fit:cover; background:#f4f5f7;">
                    <img src="${product.img}" style="width:100px; height:120px; object-fit:cover; background:#f4f5f7;">
                    <img src="${product.img}" style="width:100px; height:120px; object-fit:cover; background:#f4f5f7;">
                </div>
                <div style="flex:1; background:#f4f5f7; display:flex; align-items:center; justify-content:center; padding:20px;">
                    <img src="${product.img}" style="max-width:100%; max-height:500px; object-fit:contain; mix-blend-mode:multiply;">
                </div>
            </div>
            <div>
                <div style="display:flex; justify-content:space-between; align-items:baseline; margin-bottom:10px;">
                    <h1 style="font-size:24px; font-weight:800; color:#333;">${product.name}</h1>
                    <div style="font-size:18px; font-weight:800; color:#333;">Our Price : $${Math.floor(product.price / 80)}.00</div>
                </div>
                <div style="font-size:12px; color:#ffb400; margin-bottom:20px;">
                    ${'★'.repeat(Math.floor(product.rating))}${'☆'.repeat(5 - Math.floor(product.rating))} <span style="color:#888;">(1 Customer review)</span>
                </div>
                
                <div style="display:flex; align-items:center; gap:15px; margin-bottom:30px; font-size:14px; font-weight:bold;">
                    Hurry up! Deals end up : 
                    <div style="background:red; color:white; padding:5px 15px; font-size:12px;">250Days : 4Hours : 35Mins : 23Sec</div>
                </div>
                
                <p style="color:#666; font-size:13px; line-height:1.6; margin-bottom:20px;">
                    ${product.desc}
                </p>
                <ul style="color:#666; font-size:13px; line-height:1.6; margin-bottom:30px; padding-left:20px;">
                    ${product.features.map(f => `<li>${f}</li>`).join('')}
                </ul>
                
                <div style="display:flex; align-items:center; gap:15px; margin-bottom:20px;">
                    <div style="display:flex; border:1px solid #ddd;">
                        <button style="padding:10px 15px; background:none; border:none; cursor:pointer;" onclick="document.getElementById('qty').value = Math.max(1, parseInt(document.getElementById('qty').value)-1)">-</button>
                        <input type="text" id="qty" value="1" style="width:40px; text-align:center; border:none; border-left:1px solid #ddd; border-right:1px solid #ddd;">
                        <button style="padding:10px 15px; background:none; border:none; cursor:pointer;" onclick="document.getElementById('qty').value = parseInt(document.getElementById('qty').value)+1">+</button>
                    </div>
                    <button style="background:#000; color:#fff; border:none; padding:12px 30px; font-size:13px; font-weight:bold; cursor:pointer;" onclick="addToCart(${product.id}, document.getElementById('qty').value)">ADD CART <i class="fa-solid fa-angle-right"></i></button>
                    <button style="background:#fff; color:#333; border:1px solid #ddd; padding:12px 30px; font-size:13px; font-weight:bold; cursor:pointer;" onclick="addToCart(${product.id}, document.getElementById('qty').value); window.location.href='cart.html'">BUY NOW</button>
                </div>
                
                <div style="display:flex; gap:20px; font-size:12px; color:#666; margin-bottom:20px; border-bottom:1px solid #eee; padding-bottom:20px;">
                    <span style="cursor:pointer;" onclick="toggleWishlist(${product.id})"><i class="fa-regular fa-heart"></i> Add to wishlist</span>
                    <span style="cursor:pointer;"><i class="fa-solid fa-code-compare"></i> Add to compare</span>
                </div>
                
                <div style="font-size:12px; color:#666; margin-bottom:15px;">
                    Worldwide Shipping in all order $200, Delivery in 2-5 working days <strong style="color:#333;">Shipping & Return</strong>
                </div>
                
                <div style="font-size:24px; color:#aaa; margin-bottom:15px; display:flex; gap:10px;">
                    <i class="fa-brands fa-cc-visa"></i>
                    <i class="fa-brands fa-cc-mastercard"></i>
                    <i class="fa-brands fa-cc-paypal"></i>
                    <i class="fa-brands fa-cc-stripe"></i>
                    <i class="fa-brands fa-cc-amazon-pay"></i>
                    <i class="fa-brands fa-google-pay"></i>
                </div>
                
                <div style="font-size:12px; color:#666;">
                    <strong style="color:#333;">SKU:</strong> STK-9902<br><br>
                    <strong style="color:#333;">Categories:</strong> ${product.category}
                </div>
            </div>
        `;
        
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
                document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
                
                e.target.classList.add('active');
                document.getElementById('tab-' + e.target.getAttribute('data-target')).classList.add('active');
            });
        });
        
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const parent = e.target.parentElement;
                parent.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
            });
        });
    }

    // --- CART PAGE ---
    const cartItemsDiv = document.getElementById('cart-items');
    if (cartItemsDiv) {
        window.renderCart = function() {
            if (cart.length === 0) {
                cartItemsDiv.innerHTML = '<tr><td colspan="5" style="text-align:center; padding:50px;">Your cart is empty.</td></tr>';
                document.getElementById('cart-subtotal').innerText = '₹0';
                document.getElementById('cart-total').innerText = '₹0';
                return;
            }
            
            let total = 0;
            cartItemsDiv.innerHTML = cart.map(item => {
                const sub = item.price * item.qty;
                total += sub;
                return `
                    <tr>
                        <td>
                            <div class="cart-item-info">
                                <img src="${item.img}" alt="${item.name}">
                                <div>
                                    <strong style="display:block; margin-bottom:5px;">${item.name}</strong>
                                    <span style="color:#888; font-size:12px;">${item.category}</span>
                                </div>
                            </div>
                        </td>
                        <td>₹${item.price}</td>
                        <td>
                            <div class="qty-wrap" style="margin-bottom:0;">
                                <button class="qty-btn" onclick="updateCartQty(${item.id}, ${item.qty - 1})">-</button>
                                <input type="number" value="${item.qty}" min="1" class="qty-input" readonly>
                                <button class="qty-btn" onclick="updateCartQty(${item.id}, ${item.qty + 1})">+</button>
                            </div>
                        </td>
                        <td><strong>₹${sub}</strong></td>
                        <td><button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:red; cursor:pointer;"><i class="fa-solid fa-trash"></i></button></td>
                    </tr>
                `;
            }).join('');
            
            document.getElementById('cart-subtotal').innerText = `₹${total}`;
            const shipping = total > 999 ? 0 : 99;
            document.getElementById('cart-shipping').innerText = `₹${shipping}`;
            document.getElementById('cart-total').innerText = `₹${total + shipping}`;
        }
        
        window.updateCartQty = function(id, val) {
            if (val < 1) return;
            const item = cart.find(p => p.id === id);
            if (item) item.qty = parseInt(val);
            localStorage.setItem('cartItems', JSON.stringify(cart));
            updateBadges();
            renderCart();
        }
        window.removeFromCart = function(id) {
            cart = cart.filter(p => p.id !== id);
            localStorage.setItem('cartItems', JSON.stringify(cart));
            updateBadges();
            renderCart();
        }
        
        renderCart();
    }

    // --- WISHLIST PAGE ---
    const wishlistGrid = document.getElementById('wishlist-grid');
    if (wishlistGrid) {
        window.renderWishlist = function() {
            if (wishlist.length === 0) {
                wishlistGrid.style.display = 'none';
                document.getElementById('empty-wishlist').style.display = 'block';
            } else {
                wishlistGrid.style.display = 'grid';
                document.getElementById('empty-wishlist').style.display = 'none';
                wishlistGrid.innerHTML = wishlist.map(p => renderProductCard(p)).join('');
            }
        }
        renderWishlist();
    }

    // --- CHECKOUT PAGE ---
    const checkoutForm = document.getElementById('checkout-form');
    if (checkoutForm) {
        const chkItems = document.getElementById('checkout-items');
        let total = 0;
        cart.forEach(item => {
            total += item.price * item.qty;
            chkItems.innerHTML += `
                <div class="chk-item">
                    <span>${item.name} x ${item.qty}</span>
                    <strong>₹${item.price * item.qty}</strong>
                </div>
            `;
        });
        const shipping = total > 999 || total === 0 ? 0 : 99;
        if (shipping > 0) {
            chkItems.innerHTML += `<div class="chk-item"><span>Shipping</span><strong>₹${shipping}</strong></div>`;
        }
        document.getElementById('checkout-total').innerText = `₹${total + shipping}`;
        
        checkoutForm.addEventListener('submit', (e) => {
            e.preventDefault();
            if (cart.length === 0) {
                showToast("Your cart is empty!", true);
                return;
            }
            document.getElementById('checkout-form-container').style.display = 'none';
            document.querySelector('.checkout-summary').style.display = 'none';
            document.getElementById('order-success').style.display = 'block';
            
            document.getElementById('demo-order-id').innerText = 'ORD-' + Math.floor(Math.random() * 1000000);
            
            cart = [];
            localStorage.setItem('cartItems', JSON.stringify(cart));
            updateBadges();
        });
    }

    // --- AUTH PAGES ---
    
    
});

// =========================================
// PREMIUM SPORTS MOTION PRELOADER LOGIC
// =========================================
document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById('premium-preloader');
    if (!preloader) return;
    
    // Page specific loading messages
    const msgEl = document.getElementById('dynamic-load-msg');
    const path = window.location.pathname.toLowerCase();
    let msg = "Power Your Performance";
    
    if (path.includes('index') || path === '/' || path.endsWith('/sport/')) msg = "Preparing Your Performance";
    else if (path.includes('about')) msg = "Loading Our Story";
    else if (path.includes('service')) msg = "Preparing Your Fitness Experience";
    else if (path.includes('blog')) msg = "Loading Fitness Insights";
    else if (path.includes('contact')) msg = "Connecting You With Us";
    else if (path.includes('login')) msg = "Preparing Your Account";
    else if (path.includes('register')) msg = "Creating Your Fitness Journey";
    
    if (msgEl) msgEl.innerText = msg;
    
    // Progress Animation Math
    const pctEl = document.getElementById('loaderPercentage');
    const ringProg = document.querySelector('.ring-progress');
    let pct = 0;
    const duration = 1800; // 1.2s total count duration for energetic feel
    const intervalTime = 20;
    const steps = duration / intervalTime;
    const increment = 100 / steps;
    
    const interval = setInterval(() => {
        pct += increment;
        if (pct >= 100) {
            pct = 100;
            clearInterval(interval);
            triggerExit();
        }
        if (pctEl) pctEl.innerText = Math.floor(pct) + '%';
        
        // Update SVG circle stroke (Radius = 45 -> Circumference ~283)
        if (ringProg) {
            const offset = 283 - (283 * (pct / 100));
            ringProg.style.strokeDashoffset = offset;
        }
    }, intervalTime);
    
    // Exit sequence
    let exitTriggered = false;
    function triggerExit() {
        if (exitTriggered) return;
        exitTriggered = true;
        
        // Add exit active class to trigger CSS transforms
        preloader.classList.add('exit-active');
        
        // Remove from DOM fully after fade out
        setTimeout(() => {
            preloader.remove();
        }, 500);
    }
    
    // Safety fallback: Force exit after 3.5s max
    setTimeout(() => {
        if(!exitTriggered) {
            pct = 100;
            if (pctEl) pctEl.innerText = '100%';
            if (ringProg) ringProg.style.strokeDashoffset = 0;
            triggerExit();
        }
    }, 2500);
});



function validateNewsletter(btn) {
    const input = btn.previousElementSibling;
    clearError(input);
    if(!input.value || !input.value.includes('@')) {
        showError(input, "Please enter a valid email address.");
    } else {
        window.location.href = '404.html';
    }
}

// --- MOBILE NAVIGATION LOGIC ---
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const navOverlay = document.querySelector('.nav-overlay');

    if (hamburger) {
        function toggleMenu() {
            hamburger.classList.toggle('active');
            navLinks.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.classList.toggle('no-scroll');
            
            // GSAP stagger animation for nav links when opening
            if(navLinks.classList.contains('active') && typeof gsap !== 'undefined') {
                gsap.fromTo('.nav-links li', 
                    { x: 50, opacity: 0 }, 
                    { x: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: 'power2.out', delay: 0.2 }
                );
            }
        }

        hamburger.addEventListener('click', toggleMenu);
        navOverlay.addEventListener('click', toggleMenu);
        
        // Close menu on link click
        document.querySelectorAll('.nav-links li a').forEach(link => {
            link.addEventListener('click', () => {
                if (navLinks.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });
    }
});

// Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');
    const speed = 200; // The lower the slower

    const animateCounters = () => {
        counters.forEach(counter => {
            const updateCount = () => {
                const target = +counter.getAttribute('data-target');
                const count = +counter.innerText;
                const inc = target / speed;

                const suffix = counter.getAttribute('data-suffix') || '';
                if (count < target) {
                    counter.innerText = Math.ceil(count + inc) + suffix;
                    setTimeout(updateCount, 15);
                } else {
                    counter.innerText = target + suffix;
                }
            };
            updateCount();
        });
    };

    // Run counter animation on scroll
    if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.create({
            trigger: ".stats-grid",
            start: "top 80%",
            onEnter: animateCounters,
            once: true
        });
    } else {
        setTimeout(animateCounters, 1000);
    }
});

// BMI Calculator
window.calculateBMI = function() {
    const weight = parseFloat(document.getElementById('bmi-weight').value);
    const heightCm = parseFloat(document.getElementById('bmi-height').value);
    const res = document.getElementById('bmi-result');
    
    if (!weight || !heightCm) {
        res.innerText = "Please enter valid weight and height.";
        res.style.color = "#ff4444";
        return;
    }
    
    const heightM = heightCm / 100;
    const bmi = (weight / (heightM * heightM)).toFixed(1);
    
    let status = "";
    if (bmi < 18.5) status = "Underweight";
    else if (bmi >= 18.5 && bmi <= 24.9) status = "Normal Weight";
    else if (bmi >= 25 && bmi <= 29.9) status = "Overweight";
    else status = "Obese";
    
    res.innerText = `Your BMI is ${bmi} (${status})`;
    res.style.color = "#00e676";
};

// Make product images toggle hover-btn-wrap on mobile/click
window.addEventListener('click', (e) => {
    if (e.target.closest('.product-img-wrap img')) {
        const wrap = e.target.closest('.product-img-wrap').querySelector('.hover-btn-wrap');
        if (wrap) {
            wrap.style.opacity = wrap.style.opacity === '1' ? '0' : '1';
        }
    }
});

// --- ACTIVE NAVBAR HIGHLIGHT ---
document.addEventListener('DOMContentLoaded', () => {
    let currentPath = window.location.pathname.split('/').pop();
    if (!currentPath || currentPath === '') currentPath = 'index.html';
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        let href = link.getAttribute('href');
        if (href === currentPath || (currentPath === 'index.html' && href === './')) {
            link.classList.add('active');
        }
    });

    // --- FEEDBACK SECTION LOGIC (ABOUT PAGE) ---
    const feedbackData = [
        { name: "John Doe", rating: 5, text: "Stackly gear is top notch! The durability is unmatched. I've been using their equipment for months and it still looks brand new." },
        { name: "Jane Smith", rating: 4, text: "I love the leggings. They are so comfortable and squat-proof. Could use a few more color options, but overall excellent!" },
        { name: "Jacqueline Gloria", rating: 5, text: "Stackly has completely transformed my workout routine. Their gear is incredibly durable, comfortable, and looks amazing. I highly recommend them to anyone serious about fitness!" },
        { name: "Mike Ross", rating: 5, text: "Best fitness wear I have ever purchased. Totally worth the price. The quality of the fabric is exceptional." },
        { name: "Harvey Specter", rating: 4, text: "The quality of the track pants is phenomenal. Highly recommended for intense gym sessions." }
    ];

    const testiImages = document.querySelectorAll('.testi-gallery img');
    if (testiImages.length > 0) {
        testiImages.forEach((img, index) => {
            img.addEventListener('click', () => {
                // Remove active class from all
                testiImages.forEach(i => i.classList.remove('active'));
                // Add to clicked
                img.classList.add('active');
                
                // Update content
                const data = feedbackData[index];
                if(data) {
                    document.getElementById('feedback-text').innerText = data.text;
                    document.getElementById('feedback-name').innerText = data.name;
                    
                    // Update stars
                    let starsHtml = '';
                    for(let i=0; i<data.rating; i++) starsHtml += '<i class="fa-solid fa-star"></i>';
                    for(let i=data.rating; i<5; i++) starsHtml += '<i class="fa-regular fa-star"></i>';
                    document.getElementById('feedback-stars').innerHTML = starsHtml;
                }
            });
        });
    }
});

// --- CONTACT FORM VALIDATION ---
function validateContactForm(btn) {
    const form = btn.parentElement;
    const name = form.querySelector('#contactName');
    const email = form.querySelector('#contactEmail');
    const msg = form.querySelector('#contactMsg');
    
    clearError(name);
    clearError(email);
    clearError(msg);
    
    let isValid = true;
    
    if(!name.value) { showError(name, "Name is required"); isValid = false; }
    if(!email.value || !email.value.includes('@')) { showError(email, "Valid email is required"); isValid = false; }
    if(!msg.value) { showError(msg, "This field is required"); isValid = false; }
    
    if(isValid) {
        window.location.href = '404.html';
    }
}

// --- STICKY NAVBAR ON SCROLL ---
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.navbar');
    if(nav) {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
            // If it's a dark navbar, maybe add some transparency
            if(nav.style.background.includes('111') || nav.style.background.includes('#111')) {
                nav.style.background = 'rgba(17, 17, 17, 0.98)';
                nav.style.backdropFilter = 'blur(10px)';
            }
        } else {
            nav.classList.remove('scrolled');
            if(nav.style.background.includes('17')) {
                nav.style.background = '#111';
                nav.style.backdropFilter = 'none';
            }
        }
    }
});
