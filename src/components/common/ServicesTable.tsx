'use client'; // Только если используете app router

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const data = {
  'Tear Trough Augmentation': [
    ['Juvederm Volbella - 1ml', '250£'],
    ['Juvederm Volite', '200£'],
    ['Teosyal Redensity 2 - 1ml', '230£'],
  ],
  'Lip Augmentation': [
    ['Juvederm Smile 0.5ml', '180£'],
    ['Juvederm Ultra 2 0.6ml', '180£'],
    ['Juvederm Retouch 0.6ml', '200£'],
    ['Juvederm Ultra 3 1ml', '220£'],
    ['Juvederm Volift 1ml', '250£'],
    ['Juvederm Volift 1ml', '180£'],
    ['Teosyal Kiss 0.7ml', '185£'],
  ],
  'Cheekbones, Chin and Jawline Augmentation': [
    ['Juvederm Voluma - 1ml', '250£'],
    ['Juvederm Volux - 1ml', '250£'],
    ['Neuramis Volume - 1ml', '210£'],
  ],
  'Lifting Treatment and Collagen Stimulation of the Ligaments': [
    ['Radiesse 1.5ml (in any techniqu)', '300£'],
    ['Radiesse 3ml (Mid and lower face)', '600£'],
    ['RRS Long Lasting 3ml', '250£'],
  ],
  'Anti Aging': [
    ['Forehead / Frown areas', '200£'],
    ['Frown area', '100£'],
    ['Eyes area', '100£'],
    ['3 areas', '250£'],
    ['Brow lift', '60£'],
    ['Bunny Lines', '60£'],
    ['Chin puckering', '60£'],
    ['Masseter', '200£'],
    ['Rosacea treatment', '150£'],
    ['Purse string wrinkles above the upper lip', '60£'],
    ['Marionette lines', '80£'],
    ['Nefertiti lift', '200£'],
    ['Platysmal bands', '250£'],
    ['Hyperhidrosis treatment', '300£'],
  ],
  'Blanching therapy-smoothing the wrinkles all over the face or Venus rings on the neck': [
    ['Belotero soft', '200£'],
    ['Belotero balance', '200£'],
    [
      'The course consists of 2 treatments once in a month\nIf you pay for the full course of treatment,a discount of - 50£ is provided',
      '',
    ],
  ],
  'Bio revitalization & mesotherapy': [
    ['Juvederm Volite (1 ml- 9 months)', '200£'],
    ['Jalupro classic-3 ml. (eye area,scars treatment,stretch marks)', '150£'],
    ['Jalupro young eye 1 ml', '200£'],
    ['Rejuran Healer 2 ml (NCTF 135 HA)', '200£'],
    ['Rejuran HB plus', '180£'],
    ['Rejuran i', '170£'],
    ['Rejuran S', '150£'],
    ['Twace 3.0', '170£'],
    ['Twace eye', '150£'],
    ['Kiara Reju 2,2 ml', '110£'],
    [' Monaco', '180£'],
  ],
  'Hair treatment': [['Dermaheal HL 1,5 ml', '110£']],
  ' Fat-dissolving': [
    ['RRS HA Cellutrix\n(Face and body areas.For edemato-fibrosclerotic areas) 5 ml.', '150£'],
    ['Jalupro classic-3 ml. (eye area,scars treatment,stretch marks)', '150£'],
    ['Dermaheal LL(face) 5 ml', '150£'],
    ['Miore V Line 5 ml', '100£'],
  ],
  'Skin peels': [
    ['BioRePil 3 ml', '120£'],
    ['PRX-T33 2,5 ml', '120£'],
    ['Mesoesthetic Azelan', '30£'],
    ['Mesoesthetic Mandelic 30%', '50£'],
    ['Mesoesthetic Salicylic 30% ', '50£'],
  ],
  'Skin Clinic': [
    ['Global peel solution', '50£'],
    ['Glycolic solution Exfoliating solution ', '50£'],
  ],
  'Hydro Peptidec': [
    ['Peel1+peel', '260£'],
    ['Platysmal bands', '250£'],
  ],
  'Facial cleansing': [
    ['Deep facial cleansing 80 min', '90£'],
    ['Facial cleansing + Enzyme therapy 80 min', '120£'],
    ['Atraumatic facial cleansing 60 min', '60£'],
    ['Acne stop', '90£'],
    ['Treatment of rosacea 80 min', '90£'],
  ],
  'Permanent makeup of': [
    ['Eyebrows', '170£'],
    ['FLips', '150£'],
    ['Eyes', '100£'],
  ],
  'Zemits SkyFrax Pro': [
    ['Face, neck, décolletage', '300£'],
    ['Face, neck', '250£'],
    ['Abdomen', '100£'],
  ],
};

const menuItems = Object.keys(data);

export default function ServicesTable() {
  const [selected, setSelected] = useState(menuItems[0]);
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 py-6 gap-8">
      {/* Sidebar (Desktop) / Dropdown (Mobile) */}
      <div className="md:w-1/4 mb-4 md:mb-0">
        {/* Mobile Dropdown */}
        <div className="md:hidden">
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="w-full flex justify-between items-center uppercase px-4 py-2 border rounded bg-white shadow"
          >
            <span>{selected}</span>
            <ChevronDown className={`transition ${isMenuOpen ? 'rotate-180' : ''}`} />
          </button>
          {isMenuOpen && (
            <div className="mt-2 border rounded bg-white shadow">
              {menuItems.map((item) => (
                <div
                  key={item}
                  onClick={() => {
                    setSelected(item);
                    setMenuOpen(false);
                  }}
                  className="p-3 hover:bg-gray-100 cursor-pointer uppercase"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Desktop Sidebar */}
        <div className="hidden md:flex flex-col gap-2">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => setSelected(item)}
              className={`text-left px-4 py-3 rounded uppercase hover:text-white border-b border-gray-200 hover:bg-[#4D3D31] ${
                selected === item ? 'bg-[#4D3D31] font-semibold' : ''
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="md:w-3/4">
        <div className="overflow-x-auto bg-white rounded shadow border">
          <table className="w-full table-auto border-collapse">
            <thead className="bg-[#dcd8d6] text-left">
              <tr>
                <th className="p-4 border-r border-gray-200 font-semibold">SERVICE</th>
                <th className="p-4 font-semibold text-right">PRICE</th>
              </tr>
            </thead>
            <tbody>
              {data[selected].map(([service, price]: [string, string], index: number) => (
                <tr key={index} className="border-t hover:bg-[#edecea]">
                  <td className="p-4 border-r border-gray-200 text-gray-60">{service}</td>
                  <td className="p-4 text-right text-gray-600">{price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
