import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 text-blue-300 opacity-20">
          <Heart className="w-16 h-16 animate-pulse" />
        </div>
        <div className="absolute bottom-10 left-10 text-purple-300 opacity-15">
          <Mail className="w-12 h-12 animate-bounce-slow" />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white opacity-5">
          <div className="w-64 h-64 rounded-full border-2 border-current animate-spin-slow"></div>
        </div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
          <div className="text-center md:text-right animate-fadeInScale">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-4 text-yellow-300 glowing-text">مسابقه المولد النبوي الشريف</h3>
              <p className="text-blue-100 mb-4 leading-relaxed">
              نسعى لتشجيع الطلاب على حفظ وتلاوة القرآن الكريم وتعلم تعاليم الدين الإسلامي
            </p>
              <div className="flex items-center justify-center md:justify-start gap-2 text-pink-300">
                <Heart className="w-5 h-5 animate-pulse" />
                <span className="text-sm font-semibold">صنع بحب لطلاب القرآن الكريم</span>
              </div>
            </div>
          </div>

          <div className="text-center animate-fadeInScale" style={{ animationDelay: '0.2s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-6 text-green-300 glowing-text">تواصل معنا</h4>
              <div className="space-y-4">
                {/* الشيخ مصباح الدكاني */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/src/assets/mesbah.jpg" 
                      alt="الشيخ مصباح الدكاني"
                      className="w-12 h-12 rounded-full object-cover border-2 border-yellow-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <a
                        href="https://wa.me/201220536204"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors font-bold text-lg block glowing-text"
                      >
                        الشيخ مصباح الدكاني
                      </a>
                      <p className="text-blue-200 text-sm">للتواصل عبر الواتساب</p>
                    </div>
                  </div>
              </div>

                {/* الاستاذ اسلام سعيد */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/src/assets/eslam.jpg" 
                      alt="الاستاذ اسلام سعيد"
                      className="w-12 h-12 rounded-full object-cover border-2 border-green-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <a
                        href="https://wa.me/201276099675"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors font-bold text-lg block glowing-text"
                      >
                        الاستاذ اسلام سعيد
                      </a>
                      <p className="text-blue-200 text-sm">للتواصل عبر الواتساب</p>
                    </div>
                  </div>
                </div>

                {/* احمد طارق علي الدين */}
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <div className="flex items-center gap-4">
                    <img 
                      src="/src/assets/me.jpg" 
                      alt="احمد طارق علي الدين"
                      className="w-12 h-12 rounded-full object-cover border-2 border-purple-300 shadow-lg"
                    />
                    <div className="flex-1">
                      <a
                        href="https://wa.me/201559181558"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-yellow-300 transition-colors font-bold text-lg block glowing-text"
                      >
                        احمد طارق علي الدين
                      </a>
                      <p className="text-blue-200 text-sm">للتواصل عبر الواتساب</p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp info */}
                <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm rounded-2xl p-4 border border-green-300/30">
                  <div className="flex items-center justify-center gap-2 text-green-200">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span className="font-semibold">اضغط على الاسم للتواصل عبر الواتساب</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <div className="bg-red-500 p-2 rounded-full">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/BA3xbuvekc8kgKaMA" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-100 hover:text-white transition-colors font-medium"
                  >
                    الجامع الشرقي، دمليج، منوف، المنوفية
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left animate-fadeInScale" style={{ animationDelay: '0.4s' }}>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <h4 className="text-xl font-semibold mb-6 text-purple-300 glowing-text">روابط مهمة</h4>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    قوانين المسابقة
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    الأسئلة الشائعة
                  </a>
                </div>
                <div className="bg-white/5 rounded-xl p-3 hover:bg-white/10 transition-all">
                  <a href="#" className="text-blue-100 hover:text-white transition-colors font-medium flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    اتصل بنا
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 text-center relative z-10">
          {/* Quran Verse */}
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
            <p className="text-xl md:text-2xl text-yellow-200 font-bold glowing-text-main mb-2">
              "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا"
            </p>
            <p className="text-yellow-300/80 text-sm">
              صدق الله العظيم - سورة المزمل
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
            <p className="text-blue-200 text-lg font-semibold mb-2">
              &copy; 2025 مسابقه المولد النبوي الشريف بالجامع الشرقي. جميع الحقوق محفوظة.
            </p>
            <div className="flex items-center justify-center gap-2 text-purple-300">
              <Heart className="w-4 h-4 animate-pulse" />
              <span className="text-sm">تم التطوير بحب وإخلاص لخدمة كتاب الله</span>
              <Heart className="w-4 h-4 animate-pulse" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};