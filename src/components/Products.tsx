import React, { useState } from 'react';
import {
  Star, ShoppingCart, Heart, Eye,
  Users, Layout, ShieldCheck, Droplet, Ruler
} from 'lucide-react';


const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'Összes' },
    { id: 'mseries', label: 'M Széria' },
    { id: 'aseries', label: 'A Széria' },
    { id: 'xseries', label: 'X Széria' },
    { id: 'swimseries', label: 'Swim Széria' },
    { id: 'stilseries', label: 'STIL Széria' }
  ];

  const products = [
{
  id: 1,
  name: "M9",
  category: "mseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M9_top-down.png",
  features: [
    { icon: Users, label: "10 Ülés" },
    { icon: Layout, label: "3 Lounge Ülés" },
    { icon: ShieldCheck, label: "7 JetPak" },
    { icon: Droplet, label: "Simplicity Water Care" },
    { icon: Ruler, label: "9′2″ x 7′10″ x 3′2″ (2.79m x 2.39m x 0.96m)" }
  ]
},
{
  id: 2,
  name: "M8",
  category: "mseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M8-top-down.png",
  features: [
    { icon: Users, label: "9 Ülés" },
    { icon: Layout, label: "2 Lounge Ülés" },
    { icon: ShieldCheck, label: "6 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7′ 10″ (2.39m) x 7′ 10″ (2.39m) x 3' 2″ (.96m)" }
  ]
},
{
  id: 3,
  name: "M7",
  category: "mseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M7-top-down.png",
  features: [
    { icon: Users, label: "9 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "6 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7′ 7″ (2.31m) x 7′ 7″ (2.31m) x 3' 1″ (.94m)" }
  ]
},
{
  id: 4,
  name: "M6",
  category: "mseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/M6-top-down.png",
  features: [
    { icon: Users, label: "7 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7′ 7″ (2.31m) x 6′ 8″ (2.03m) x 2' 10″ (.86m)" }
  ]
},
{
  id: 5,
  name: "A9L",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A9L_Top-Down.png",
  features: [
    { icon: Users, label: "9 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "7 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "9’ 2″ (2.77m) x 7’ 10″ (2.39m) x 3’ 2″ (.97m)" }
  ]
},
{
  id: 6,
  name: "A8",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8_Top-Down.png",
  features: [
    { icon: Users, label: "8 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 vagy 6 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7’ 10″ (2.39m) x 7’ 10″ (2.39m) x 3’ 2″ (.97m)" }
  ]
},
{
  id: 7,
  name: "A8L",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A8L_Top-Down.png",
  features: [
    { icon: Users, label: "7 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 vagy 6 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7’ 10″ (2.39m) x 7’ 10″ (2.39m) x 3’ 2″ (.97m)" }
  ]
},
{
  id: 8,
  name: "A7",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7_Top-Down.png",
  features: [
    { icon: Users, label: "8 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 vagy 5 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7’ 4″ (2.24m) x 7’ 4″ (2.24m) x 3′ (.92m)" }
  ]
},
{
  id: 9,
  name: "A7L",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A7L_Top-Down.png",
  features: [
    { icon: Users, label: "7 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 vagy 5 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7’ 4″ (2.24m) x 7’ 4″ (2.24m) x 3′ (.92m)" }
  ]
},
{
  id: 10,
  name: "A7D",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/10/A7D_Top-Down.png",
  features: [
    { icon: Users, label: "7 Ülés" },
    { icon: Layout, label: "2 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 vagy 5 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7’ 4″ (2.24m) x 7’ 4″ (2.24m) x 3′ (.92m)" }
  ]
},
{
  id: 11,
  name: "A6",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6_2-Pump_Top-Down.png",
  features: [
    { icon: Users, label: "6 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "3 vagy 4 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7’ 4″ (2.24m) x 6’ 8″ (2.03m) x 2’ 10” (.86m)" }
  ]
},
{
  id: 12,
  name: "A6L",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A6L_2-Pump_Top-Down.png",
  features: [
    { icon: Users, label: "7 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "3 vagy 4 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "7’ 4″ (2.24m) x 6’ 8″ (2.03m) x 2’ 10” (.86m)" }
  ]
},
{
  id: 13,
  name: "A5L",
  category: "aseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/A5L_Top-Down.png",
  features: [
    { icon: Users, label: "3 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "2 vagy 3 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "5’ 8″ (1.72m) x 7′ (2.13m) x 2’ 8″ (.81m)" }
  ]
},
{
  id: 14,
  name: "X8",
  category: "xseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8_Select_Snow_Top.png",
  features: [
    { icon: Users, label: "8 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "50 Jet" },
    { icon: Droplet, label: "WellSpring Water Care" },
    { icon: Ruler, label: "7′ 10″ (2.39m) x 7′ 10″ (2.39m) x 3′ 2″ (.97m)" }
  ]
},
{
  id: 15,
  name: "X8L",
  category: "xseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X8L_Select_Snow_Top.png",
  features: [
    { icon: Users, label: "8 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "50 Jet" },
    { icon: Droplet, label: "WellSpring Water Care" },
    { icon: Ruler, label: "7′ 10″ (2.39m) x 7′ 10″ (2.39m) x 3′ 2″ (.97m)" }
  ]
},
{
  id: 16,
  name: "X7",
  category: "xseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X7_Select_Snow_Top.png",
  features: [
    { icon: Users, label: "8 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "43 Jet" },
    { icon: Droplet, label: "WellSpring Water Care" },
    { icon: Ruler, label: "7′ 4″ (2.24m) x 7′ 4″ (2.24m) x 3′ (.91m)" }
  ]
},
{
  id: 17,
  name: "X7L",
  category: "xseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X7L_Select_Snow_Top.png",
  features: [
    { icon: Users, label: "7 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "44 Jet" },
    { icon: Droplet, label: "WellSpring Water Care" },
    { icon: Ruler, label: "7′ 4″ (2.24m) x 7′ 4″ (2.24m) x 3′ (.91m)" }
  ]
},
{
  id: 18,
  name: "X6R",
  category: "xseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6R_Choice_Snow_Top.png",
  features: [
    { icon: Users, label: "5 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "21 Jet" },
    { icon: Droplet, label: "WellSpring Water Care" },
    { icon: Ruler, label: "6′ 7″ (2.01m) Átmérő x 2′ 10″ (.86m)" }
  ]
},
{
  id: 19,
  name: "X6L",
  category: "xseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X6L_Select_Snow_Top.png",
  features: [
    { icon: Users, label: "7 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "34 Jet" },
    { icon: Droplet, label: "WellSpring Water Care" },
    { icon: Ruler, label: "7′ 4″ (2.24m) x 6′ 8″ (2.03m) x 2′ 10″ (.86m)" }
  ]
},
{
  id: 20,
  name: "X5L",
  category: "xseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/X5L_Select_Snow_Top.png",
  features: [
    { icon: Users, label: "3 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "28 Jet" },
    { icon: Droplet, label: "WellSpring Water Care" },
    { icon: Ruler, label: "5′ 8″ (1.73m) x 7′ (2.13m) x 2′ 7″ (.79m)" }
  ]
},
{
  id: 21,
  name: "S200",
  category: "swimseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S200-Standard-SwimDek-768x1280.png",
  features: [
    { icon: Users, label: "7 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "17′ (5.18m) x 7′ 10″ (2.38m) x 4′ 4″ (1.32m)" }
  ]
},
{
  id: 22,
  name: "S180XD",
  category: "swimseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S180XD-Standard-SwimDek-768x1280.png",
  features: [
    { icon: Users, label: "5 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "15′ (4.57m) x 7′ 10″ (2.38m) x 5′ (1.52m)" }
  ]
},
{
  id: 23,
  name: "S150",
  category: "swimseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/S150-Standard-SwimDek-768x1280.png",
  features: [
    { icon: Users, label: "13 Ülés" },
    { icon: Layout, label: "1 Lounge Ülés" },
    { icon: ShieldCheck, label: "4 JetPak" },
    { icon: Droplet, label: "Simplicity Total Water Care" },
    { icon: Ruler, label: "12′ 8″ (3.86m) x 7′ 10″ (2.38m) x 4′ 4″ (1.32m)" }
  ]
},
{
  id: 24,
  name: "STIL7",
  category: "stilseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/STIL-7_top-down.png",
  features: [
    { icon: Users, label: "6 Ülés" },
    { icon: Layout, label: "2 Lounge Ülés" },
    { icon: ShieldCheck, label: "3 JetPak" },
    { icon: Droplet, label: "WellSpring" },
    { icon: Ruler, label: "7’ 4″ (2.24m) x 7′ (2.13m) x 2' 10″ (.86m)" }
  ]
},
{
  id: 25,
  name: "STIL5",
  category: "stilseries",
  image: "https://www.bullfrogspas.com/wp-content/uploads/2024/05/STIL-5_top-down.png",
  features: [
    { icon: Users, label: "4 Ülés" },
    { icon: Layout, label: "0 Lounge Ülés" },
    { icon: ShieldCheck, label: "3 JetPak" },
    { icon: Droplet, label: "WellSpring" },
    { icon: Ruler, label: "6’ 10” (2.08m) x 5’ 7″ (1.69m) x 2' 7″ (.79m)" }
  ]
}




  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <section id="products" className="py-20 bg-gradient-to-br from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-blue-800 mb-6">
            Nézd meg a 
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-rose-500">
              kollekciónkat
            </span>
          </h2>
          <p className="text-xl text-blue-600 max-w-3xl mx-auto leading-relaxed">
            Fedezd fel gondosan válogatott luxus spa termékeinket,
            amelyeket a minőség és a kényelem jegyében terveztek.
            Válassz a különböző szériák közül, és tapasztald meg a prémium élményt otthonodban.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                  : 'bg-white/60 backdrop-blur-sm border border-white/20 text-blue-700 hover:bg-blue-100'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="group bg-white/60 backdrop-blur-sm border border-white/20 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              {/* Product Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Action Buttons */}
                <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors">
                    <Heart className="w-5 h-5" />
                  </button>
                  <button className="bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors">
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

              </div>

              {/* Product Content */}
              <div className="p-6">
                <h3 className="text-xl font-playfair font-semibold text-blue-800 mb-2">
                  {product.name}
                </h3>
                
 <ul className="text-blue-600 text-sm space-y-2 mb-4">
  {product.features?.map((feature, index) => (
    <li key={index} className="flex items-center gap-2">
      <feature.icon className="w-4 h-4 text-blue-700" />
      <span>{feature.label}</span>
    </li>
  ))}
</ul>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Nem találsz megfelelő terméket?
            </h3>
            <p className="text-xl mb-6 opacity-90">
              Lépj be a dizján stúdiónkba, ahol személyre szabott tanácsadást és tervezést kínálunk számodra.
            </p>
            <button className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl">
              Irány a dizájn stúdióba
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;