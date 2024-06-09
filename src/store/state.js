export default {
  cartData: JSON.parse(localStorage.getItem("myItem")) || [],
  data: [
    {
      id: 1,
      name: "Palermo Leather Sneakers",
      price: "$100",
      images: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/396464/03/sv01/fnd/PNA/fmt/png/Palermo-Leather-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/396464/03/mod01/fnd/PNA/fmt/png/Palermo-Leather-Sneakers'],
    },
    {
      id: 2,
      name: "GV Special Sneakers",
      price: "$210",
      images: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/398374/02/sv01/fnd/PNA/fmt/png/GV-Special-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_600,h_600/global/398374/02/sv02/fnd/PNA/fmt/png/GV-Special-Sneakers'],
    },
    {
      id: 3,
      name: "Palermo Leather Sneakers",
      price: "$110",
      images: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/396464/05/sv01/fnd/PNA/fmt/png/Palermo-Leather-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/396464/05/mod01/fnd/PNA/fmt/png/Palermo-Leather-Sneakers'],
    },
    {
      id: 4,
      name: "Rebound Sneakers",
      price: "$180",
      images: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/392326/06/sv01/fnd/PNA/fmt/png/Rebound-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/392326/06/mod01/fnd/PNA/fmt/png/Rebound-Sneakers'],
    },
    {
      id: 5,
      name: "CA Pro Classic Sneakers",
      price: "$180",
      images: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/380190/01/sv01/fnd/PNA/fmt/png/CA-Pro-Classic-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/380190/01/mod03/fnd/PNA/fmt/png/CA-Pro-Classic-Sneakers'],
    },
    {
      id: 6,
      name: "Rebound Sneakers",
      price: "$180",
      images: ['https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/392326/04/sv01/fnd/PNA/fmt/png/Rebound-Sneakers','https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_500,h_500/global/392326/04/mod01/fnd/PNA/fmt/png/Rebound-Sneakers'],
    },
  ],
}
