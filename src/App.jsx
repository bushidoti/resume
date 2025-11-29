import './App.css'

function App() {

  return (
      <div className="bg-white/60 rounded-2xl ">
          <div className="container mx-auto py-8">
              <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
                  <div className="col-span-4 sm:col-span-3">
                      <div className="bg-white shadow rounded-lg p-6">
                          <div className="flex flex-col items-center">
                              <img src="./me.PNG"
                                   className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0">
                              </img>
                              <h1 className="text-xl font-bold">سجاد شاه محمدلو</h1>
                              <p className="text-gray-700">Software Developer</p>
                              <div className="mt-6 flex flex-wrap gap-4 justify-center">
                                  <a href="tel:0989123389256"
                                     className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">تماس</a>
                                  <a href="./resume.pdf"
                                     className="bg-gray-300 hover:bg-gray-400 text-gray-700 py-2 px-4 rounded">رزومه</a>
                              </div>
                          </div>
                          <hr className="my-6 border-t border-gray-300"/>
                          <div className="flex flex-col">
                              <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">مهارت ها</span>
                              <ul>
                                  <li className="mb-2">JavaScript</li>
                                  <li className="mb-2">Python</li>
                                  <li className="mb-2">Django</li>
                                  <li className="mb-2">MongoDB</li>
                                  <li className="mb-2">MySQL</li>
                                  <li className="mb-2">React</li>
                                  <li className="mb-2">Node.js</li>
                                  <li className="mb-2">Next.js</li>
                                  <li className="mb-2">HTML/CSS</li>
                                  <li className="mb-2">Tailwind Css</li>
                              </ul>
                          </div>
                      </div>
                  </div>
                  <div className="col-span-4 sm:col-span-9">
                      <div className="bg-white shadow rounded-lg p-6">
                          <h2 className="text-xl font-bold mb-4">درباره من</h2>
                          <p className="text-gray-700">
                              با بیش از هشت سال تجربه حرفه‌ای در حوزه برنامه‌نویسی، در طراحی و توسعه انواع نرم‌افزارهای دسکتاپ، وب و سیستم‌های داده‌محور مهارت بالایی دارم. در طول این سال‌ها، با تکیه بر توانایی حل مسئله، یادگیری مداوم و روحیه کار تیمی، در پروژه‌های مختلف از مرحله ایده‌پردازی تا پیاده‌سازی و استقرار، نقش کلیدی داشته‌ام.

تسلط من بر Python و فریم‌ورک Django امکان طراحی و توسعه‌ی بک‌اندهای پایدار و مقیاس‌پذیر را فراهم کرده است. در حوزه فرانت‌اند نیز تجربه‌ی گسترده‌ای با React.js و Next.js دارم و قادر به ساخت رابط‌های کاربری سریع، مدرن و بهینه هستم. همچنین در توسعه نرم‌افزارهای دسکتاپ، با بهره‌گیری از QtPy و Qt Designer چندین پروژه کاربردی و ساختاریافته را طراحی و اجرا کرده‌ام.

از نظر پایگاه‌داده، با هر دو سیستم MongoDB و MySQL تجربه عملی دارم و در طراحی ساختار داده، بهینه‌سازی کوئری‌ها و مدیریت اطلاعات پروژه‌ها عملکرد موفقی داشته‌ام.

ترکیب این مهارت‌ها در کنار تجربه طولانی‌مدت، باعث شده بتوانم در پروژه‌های مختلف به‌صورت منعطف و نتیجه‌محور عمل کنم و بهترین راه‌حل‌ها را از نظر فنی و اجرایی ارائه دهم.
                          </p>

                          <h2 className="text-xl font-bold mt-6 mb-4">تجربه</h2>
                          <div className="mb-6">
                              <div className="flex justify-between flex-wrap gap-2 w-full">
                                  <span className="text-gray-700 font-bold">IT</span>
                                  <p>
                                      <span className="text-gray-700 mr-2">شرکت هواپیمایی ساها </span>
                                      <span className="text-gray-700">۱۴۰۳ - ۱۴۰۴</span>
                                  </p>
                              </div>
                              <p className="mt-2">
                                  وظیفه توسعه و نگهداری اتوماسیون های شرکت را بر عهده داشتم
                              </p>
                          </div>
                          <div className="mb-6">
                              <div className="flex justify-between flex-wrap gap-2 w-full">
                                  <span className="text-gray-700 font-bold">Web Developer</span>
                                  <p>
                                      <span className="text-gray-700 mr-2">شرکت فرودگاهی عقاب عسلویه</span>
                                      <span className="text-gray-700">۱۴۰۰ - ۱۴۰۴</span>
                                  </p>
                              </div>
                              <p className="mt-2">
                                  توسعه دهنده اتوماسیون های اداری و انبار داری,
                                  نگهداری و مدیریت سرور
                              </p>
                          </div>
                          <div className="mb-6">
                              <div className="flex justify-between flex-wrap gap-2 w-full">
                                  <span className="text-gray-700 font-bold">python</span>
                                  <p>
                                      <span className="text-gray-700 mr-2">اسکریپت</span>
                                      <span className="text-gray-700">۱۴۰۲</span>
                                  </p>
                              </div>
                              <p className="mt-2">
                                  نوشتن اسکریپت تشخیص پلاک
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default App
