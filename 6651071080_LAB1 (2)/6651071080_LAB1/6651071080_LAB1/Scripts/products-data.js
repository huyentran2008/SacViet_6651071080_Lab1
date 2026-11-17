// ========================================
// SẮC VIỆT - Dữ liệu sản phẩm mẫu
// ========================================

const products = [
  // Quà lưu niệm
  {
    id: "SV001",
    name: "Móc khóa hình nón lá",
    price: 35000,
    oldPrice: 45000,
    category: "qua-luu-niem",
    region: "toan-quoc",
    image: "Images/SV001.jpg",
    description: "Móc khóa thủ công hình nón lá Việt Nam, làm từ chất liệu bền đẹp, mang đậm bản sắc văn hóa. Phù hợp làm quà tặng lưu niệm cho bạn bè và người thân.",
    origin: "Việt Nam",
    stock: 150,
    badge: "sale",
    featured: true,
    bestSeller: true,
    isNew: false
  },
  {
    id: "SV002",
    name: "Móc khóa bản đồ Việt Nam",
    price: 40000,
    oldPrice: null,
    category: "qua-luu-niem",
    region: "toan-quoc",
    image: "Images/SV002.jpg",
    description: "Móc khóa hình bản đồ Việt Nam tinh xảo, thể hiện tình yêu quê hương. Thiết kế nhỏ gọn, dễ mang theo.",
    origin: "Việt Nam",
    stock: 120,
    badge: "new",
    featured: true,
    bestSeller: false,
    isNew: true
  },
  {
    id: "SV003",
    name: "Mô hình chùa Một Cột",
    price: 185000,
    oldPrice: 220000,
    category: "qua-luu-niem",
    region: "mien-bac",
    image: "Images/SV003.jpg",
    description: "Mô hình thu nhỏ danh lam thắng cảnh chùa Một Cột Hà Nội. Chất liệu gỗ và composite cao cấp, chi tiết sắc nét.",
    origin: "Hà Nội",
    stock: 45,
    badge: "sale",
    featured: true,
    bestSeller: true,
    isNew: false
  },
  {
    id: "SV004",
    name: "Đồ trang trí hình rồng Việt",
    price: 250000,
    oldPrice: null,
    category: "qua-luu-niem",
    region: "mien-bac",
    image: "Images/SV004.jpg",
    description: "Sản phẩm trang trí hình rồng mang phong cách truyền thống Việt Nam, phù hợp trang trí không gian sống hoặc làm quà tặng cao cấp.",
    origin: "Việt Nam",
    stock: 30,
    badge: null,
    featured: false,
    bestSeller: false,
    isNew: false
  },

  // Sản phẩm truyền thống
  {
    id: "SV005",
    name: "Nón lá truyền thống",
    price: 120000,
    oldPrice: 150000,
    category: "truyen-thong",
    region: "mien-trung",
    image: "Images/SV005.jpg",
    description: "Nón lá Huế thủ công, chất liệu lá cọ tự nhiên, nhẹ và bền. Biểu tượng văn hóa Việt Nam được yêu thích trên toàn thế giới.",
    origin: "Huế",
    stock: 80,
    badge: "sale",
    featured: true,
    bestSeller: true,
    isNew: false
  },
  {
    id: "SV006",
    name: "Khăn rằn Nam Bộ",
    price: 95000,
    oldPrice: null,
    category: "truyen-thong",
    region: "mien-nam",
    image: "Images/SV006.jpg",
    description: "Khăn rằn truyền thống miền Tây Nam Bộ, chất liệu cotton mềm mại, họa tiết đen trắng đặc trưng. Đa năng sử dụng.",
    origin: "Miền Tây",
    stock: 100,
    badge: null,
    featured: true,
    bestSeller: true,
    isNew: false
  },
  {
    id: "SV007",
    name: "Túi vải họa tiết dân gian",
    price: 165000,
    oldPrice: null,
    category: "truyen-thong",
    region: "mien-bac",
    image: "Images/SV007.jpg",
    description: "Túi vải mang họa tiết dân gian Đông Hồ, thân thiện môi trường, phù hợp đi chơi hoặc làm quà tặng ý nghĩa.",
    origin: "Bắc Ninh",
    stock: 60,
    badge: "new",
    featured: false,
    bestSeller: false,
    isNew: true
  },
  {
    id: "SV008",
    name: "Phụ kiện họa tiết trống đồng",
    price: 89000,
    oldPrice: 110000,
    category: "truyen-thong",
    region: "mien-bac",
    image: "Images/SV008.jpg",
    description: "Bộ phụ kiện trang sức mang họa tiết trống đồng Đông Sơn, thể hiện niềm tự hào văn hóa dân tộc.",
    origin: "Việt Nam",
    stock: 70,
    badge: "sale",
    featured: false,
    bestSeller: false,
    isNew: false
  },

  // Thủ công mỹ nghệ
  {
    id: "SV009",
    name: "Giỏ mây tre đan thủ công",
    price: 280000,
    oldPrice: null,
    category: "thu-cong",
    region: "mien-nam",
    image: "Images/SV009.jpg",
    description: "Giỏ mây tre đan tinh xảo từ làng nghề truyền thống, bền đẹp và thân thiện môi trường. Phù hợp trang trí hoặc sử dụng hàng ngày.",
    origin: "Miền Tây",
    stock: 40,
    badge: null,
    featured: true,
    bestSeller: false,
    isNew: false
  },
  {
    id: "SV010",
    name: "Bát gốm Bát Tràng",
    price: 195000,
    oldPrice: 230000,
    category: "thu-cong",
    region: "mien-bac",
    image: "Images/SV010.jpg",
    description: "Bát gốm sứ Bát Tràng cao cấp, họa tiết hoa sen truyền thống. Sản phẩm thủ công từ làng nghề nổi tiếng.",
    origin: "Hà Nội - Bát Tràng",
    stock: 55,
    badge: "sale",
    featured: true,
    bestSeller: true,
    isNew: false
  },
  {
    id: "SV011",
    name: "Hộp sơn mài truyền thống",
    price: 320000,
    oldPrice: null,
    category: "thu-cong",
    region: "mien-bac",
    image: "Images/SV011.jpg",
    description: "Hộp sơn mài thủ công với họa tiết tinh xảo, dùng để đựng trang sức hoặc làm đồ trang trí sang trọng.",
    origin: "Hà Nội",
    stock: 25,
    badge: "new",
    featured: false,
    bestSeller: false,
    isNew: true
  },
  {
    id: "SV012",
    name: "Đèn lồng Hội An",
    price: 175000,
    oldPrice: null,
    category: "thu-cong",
    region: "mien-trung",
    image: "Images/SV012.jpg",
    description: "Đèn lồng thủ công phố cổ Hội An, mang ánh sáng ấm áp và vẻ đẹp văn hóa miền Trung.",
    origin: "Hội An",
    stock: 65,
    badge: null,
    featured: true,
    bestSeller: true,
    isNew: false
  },

  // Thổ cẩm
  {
    id: "SV013",
    name: "Túi thổ cẩm Tây Bắc",
    price: 245000,
    oldPrice: 280000,
    category: "tho-cam",
    region: "mien-bac",
    image: "Images/SV013.jpg",
    description: "Túi thổ cẩm thủ công của đồng bào dân tộc Tây Bắc, họa tiết độc đáo, chất liệu bền đẹp.",
    origin: "Tây Bắc",
    stock: 35,
    badge: "sale",
    featured: true,
    bestSeller: false,
    isNew: false
  },
  {
    id: "SV014",
    name: "Ví thổ cẩm thủ công",
    price: 125000,
    oldPrice: null,
    category: "tho-cam",
    region: "mien-bac",
    image: "Images/SV014.jpg",
    description: "Ví nhỏ gọn làm từ vải thổ cẩm, nhiều ngăn tiện dụng, mang vẻ đẹp văn hóa dân tộc.",
    origin: "Tây Bắc",
    stock: 90,
    badge: null,
    featured: false,
    bestSeller: true,
    isNew: false
  },
  {
    id: "SV015",
    name: "Khăn thổ cẩm đa sắc",
    price: 180000,
    oldPrice: null,
    category: "tho-cam",
    region: "mien-bac",
    image: "Images/SV015.jpg",
    description: "Khăn thổ cẩm nhiều màu sắc rực rỡ, có thể dùng làm khăn choàng hoặc trang trí.",
    origin: "Tây Bắc",
    stock: 50,
    badge: "new",
    featured: true,
    bestSeller: false,
    isNew: true
  },
  {
    id: "SV016",
    name: "Phụ kiện thổ cẩm bộ 3",
    price: 210000,
    oldPrice: 250000,
    category: "tho-cam",
    region: "mien-bac",
    image: "Images/SV016.jpg",
    description: "Bộ phụ kiện thổ cẩm gồm dây buộc tóc, vòng tay và móc khóa, phù hợp làm quà tặng.",
    origin: "Tây Bắc",
    stock: 40,
    badge: "sale",
    featured: false,
    bestSeller: false,
    isNew: false
  },

  // Đặc sản
  {
    id: "SV017",
    name: "Trà Shan Tuyết cổ thụ",
    price: 350000,
    oldPrice: null,
    category: "dac-san",
    region: "mien-bac",
    image: "Images/SV017.jpg",
    description: "Trà Shan Tuyết hái từ cây trà cổ thụ trên núi cao Tây Bắc. Hương vị thanh khiết, độc đáo.",
    origin: "Hà Giang",
    stock: 70,
    badge: null,
    featured: true,
    bestSeller: true,
    isNew: false
  },
  {
    id: "SV018",
    name: "Cà phê Buôn Ma Thuột",
    price: 185000,
    oldPrice: 210000,
    category: "dac-san",
    region: "mien-trung",
    image: "Images/SV018.jpg",
    description: "Cà phê nguyên chất Buôn Ma Thuột, rang xay thủ công, hương vị đậm đà đặc trưng của Tây Nguyên.",
    origin: "Đắk Lắk",
    stock: 100,
    badge: "sale",
    featured: true,
    bestSeller: true,
    isNew: false
  },
  {
    id: "SV019",
    name: "Kẹo dừa Bến Tre",
    price: 95000,
    oldPrice: null,
    category: "dac-san",
    region: "mien-nam",
    image: "Images/SV019.png",
    description: "Kẹo dừa Bến Tre truyền thống với vị ngọt béo tự nhiên từ dừa, được đóng gói riêng từng viên, phù hợp thưởng thức và làm quà biếu.",
    origin: "Bến Tre",
    stock: 85,
    badge: null,
    featured: false,
    bestSeller: false,
    isNew: false
  },
  {
    id: "SV020",
    name: "Bánh đậu xanh Hải Dương",
    price: 75000,
    oldPrice: null,
    category: "dac-san",
    region: "mien-bac",
    image: "Images/SV020.jpg",
    description: "Bánh đậu xanh truyền thống Hải Dương, thơm ngon, đóng hộp sang trọng làm quà tặng.",
    origin: "Hải Dương",
    stock: 110,
    badge: "new",
    featured: false,
    bestSeller: true,
    isNew: true
  }
];

// Category labels
const categoryLabels = {
  "qua-luu-niem": "Quà lưu niệm",
  "truyen-thong": "Sản phẩm truyền thống",
  "thu-cong": "Thủ công mỹ nghệ",
  "tho-cam": "Thổ cẩm",
  "dac-san": "Đặc sản Việt Nam"
};

const regionLabels = {
  "mien-bac": "Miền Bắc",
  "mien-trung": "Miền Trung",
  "mien-nam": "Miền Nam",
  "toan-quoc": "Toàn quốc"
};

// Format price to VND
function formatPrice(price) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
}

// Get product by ID
function getProductById(id) {
  return products.find(p => p.id === id);
}

// Filter products (by category and search keyword)
function filterProducts(options = {}) {
  let result = [...products];
  
  if (options.category && options.category !== 'all') {
    result = result.filter(p => p.category === options.category);
  }
  
  if (options.search) {
    const keyword = options.search.toLowerCase().trim();
    result = result.filter(p => 
      p.name.toLowerCase().includes(keyword) || 
      p.description.toLowerCase().includes(keyword) ||
      p.id.toLowerCase().includes(keyword)
    );
  }
  
  return result;
}

// Get featured, bestseller, new products
function getFeaturedProducts() {
  return products.filter(p => p.featured);
}

function getBestSellerProducts() {
  return products.filter(p => p.bestSeller);
}

function getNewProducts() {
  return products.filter(p => p.isNew);
}

function getProductsByRegion(region) {
  return products.filter(p => p.region === region);
}
