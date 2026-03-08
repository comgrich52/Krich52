import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, Sun, Zap, Wrench, Lightbulb, ShieldCheck, Award, Clock, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'หน้าแรก', href: '#hero' },
    { name: 'เกี่ยวกับเรา', href: '#about' },
    { name: 'บริการ', href: '#services' },
    { name: 'ทำไมต้องเลือกเรา', href: '#why-us' },
    { name: 'ผลงานของเรา', href: '#portfolio' },
    { name: 'ติดต่อเรา', href: '#contact' },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = element.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  const portfolioItems = [
    { id: 1, category: 'home', title: 'ติดตั้ง Solar Rooftop บ้านพักอาศัย', image: 'https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=800&auto=format&fit=crop' },
    { id: 2, category: 'factory', title: 'ติดตั้ง Solar Rooftop โรงงานอุตสาหกรรม', image: 'https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=800&auto=format&fit=crop' },
    { id: 3, category: 'pm', title: 'งานบำรุงรักษา PM ระบบโซลาร์เซลล์', image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop' },
    { id: 4, category: 'home', title: 'ติดตั้งระบบโซลาร์เซลล์ ทาวน์โฮม', image: 'https://images.unsplash.com/photo-1559302504-64aae6ca6b6f?q=80&w=800&auto=format&fit=crop' },
    { id: 5, category: 'factory', title: 'ติดตั้ง Solar Farm ขนาดเล็ก', image: 'https://images.unsplash.com/photo-1592833159155-c62df1b65634?q=80&w=800&auto=format&fit=crop' },
    { id: 6, category: 'pm', title: 'ทำความสะอาดแผงโซลาร์เซลล์', image: 'https://images.unsplash.com/photo-1611365892117-00ac5ef43c90?q=80&w=800&auto=format&fit=crop' },
  ];

  const filteredPortfolio = activeTab === 'all' ? portfolioItems : portfolioItems.filter(item => item.category === activeTab);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      {/* Navbar */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center">
            <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="flex items-center gap-2 z-50">
              <div className="w-10 h-10 rounded-lg bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-xl">
                P
              </div>
              <div className={`font-bold leading-tight ${isScrolled ? 'text-brand-navy' : 'text-white'}`}>
                <div className="text-lg">PROM FAMILY</div>
                <div className="text-xs tracking-wider opacity-80">ENGINEERING CO., LTD.</div>
              </div>
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`text-sm font-medium hover:text-brand-gold transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-brand-gold hover:bg-yellow-400 text-brand-navy font-semibold px-5 py-2 rounded-full transition-colors text-sm"
              >
                ขอใบเสนอราคา
              </a>
            </nav>

            {/* Mobile Menu Toggle */}
            <button 
              className={`md:hidden z-50 ${isScrolled || mobileMenuOpen ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <nav className="flex flex-col items-center gap-6">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-2xl font-medium text-brand-navy hover:text-brand-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={(e) => scrollToSection(e, '#contact')}
              className="bg-brand-gold text-brand-navy font-semibold px-8 py-3 rounded-full mt-4 text-lg"
            >
              ขอใบเสนอราคา
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2070&auto=format&fit=crop" 
            alt="วิศวกรกำลังทำ PM ระบบโซลาร์เซลล์" 
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 to-brand-navy/60"></div>
        </div>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl text-white"
          >
            <motion.div variants={fadeIn} className="inline-block px-3 py-1 sm:px-4 sm:py-1.5 rounded-full bg-brand-blue/30 border border-brand-blue/50 text-brand-gold font-medium text-xs sm:text-sm mb-4 sm:mb-6 backdrop-blur-sm">
              บริษัท พร้อม แฟมิลี่ เอ็นจิเนียริ่ง จำกัด
            </motion.div>
            <motion.h1 variants={fadeIn} className="text-xl min-[375px]:text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-4 sm:mb-6">
              <span className="whitespace-nowrap">ผู้เชี่ยวชาญด้าน<span className="text-brand-gold">โซลาร์เซลล์</span></span><br />
              <span className="whitespace-nowrap">และงานระบบไฟฟ้าครบวงจร</span>
            </motion.h1>
            <motion.p variants={fadeIn} className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 max-w-2xl leading-relaxed">
              บริการออกแบบ ติดตั้ง ตรวจสอบ และบำรุงรักษาระบบพลังงานแสงอาทิตย์และระบบไฟฟ้า โดยทีมวิศวกรมืออาชีพ เพื่อประสิทธิภาพสูงสุดและลดต้นทุนพลังงานอย่างยั่งยืน
            </motion.p>
            <motion.div variants={fadeIn} className="flex flex-wrap gap-3 sm:gap-4">
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-brand-gold hover:bg-yellow-400 text-brand-navy font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-colors flex items-center gap-2 text-sm sm:text-base"
              >
                ขอใบเสนอราคา <ChevronRight size={18} />
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, '#contact')}
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 font-bold px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-colors backdrop-blur-sm text-sm sm:text-base"
              >
                ติดต่อเรา
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=1000&auto=format&fit=crop" 
                  alt="ทีมวิศวกร" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 bg-brand-navy text-white p-8 rounded-2xl shadow-xl hidden md:block">
                <div className="text-4xl font-bold text-brand-gold mb-2">10+</div>
                <div className="text-sm font-medium">ปีแห่งประสบการณ์<br/>ด้านวิศวกรรม</div>
              </div>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">เกี่ยวกับเรา</motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">
                มุ่งมั่นสู่ความเป็นเลิศด้านพลังงานและวิศวกรรม
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 mb-6 leading-relaxed">
                บริษัท พร้อม แฟมิลี่ เอ็นจิเนียริ่ง จำกัด ก่อตั้งขึ้นด้วยความมุ่งมั่นที่จะเป็นผู้นำในการให้บริการด้านระบบโซลาร์เซลล์และงานระบบไฟฟ้าอย่างครบวงจร เรามีทีมวิศวกรและช่างเทคนิคผู้เชี่ยวชาญที่พร้อมส่งมอบงานคุณภาพสูง ปลอดภัย และได้มาตรฐานสากล
              </motion.p>
              <motion.p variants={fadeIn} className="text-gray-600 mb-8 leading-relaxed">
                เป้าหมายของเราคือการช่วยให้ลูกค้าลดต้นทุนด้านพลังงาน เพิ่มประสิทธิภาพการใช้ไฟฟ้า และมีส่วนร่วมในการรักษาสิ่งแวดล้อมอย่างยั่งยืน ผ่านบริการที่ใส่ใจทุกรายละเอียดตั้งแต่การให้คำปรึกษา ออกแบบ ติดตั้ง ไปจนถึงบริการหลังการขาย
              </motion.p>
              
              <motion.div variants={fadeIn} className="grid grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">มาตรฐานสากล</h4>
                    <p className="text-sm text-gray-500">ทำงานตามหลักวิศวกรรม</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-brand-blue shrink-0">
                    <Wrench size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy">ทีมงานมืออาชีพ</h4>
                    <p className="text-sm text-gray-500">วิศวกรผู้มีใบอนุญาต</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">บริการของเรา</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">บริการด้านวิศวกรรมครบวงจร</h2>
            <p className="text-gray-600">ตอบโจทย์ทุกความต้องการด้านระบบไฟฟ้าและพลังงานแสงอาทิตย์ ด้วยบริการที่ครอบคลุมตั้งแต่ต้นจนจบ</p>
          </div>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { icon: <Sun size={32} />, title: 'ออกแบบและติดตั้ง Solar Rooftop', desc: 'บริการสำรวจ ออกแบบ และติดตั้งระบบโซลาร์เซลล์บนหลังคาสำหรับบ้านพักอาศัยและอาคารพาณิชย์' },
              { icon: <Zap size={32} />, title: 'ออกแบบและติดตั้งระบบไฟฟ้า', desc: 'รับเหมาติดตั้งระบบไฟฟ้าแรงสูง-แรงต่ำ ระบบแสงสว่าง และระบบควบคุมภายในอาคารและโรงงาน' },
              { icon: <Wrench size={32} />, title: 'ตรวจสอบและบำรุงรักษา PM', desc: 'บริการ Preventive Maintenance สำหรับ Solar Rooftop และ Solar Farm เพื่อประสิทธิภาพสูงสุด' },
              { icon: <Lightbulb size={32} />, title: 'ที่ปรึกษาด้านพลังงาน', desc: 'ให้คำปรึกษาด้านการจัดการพลังงาน วิเคราะห์การใช้ไฟฟ้า และวางแผนลดค่าไฟอย่างเป็นระบบ' }
            ].map((service, index) => (
              <motion.div key={index} variants={fadeIn} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                <div className="w-16 h-16 rounded-xl bg-blue-50 text-brand-blue flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-navy mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-us" className="py-20 md:py-32 bg-brand-navy text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-brand-gold rounded-full mix-blend-multiply filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-brand-gold font-bold tracking-wider uppercase text-sm mb-2">ทำไมต้องเลือกเรา</motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">ความไว้วางใจที่สร้างได้ด้วยคุณภาพ</motion.h2>
              <motion.p variants={fadeIn} className="text-gray-300 mb-10 leading-relaxed text-lg">
                เราไม่เพียงแค่ส่งมอบงาน แต่เราส่งมอบความมั่นใจ ด้วยมาตรฐานการทำงานที่เข้มงวดและบริการที่ใส่ใจ เพื่อให้คุณได้รับสิ่งที่ดีที่สุด
              </motion.p>

              <div className="space-y-6">
                {[
                  { icon: <Award className="text-brand-gold" size={24} />, title: 'ความเป็นมืออาชีพ', desc: 'ทีมงานวิศวกรและช่างเทคนิคที่มีความเชี่ยวชาญและประสบการณ์สูง' },
                  { icon: <ShieldCheck className="text-brand-gold" size={24} />, title: 'มาตรฐานและความปลอดภัย', desc: 'ใช้อุปกรณ์คุณภาพสูงและปฏิบัติงานตามมาตรฐานความปลอดภัยสูงสุด' },
                  { icon: <Clock className="text-brand-gold" size={24} />, title: 'บริการหลังการขายที่ยอดเยี่ยม', desc: 'พร้อมดูแลและแก้ไขปัญหาอย่างรวดเร็วตลอดอายุการใช้งาน' }
                ].map((item, index) => (
                  <motion.div key={index} variants={fadeIn} className="flex gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0 border border-white/5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <img src="https://images.unsplash.com/photo-1508514177221-188b1c77eca2?q=80&w=600&auto=format&fit=crop" alt="งานติดตั้ง" className="rounded-2xl w-full h-64 object-cover mt-8" referrerPolicy="no-referrer" />
                <img src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&w=600&auto=format&fit=crop" alt="แผงโซลาร์" className="rounded-2xl w-full h-64 object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-gold text-brand-navy w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl border-4 border-brand-navy">
                <span className="text-3xl font-bold">100%</span>
                <span className="text-xs font-bold text-center mt-1">รับประกัน<br/>ผลงาน</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">ผลงานของเรา</div>
            <h2 className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">ความสำเร็จที่เราภูมิใจ</h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
            {[
              { id: 'all', label: 'ทั้งหมด' },
              { id: 'home', label: 'งานติดตั้งบ้านพักอาศัย' },
              { id: 'factory', label: 'งานติดตั้งโรงงาน' },
              { id: 'pm', label: 'งานบำรุงรักษา PM' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                  activeTab === tab.id 
                    ? 'bg-brand-navy text-white shadow-md' 
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          >
            {filteredPortfolio.map((item) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={item.id} 
                className="group rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 bg-white"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <span className="text-brand-gold font-medium text-sm bg-white/10 backdrop-blur-md px-3 py-1 rounded-full">
                      {item.category === 'home' ? 'บ้านพักอาศัย' : item.category === 'factory' ? 'โรงงานอุตสาหกรรม' : 'งานบำรุงรักษา PM'}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-brand-navy group-hover:text-brand-blue transition-colors">{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="text-brand-blue font-bold tracking-wider uppercase text-sm mb-2">ติดต่อเรา</motion.div>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-brand-navy mb-6">พร้อมให้คำปรึกษา<br/>และประเมินราคาฟรี</motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 mb-10 leading-relaxed">
                สนใจติดตั้งระบบโซลาร์เซลล์ หรือต้องการสอบถามข้อมูลเพิ่มเติมเกี่ยวกับบริการของเรา ทีมงานวิศวกรของเราพร้อมให้คำแนะนำและประเมินราคาเบื้องต้นโดยไม่มีค่าใช้จ่าย
              </motion.p>

              <div className="space-y-6">
                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-blue shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">ที่ตั้งบริษัท</h4>
                    <p className="text-gray-600">123 ถนนตัวอย่าง แขวงตัวอย่าง<br/>เขตตัวอย่าง กรุงเทพมหานคร 10000</p>
                  </div>
                </motion.div>
                
                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-blue shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">เบอร์โทรศัพท์</h4>
                    <p className="text-gray-600">02-XXX-XXXX, 08X-XXX-XXXX</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-brand-blue shrink-0">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-navy mb-1">อีเมล</h4>
                    <p className="text-gray-600">contact@promfamily.co.th</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeIn}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-brand-navy mb-6">ส่งข้อความถึงเรา</h3>
              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">ชื่อ-นามสกุล</label>
                  <input type="text" id="name" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="กรอกชื่อของคุณ" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">เบอร์โทรศัพท์</label>
                    <input type="tel" id="phone" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="08X-XXX-XXXX" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">อีเมล</label>
                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all" placeholder="example@email.com" />
                  </div>
                </div>
                <div>
                  <label htmlFor="details" className="block text-sm font-medium text-gray-700 mb-1">รายละเอียดงานที่สนใจ</label>
                  <textarea id="details" rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all resize-none" placeholder="ระบุความต้องการของคุณ เช่น สนใจติดตั้งโซลาร์เซลล์บ้านพักอาศัย..."></textarea>
                </div>
                <button type="submit" className="w-full bg-brand-navy hover:bg-blue-900 text-white font-bold py-4 rounded-xl transition-colors shadow-md hover:shadow-lg">
                  ส่งข้อความ
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-2xl">
                P
              </div>
              <div>
                <div className="font-bold text-lg">บริษัท พร้อม แฟมิลี่ เอ็นจิเนียริ่ง จำกัด</div>
                <div className="text-sm text-gray-400">PROM FAMILY ENGINEERING CO., LTD.</div>
              </div>
            </div>
            
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#hero" onClick={(e) => scrollToSection(e, '#hero')} className="hover:text-brand-gold transition-colors">หน้าแรก</a>
              <a href="#about" onClick={(e) => scrollToSection(e, '#about')} className="hover:text-brand-gold transition-colors">เกี่ยวกับเรา</a>
              <a href="#services" onClick={(e) => scrollToSection(e, '#services')} className="hover:text-brand-gold transition-colors">บริการ</a>
              <a href="#portfolio" onClick={(e) => scrollToSection(e, '#portfolio')} className="hover:text-brand-gold transition-colors">ผลงาน</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PROM FAMILY ENGINEERING CO., LTD. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
