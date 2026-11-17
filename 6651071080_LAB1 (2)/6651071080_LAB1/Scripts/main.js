// ========================================
// SẮC VIỆT - Main JavaScript
// ========================================

// Cart management with localStorage
const Cart = {
  key: 'sacviet_cart',

  get() {
    try {
      return JSON.parse(localStorage.getItem(this.key)) || [];
    } catch {
      return [];
    }
  },

  save(cart) {
    localStorage.setItem(this.key, JSON.stringify(cart));
    this.updateBadge();
  },

  add(productId, quantity = 1) {
    const product = getProductById(productId);
    if (!product) return false;

    let cart = this.get();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
      existing.quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity
      });
    }

    this.save(cart);
    showToast(`Đã thêm "${product.name}" vào giỏ hàng!`);
    return true;
  },

  updateQty(productId, quantity) {
    let cart = this.get();
    const item = cart.find(i => i.id === productId);
    if (item) {
      item.quantity = Math.max(1, quantity);
      this.save(cart);
    }
  },

  remove(productId) {
    let cart = this.get().filter(item => item.id !== productId);
    this.save(cart);
    showToast('Đã xóa sản phẩm khỏi giỏ hàng', 'error');
  },

  clear() {
    this.save([]);
  },

  getTotal() {
    return this.get().reduce((sum, item) => sum + item.price * item.quantity, 0);
  },

  getCount() {
    return this.get().reduce((sum, item) => sum + item.quantity, 0);
  },

  updateBadge() {
    const badges = document.querySelectorAll('.cart-count');
    const count = this.getCount();
    badges.forEach(badge => {
      badge.textContent = count;
      badge.style.display = count > 0 ? 'flex' : 'none';
    });

    const totalEls = document.querySelectorAll('.cart-total');
    totalEls.forEach(el => {
      el.textContent = formatPrice(this.getTotal());
    });
  }
};

// Toast notification
function showToast(message, type = 'success') {
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.className = `toast ${type === 'error' ? 'error' : ''}`;
  toast.classList.add('show');
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Render product card HTML
function renderProductCard(product) {
  const badgeHtml = product.badge 
    ? `<span class="product-badge ${product.badge}">${product.badge === 'sale' ? 'Giảm giá' : product.badge === 'new' ? 'Mới' : product.badge}</span>` 
    : '';
  
  const oldPriceHtml = product.oldPrice 
    ? `<span class="old">${formatPrice(product.oldPrice)}</span>` 
    : '';

  return `
    <div class="product-card" data-id="${product.id}">
      <div class="product-img">
        ${badgeHtml}
        <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.onerror=null; this.src='data:image/svg+xml,%3Csvg xmlns=\\'http://www.w3.org/2000/svg\\' width=\\'300\\' height=\\'300\\' viewBox=\\'0 0 300 300\\'%3E%3Crect fill=\\'%23f3ece2\\' width=\\'300\\' height=\\'300\\'/%3E%3Ctext fill=\\'%238c827a\\' font-family=\\'sans-serif\\' font-size=\\'16\\' text-anchor=\\'middle\\' x=\\'150\\' y=\\'155\\'%3EChưa có hình ảnh%3C/text%3E%3C/svg%3E';">
        <div class="product-actions">
          <button title="Xem chi tiết" onclick="location.href='product-detail.html?id=${product.id}'">👁</button>
          <button title="Thêm vào giỏ" onclick="Cart.add('${product.id}')">🛒</button>
        </div>
      </div>
      <div class="product-info">
        <div class="category">${categoryLabels[product.category] || product.category}</div>
        <h3><a href="javascript:void(0)" onclick="openProductModal('${product.id}')" class="product-name-link" title="Xem ảnh ${product.name}">${product.name}</a></h3>
        <div class="product-price">
          ${oldPriceHtml}
          ${formatPrice(product.price)}
        </div>
        <button class="btn-add-cart" onclick="Cart.add('${product.id}')">Thêm vào giỏ</button>
      </div>
    </div>
  `;
}

// ========================================
// Lightbox Modal for Product Images
// ========================================
function openProductModal(productId) {
  const product = typeof getProductById === 'function' ? getProductById(productId) : null;
  if (!product) return;

  let modal = document.getElementById('product-lightbox-modal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'product-lightbox-modal';
    modal.className = 'lightbox-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="lightbox-overlay" data-close="true"></div>
      <div class="lightbox-container">
        <button class="lightbox-close" data-close="true" aria-label="Đóng">&times;</button>
        <div class="lightbox-header">
          <h3 id="lightbox-title"></h3>
          <span id="lightbox-category" class="lightbox-category"></span>
        </div>
        <div class="lightbox-body">
          <div class="lightbox-image-box">
            <img id="lightbox-img" src="" alt="" class="lightbox-img">
            <div id="lightbox-no-img" class="lightbox-no-image hidden">
              <span class="no-img-icon">🖼️</span>
              <p>Chưa có hình ảnh</p>
            </div>
          </div>
          <div class="lightbox-info">
            <div class="lightbox-price" id="lightbox-price"></div>
            <p class="lightbox-desc" id="lightbox-desc"></p>
            <div class="lightbox-actions">
              <button class="btn btn-primary" id="lightbox-add-cart">Thêm vào giỏ</button>
              <a href="#" class="btn btn-outline" id="lightbox-detail-link">Xem chi tiết</a>
            </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    // Close when clicking overlay or close button
    modal.addEventListener('click', (e) => {
      if (e.target && e.target.getAttribute('data-close') === 'true') {
        closeProductModal();
      }
    });

    // Close with Esc key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === 'Esc') {
        closeProductModal();
      }
    });
  }

  // Populate data
  const titleEl = document.getElementById('lightbox-title');
  const catEl = document.getElementById('lightbox-category');
  const imgEl = document.getElementById('lightbox-img');
  const noImgEl = document.getElementById('lightbox-no-img');
  const priceEl = document.getElementById('lightbox-price');
  const descEl = document.getElementById('lightbox-desc');
  const addCartBtn = document.getElementById('lightbox-add-cart');
  const detailLink = document.getElementById('lightbox-detail-link');

  titleEl.textContent = product.name;
  catEl.textContent = (typeof categoryLabels !== 'undefined' && categoryLabels[product.category]) || product.category || '';
  
  priceEl.textContent = typeof formatPrice === 'function' ? formatPrice(product.price) : `${product.price}₫`;
  descEl.textContent = product.description || '';
  
  addCartBtn.onclick = () => {
    Cart.add(product.id);
  };
  
  detailLink.href = `product-detail.html?id=${product.id}`;

  // Image handling with fallback
  imgEl.style.display = 'block';
  noImgEl.classList.add('hidden');
  imgEl.alt = product.name;

  if (product.image) {
    imgEl.src = product.image;
    imgEl.onerror = () => {
      imgEl.style.display = 'none';
      noImgEl.classList.remove('hidden');
    };
  } else {
    imgEl.style.display = 'none';
    noImgEl.classList.remove('hidden');
  }

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeProductModal() {
  const modal = document.getElementById('product-lightbox-modal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Mobile menu toggle (if needed)
function initMobileMenu() {
  // Simple responsive nav is handled by CSS
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  Cart.updateBadge();
  initMobileMenu();
});
