// src/app/page.tsx
'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FuneralPage() {
  const [selectedMap, setSelectedMap] = useState<'village' | 'google' | 'streetview'>('village')
  const [villageMapUrl, setVillageMapUrl] = useState<string>('')

  // กำหนดการงานศพ
  const schedule = [
    { time: '06:00 - 08:00', activity: 'เตรียมสถานที่ จัดดอกไม้' },
    { time: '08:00 - 09:00', activity: 'รับแขกผู้มาร่วมงาน' },
    { time: '09:00 - 11:00', activity: 'พิธีสวดอภิธรรม์ รอบเช้า' },
    { time: '11:00 - 12:00', activity: 'พิธีถวายภัตตาหาร' },
    { time: '12:00 - 13:00', activity: 'รับประทานอาหารกลางวัน' },
    { time: '13:00 - 15:00', activity: 'พิธีสวดอภิธรรม์ รอบบ่าย' },
    { time: '15:00 - 16:00', activity: 'พิธีรดน้ำศพ / ลาศพ' },
    { time: '16:00 - 17:00', activity: 'ส่งขบวนไปยังสุสาน' }
  ]

  const hostList = [
    { name: 'นายสมศักดิ์ ใจดี', relation: 'บุตรชาย', phone: '081-234-5678' },
    { name: 'นางสาวมาลี สุขใจ', relation: 'บุตรสาว', phone: '082-345-6789' },
    { name: 'นายพิชัย รักดี', relation: 'หลานชาย', phone: '083-456-7890' },
    { name: 'นางรำไพ จิตรดี', relation: 'หลานสาว', phone: '084-567-8901' },
    { name: 'นายสมชาย ใจงาม', relation: 'ญาติ', phone: '085-678-9012' },
    { name: 'นางสุพิน ดีใจ', relation: 'เพื่อนบ้าน', phone: '086-789-0123' },
    { name: 'นายชาญ มีสุข', relation: 'ประธานหมู่บ้าน', phone: '087-890-1234' },
    { name: 'นางนวล สุขสันต์', relation: 'ผู้ใหญ่บ้าน', phone: '088-901-2345' },
    { name: 'นายอำนาจ ใจดี', relation: 'กรรมการหมู่บ้าน', phone: '089-012-3456' },
    { name: 'นางสิริ รักแท้', relation: 'อาสาสมัคร', phone: '090-123-4567' }
  ]

  const handleDirections = () => {
    // เปิด Google Maps ไปยังสถานที่จัดงานโดยตรง
    const mapsUrl = 'https://www.google.com/maps/place/16%C2%B019%2722.7%22N+103%C2%B029%2704.0%22E/@16.32204,103.4820028,17z/data=!4m4!3m3!8m2!3d16.322977!4d103.484449?entry=ttu&g_ep=EgoyMDI1MDcxMy4wIKXMDSoASAFQAw%3D%3D'
    window.open(mapsUrl, '_blank')
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setVillageMapUrl(imageUrl)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-2">
              งานศพ คุณยายบุญชู ภานุรักษ์
            </h1>
            <p className="text-gray-300 text-lg">
              สถานที่จัดงานศพ บ้านคอมวง ตำบลโนนศิลาเลิง อำเภอชนบท จังหวัดกาฬสินธุ์
            </p>
            <p className="text-gray-400 text-sm mt-2">
              125 หมู่ 8 บ้านคอมวง ต.โนนศิลาเลิง อ.ชนบท จ.กาฬสินธุ์ 46130
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Maps */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-4 text-gray-800 flex items-center">
                <span className="mr-2">📍</span>
                ที่ตั้งสถานที่
              </h2>
              
              {/* Map Toggle */}
              <div className="flex mb-4 bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setSelectedMap('village')}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors text-sm ${
                    selectedMap === 'village' 
                      ? 'bg-white shadow-sm text-gray-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  แผนที่หมู่บ้าน
                </button>
                <button
                  onClick={() => setSelectedMap('google')}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors text-sm ${
                    selectedMap === 'google' 
                      ? 'bg-white shadow-sm text-gray-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  Google Maps
                </button>
                <button
                  onClick={() => setSelectedMap('streetview')}
                  className={`flex-1 py-2 px-4 rounded-md transition-colors text-sm ${
                    selectedMap === 'streetview' 
                      ? 'bg-white shadow-sm text-gray-800' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  ภาพถนน
                </button>
              </div>

              {/* Map Display */}
              <div className="border-2 border-gray-200 rounded-lg overflow-hidden">
                {selectedMap === 'village' ? (
                  <div className="space-y-4">
                    {!villageMapUrl ? (
                      <div className="relative">
                        {/* แสดงภาพแผนที่จากไฟล์ที่อัปโหลด */}
                        <div className="h-96 bg-white rounded-lg overflow-hidden border shadow-lg">
                          <div className="w-full h-full relative">
                            <Image
                              src="/map.png"
                              alt="แผนที่หมู่บ้าน - บ้านคอมวง"
                              fill
                              className="object-contain bg-white"
                              priority
                            />
                            {/* ข้อมูลสถานที่จัดงาน - วางทับบนภาพ */}
                            <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border-2 border-red-500 max-w-xs">
                              <div className="text-red-600 font-bold text-lg mb-2 text-center">
                                🏠 สถานที่จัดงานศพ
                              </div>
                              <div className="text-gray-800 font-bold text-base">
                                คุณยายบุญชู ภานุรักษ์
                              </div>
                              <div className="text-sm text-gray-600 mt-2 space-y-1">
                                <p><span className="font-semibold">📍</span> 125 หมู่ 8 บ้านคอมวง</p>
                                <p>ต.โนนศิลาเลิง อ.ชนบท</p>
                                <p>จ.กาฬสินธุ์ 46130</p>
                                <p className="text-blue-600 font-semibold">📞 081-XXX-XXXX</p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 text-center">
                          <label 
                            htmlFor="map-upload" 
                            className="inline-block bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 transition-colors text-sm"
                          >
                            📤 เปลี่ยนแผนที่หมู่บ้าน
                          </label>
                          <input
                            id="map-upload"
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                          />
                        </div>
                      </div>
                    ) : (
                      <div className="relative">
                        <div className="relative h-96 rounded-lg overflow-hidden">
                          <Image
                            src={villageMapUrl}
                            alt="แผนที่หมู่บ้าน"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <button
                          onClick={() => setVillageMapUrl('')}
                          className="absolute top-2 right-2 bg-red-600 text-white w-8 h-8 rounded-full hover:bg-red-700 transition-colors flex items-center justify-center"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                    
                    {/* จุดสำคัญในแผนที่ */}
                    <div className="bg-gray-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <span className="mr-2">📍</span>
                        จุดสำคัญในหมู่บ้าน
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• บ้านคอมวง (สถานที่จัดงาน) 📍</li>
                        <li>• บ้านสีสุก (ทางเข้าหมู่บ้าน)</li>
                        <li>• บ้านนาสีมวล (ทางออกหมู่บ้าน)</li>
                        <li>• วัดบ้านสีสุก (วัดประจำหมู่บ้าน)</li>
                        <li>• ที่จอดรถ (บริเวณบ้านคอมวง)</li>
                        <li>• ร้านค้า/ร้านอาหาร (ใกล้วัด)</li>
                      </ul>
                    </div>
                  </div>
                ) : selectedMap === 'google' ? (
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d967.8!2d103.484449!3d16.322977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z16Phn4Tn4Z6G4Z-A4Z-E4Z6Z4Z6K4Z6c4Z-N4Z6G4Z6K4Z6Z4Z-A4Z6B4Z-E4Z6Z!5e0!3m2!1sen!2sth!4v1000000000000!5m2!1sen!2sth"
                    width="100%"
                    height="384"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Google Maps - สถานที่จัดงานศพ"
                  />
                ) : (
                  // Street View
                  <div className="h-96 bg-gray-100 flex flex-col">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!4v1000000000000!6m8!1m7!1sCAoSLEFGMVFpcE1xRnJ5M0lxMVRSeGF6RXNNb3Q2Q0NjODhyYW1FcmdKNkFmX2JX!2m2!1d16.322977!2d103.484449!3f0!4f0!5f0.7820865974627469"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Street View - สถานที่จัดงานศพ"
                    />
                    <div className="p-3 bg-white">
                      <p className="text-sm text-gray-600">
                        🗺️ มุมมองจากถนน - สถานที่จัดงาน
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Navigation Button */}
              <div className="mt-4 text-center">
                <button
                  onClick={handleDirections}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors inline-flex items-center"
                >
                  <span className="mr-2">🧭</span>
                  นำทางไปยังสถานที่
                </button>
              </div>
            </div>

            {/* Location Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                ข้อมูลสถานที่
              </h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-red-600 mr-3">📍</span>
                  <span>125 หมู่ 8 บ้านคอมวง ตำบลโนนศิลาเลิง อำเภอชนบท จังหวัดกาฬสินธุ์ 46130</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🗺️</span>
                  <span>พิกัด: 16°19&apos;22.7&quot;N 103°29&apos;04.0&quot;E</span>
                </div>
                <div className="flex items-center">
                  <span className="text-blue-600 mr-3">🕐</span>
                  <span>เวลา: 08:00 - 17:00 น.</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 mr-3">📞</span>
                  <span>โทร: 081-XXX-XXXX (ติดต่อเจ้าภาพ)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Schedule & Host List */}
          <div className="space-y-6">
            {/* Schedule */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                <span className="mr-2">🕐</span>
                กำหนดการงานศพ
              </h2>
              <div className="space-y-4">
                {schedule.map((item, index) => (
                  <div 
                    key={index}
                    className="border-l-4 border-blue-500 pl-4 py-2 bg-gray-50 rounded-r"
                  >
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
                      <div>
                        <h3 className="font-semibold text-blue-700 text-sm">
                          {item.time}
                        </h3>
                        <p className="text-gray-700 text-sm mt-1">
                          {item.activity}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Host List */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
                <span className="mr-2">👥</span>
                รายชื่อเจ้าภาพ
              </h2>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {hostList.map((host, index) => (
                  <div 
                    key={index}
                    className="border-b border-gray-200 pb-4 last:border-b-0"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg text-gray-800">
                          {host.name}
                        </h3>
                        <p className="text-gray-600">
                          {host.relation}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-blue-600">
                          📞 {host.phone}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-300">
            ขอแสดงความเสียใจอย่างลึกซึ้งต่อการจากไปของ คุณยายบุญชู ภานุรักษ์ • โทร: 081-XXX-XXXX
          </p>
        </div>
      </footer>
    </div>
  )
}