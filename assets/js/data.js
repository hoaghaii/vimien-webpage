
const Products = [
  { 
    id: 1, 
    name: 'Bạch Nhài', 
    price: 42000, 
    image: 'assets/images/products/1.png', 
    description: '<strong>Bạch Nhài</strong> là bản giao hòa giữa sự thuần khiết của sữa tươi và hương hoa nhài thanh tao. Mỗi ngụm như một làn gió mát, mang đến cảm giác thư thái, dễ chịu - rất thích hợp cho những ai yêu thích hương vị nhẹ nhàng và tự nhiên.\n\n<strong>Thành phần:</strong> Sữa tươi thanh trùng, chiết xuất hoa nhài, đá lạnh và lớp kem béo mịn phủ trên cùng.',
    sizes: [
      { name: 'S', price: 42000 },
      { name: 'M', price: 48000 },
      { name: 'L', price: 55000 }
    ]
  },
  { 
    id: 2, 
    name: 'Mật Hoàng Hoa', 
    price: 42000, 
    image: 'assets/images/products/2.png', 
    description: '<strong>Mật Hoàng Hoa</strong> là bản hòa ca dịu ngọt giữa vị sữa tươi thuần khiết quyện với hương hoa thoang thoảng và mật ong ngọt lành, mang lại hậu vị mềm mại, dễ chịu. Từng ngụm như một bản nhạc nhẹ, giúp xua tan mệt mỏi và mang lại cảm giác thư giãn, an yên - hoàn hảo cho buổi chiều muộn hoặc những khoảnh khắc cần một chút "ngọt ngào cho tâm hồn."\n\n<strong>Thành phần:</strong> Sữa tươi thanh trùng, mật ong nguyên chất, chiết xuất hoa nhài, đá lạnh và lớp kem béo mịn phủ trên cùng.',
    sizes: [
      { name: 'S', price: 42000 },
      { name: 'M', price: 50000 },
      { name: 'L', price: 55000 }
    ]
  },
  { 
    id: 3, 
    name: 'Hồng Vân Lộ', 
    price: 45000, 
    image: 'assets/images/products/3.png', 
    description: '<strong>Hồng Vân Lộ</strong> là khúc hòa ca giữa hương hoa hồng thanh lịch và vị sữa ngọt ngào, mang đến cảm giác như đang thưởng trà giữa khu vườn ngập hương, giúp thư giãn tinh thần, mang lại cảm giác nữ tính và nhẹ nhàng - rất thích hợp cho buổi chiều thư thả hoặc những ai yêu thích sự ngọt ngào tinh tế.\n\n<strong>Thành phần:</strong> Sữa tươi thanh trùng, siro hoa hồng tự nhiên, đá lạnh và lớp kem béo mềm mịn phủ trên cùng, phủ lớp cánh hoa hồng sấy khô.',
    sizes: [
      { name: 'S', price: 45000 },
      { name: 'M', price: 52000 },
      { name: 'L', price: 58000 }
    ]
  },
  { 
    id: 4, 
    name: 'Hương Mộc Bình An', 
    price: 45000, 
    image: 'assets/images/products/4.png', 
    description: '<strong>Hương Mộc Bình An</strong> là sự hòa quyện tinh tế giữa vị cà phê đậm đà và lớp kem béo ngọt ngào, điểm xuyến hương bánh quy caramel thơm lừng. Đây sẽ là một sự kết hợp hoàn hảo cho những ai yêu cà phê nhưng vẫn muốn chút mềm mại, nhẹ nhàng.\n\n<strong>Thành phần:</strong> Cà phê espresso, sữa tươi, đá lạnh, kem béo phủ trên cùng và vụn bánh quy Lotus caramel.',
    sizes: [
      { name: 'S', price: 45000 },
      { name: 'M', price: 52000 },
      { name: 'L', price: 58000 }
    ]
  },
  { 
    id: 5, 
    name: 'Thu Mộc Như Sương', 
    price: 42000, 
    image: 'assets/images/products/5.png', 
    description: '<strong>Thu Mộc Như Sương</strong> là sự giao hòa giữa vị sữa ngọt thanh và hương hoa mộc vàng tinh khiết. Mỗi ngụm là một khoảng lặng êm đềm, gợi nhớ hương thu trong gió. Một lựa chọn hoàn hảo cho những ai tìm kiếm sự tinh tế, yên bình và nhẹ nhàng trong từng ly sữa.\n\n<strong>Thành phần:</strong> Sữa tươi thanh trùng, chiết xuất hoa mộc, đá lạnh và lớp kem béo mịn phủ trên cùng, rắc nhẹ vụn hạt hoặc phấn hoa khô tạo điểm nhấn.',
    sizes: [
      { name: 'S', price: 42000 },
      { name: 'M', price: 50000 },
      { name: 'L', price: 55000 }
    ]
  },
  { 
    id: 6, 
    name: 'Anh Đào', 
    price: 55000, 
    image: 'assets/images/products/6.png', 
    description: '<strong>BST "Khúc Du Hoa Việt"</strong>\n\n<strong>Anh Đào</strong> là chương thơ ngọt ngào về tình yêu thương và vẻ đẹp dịu dàng vốn có của người phụ nữ Việt. Thưởng thức Anh Đào là để cảm nhận và biết ơn sự dịu dàng, lòng bao dung và tình yêu thương vô điều kiện của những người phụ nữ tuyệt vời.',
    sizes: [
      { name: 'M', price: 55000 }
    ]
  },
  { 
    id: 7, 
    name: 'Trà Diệp', 
    price: 55000, 
    image: 'assets/images/products/7.png', 
    description: '<strong>BST "Khúc Du Hoa Việt"</strong>\n\n<strong>Trà Diệp</strong> là một bản trường ca tôn vinh ý chí mạnh mẽ, sự vững vàng và sức sống bền bỉ của người phụ nữ Việt Nam hiện đại. Thức uống tôn vinh phẩm chất quý giá khiến người phụ nữ Việt không chỉ là "hậu phương" mà còn là "nguồn sáng" rực rỡ trên mọi hành trình họ đi. Thưởng thức Trà Diệp là để ngưỡng mộ và tôn vinh khí chất, bản lĩnh và sức sống bền bỉ của những người phụ nữ phi thường.',
    sizes: [
      { name: 'M', price: 55000 }
    ]
  },
  { 
    id: 8, 
    name: 'Túi Hoa', 
    price: 0, 
    image: 'assets/images/products/8.png', 
    description: '<strong>BST "Khúc Du Hoa Việt"</strong>\n\n<strong>Túi Hoa</strong> - Quà tặng kèm đặc biệt dành cho khách hàng khi mua các sản phẩm trong bộ sưu tập "Khúc Du Hoa Việt".\n\nTúi hoa được thiết kế tinh tế với họa tiết hoa Việt, mang đến sự sang trọng và ý nghĩa cho món quà của bạn.',
    sizes: [],
    isGift: true
  },
  { 
    id: 9, 
    name: 'Thiệp Hoa', 
    price: 0, 
    image: 'assets/images/products/9.png', 
    description: '<strong>BST "Khúc Du Hoa Việt"</strong>\n\n<strong>Thiệp Hoa</strong> - Quà tặng kèm đặc biệt dành cho khách hàng khi mua các sản phẩm trong bộ sưu tập "Khúc Du Hoa Việt".\n\nThiệp hoa được thiết kế tỉ mỉ với thông điệp ý nghĩa, để bạn có thể gửi gắm lời yêu thương đến những người phụ nữ quan trọng trong cuộc đời.',
    sizes: [],
    isGift: true
  }
];
