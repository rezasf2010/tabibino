import { useState } from "react";
import { FaLocationDot, FaChevronDown } from "react-icons/fa6";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";

const App = () => {
  const [formData, setFormData] = useState({
    name: "",
    family: "",
    nationalId: "",
    countryCode: "",
    mobile: "",
    sex: "",
    city: "",
    birthday: "",
    address: "",
    foreign: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFormData({ ...formData, [name]: checked });
  };

  return (
    <div className="max-w-custom mx-auto">
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 m-4 md:m-6 justify-center border border-gray-300 rounded-xl shadow-xl">
        <div className="md:flex col-span-2 gap-6 mt-6">
          <div className="relative mb-8 md:mb-0 w-full">
            <label
              htmlFor="name"
              className="absolute top-[-12px] text-gray-700 text-sm sm:text-base font-semibold pr-6"
            >
              نام (اختیاری)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="h-14 w-full py-2 px-8 border border-gray-300 text-xs sm:text-base rounded-lg font-semibold shadow-lg"
              value={formData.name}
              placeholder="نام خود را بنویسید"
              onChange={handleChange}
              required
            />
            <p className="text-sm mr-4 mt-2 text-gray-500 font-semibold">
              متن پشتیبانی
            </p>
          </div>

          <div className="relative mb-8 md:mb-0 w-full">
            <label
              htmlFor="family"
              className="absolute top-[-12px] text-gray-700 text-sm sm:text-base font-semibold pr-6"
            >
              نام خانوادگی (اختیاری)
            </label>
            <input
              type="text"
              id="family"
              name="family"
              className="h-14 w-full py-2 px-6 border border-gray-300 text-xs sm:text-base rounded-lg font-semibold shadow-lg"
              value={formData.family}
              placeholder="نام خانوادگی خود را بنویسید"
              onChange={handleChange}
            />
            <p className="text-sm mr-4 mt-2 text-gray-500 font-semibold">
              متن پشتیبانی
            </p>
          </div>
        </div>

        <div className="md:flex col-span-2 gap-6 mt-8">
          <div className="relative mb-8  md:mb-0 w-full">
            <label
              htmlFor="nationalId"
              className="absolute top-[-12px] text-gray-700 text-sm sm:text-base font-semibold pr-6"
            >
              کد ملی (اختیاری)
            </label>

            <div className="absolute flex items-center gap-2 left-12 top-[-12px] mb-2">
              <input
                type="checkbox"
                id="foreign-checkbox"
                name="foreign"
                className="h-3 w-3 sm:h-4 sm:w-4 px-8 border-gray-300 rounded"
                checked={formData.foreign}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="foreign-checkbox"
                className="ml-2 text-gray-700 text-sm sm:text-base font-semibold"
              >
                اتباع خارجی
              </label>
            </div>

            <input
              type="text"
              id="nationalId"
              name="nationalId"
              className="h-14 w-full py-2 px-6 border border-gray-300 text-xs sm:text-base rounded-lg font-semibold shadow-lg"
              value={formData.nationalId}
              placeholder="جهت دریافت نوبت وارد کردن کد ملی ضروری است"
              onChange={handleChange}
              required
            />
            <p className="text-sm mr-4 mt-2 text-yellow-500 font-semibold">
              جهت دریافت نوبت وارد کردن کد ملی ضروری است
            </p>
          </div>

          <div className="w-full">
            <div className="phone w-full rounded-lg">
              <div className="relative flex items-center ">
                <label
                  htmlFor="mobile"
                  className="absolute top-[-12px] text-gray-700 text-sm sm:text-base font-semibold pr-6"
                >
                  شماره موبایل <span>*</span>
                </label>
                <FaChevronDown className="absolute text-purple-600 left-9 top-5" />
                <input
                  type="phone"
                  id="mobile"
                  name="mobile"
                  className="h-14 w-full py-2 px-3 border-r border-t border-b border-gray-300 rounded-r-lg font-bold shadow-lg"
                  dir="ltr"
                  value={formData.mobile}
                  placeholder="91..."
                  onChange={handleChange}
                />
                <select
                  id="countryCode"
                  name="countryCode"
                  className="h-14 p-2 pl-1 bg-white border-l border-t border-b border-gray-300 rounded-l-lg w-16 shadow-lg"
                  value={formData.countryCode}
                  dir="ltr"
                  onChange={handleChange}
                  required
                >
                  <option value="+98">+98 </option>
                </select>
              </div>
            </div>
            <p className="text-sm mr-4 mt-2 text-gray-500 font-semibold">
              متن پشتیبانی
            </p>
          </div>
        </div>

        <div className="mt-8 md:ml-3">
          <div className="relative w-full">
            <label
              htmlFor="sex"
              className="absolute top-[-12px] text-gray-700 text-sm sm:text-base font-semibold pr-6"
            >
              جنسیت
            </label>
            <FaChevronDown className="absolute text-purple-600 left-7 top-5" />
            <select
              id="sex"
              name="sex"
              className="h-14 w-full py-2 px-6 bg-white border border-gray-300 rounded-lg font-semibold text-xs sm:text-base text-gray-400 shadow-lg"
              value={formData.sex}
              onChange={handleChange}
              required
            >
              <option value="">انتخاب کنید</option>
              <option value="man">مذکر</option>
              <option value="woman">مونث</option>
            </select>
          </div>
        </div>

        <div className="md:flex col-span-2 gap-6 mt-8">
          <div className="relative w-full mb-8 md:mb-0">
            <label
              htmlFor="city"
              className="absolute top-[-12px] text-gray-700 text-sm sm:text-base font-semibold pr-6"
            >
              شهر (اختیاری)
            </label>

            <div className="absolute flex items-center gap-2 left-8 top-[-12px] mb-2 text-teal-600 font-semibold text-xs sm:text-base cursor-pointer">
              <p>روی نقشه انتخاب کنید</p>
              <FaLocationDot />
            </div>

            <FaChevronDown className="absolute text-purple-600 left-7 top-5" />

            <select
              id="city"
              name="city"
              className="h-14 w-full py-2 px-6 border bg-white border-gray-300 rounded-lg font-semibold text-xs sm:text-base text-gray-400 shadow-lg"
              value={formData.city}
              onChange={handleChange}
            >
              <option value="" disabled>
                شهر خود را انتخاب کنید
              </option>
            </select>

            <p className="text-sm mr-4 mt-2 text-gray-500 font-semibold">
              متن پشتیبانی
            </p>
          </div>

          <div className="relative w-full">
            <label
              htmlFor="birthday"
              className="absolute top-[-12px] text-gray-700 text-sm sm:text-base font-semibold pr-6"
            >
              تاریخ تولد (اختیاری)
            </label>

            <FontAwesomeIcon
              icon={faCalendar}
              style={{ color: "#9333ea" }}
              className="absolute text-2xl left-7 top-4"
            />
            <select
              id="birthday"
              name="birthday"
              className="h-14 w-full py-2 px-6 border bg-white border-gray-300 rounded-lg font-semibold text-xs sm:text-base text-gray-400 shadow-lg"
              value={formData.birthday}
              onChange={handleChange}
            >
              <option value="" disabled>
                1365/06/29
              </option>
            </select>

            <p className="text-sm mr-4 mt-2 text-gray-500 font-semibold">
              متن پشتیبانی
            </p>
          </div>
        </div>

        <div className="mb-6 col-span-2 mt-8">
          <div className="relative w-full">
            <label
              htmlFor="address"
              className="absolute top-[-12px] text-gray-700 text-sm sm:text-base font-semibold pr-6"
            >
              آدرس (اختیاری)
            </label>

            <div className="absolute flex items-center gap-2 left-8 top-[-12px] mb-2 text-teal-600 font-semibold text-xs sm:text-base cursor-pointer">
              <p>روی نقشه انتخاب کنید</p>
              <FaLocationDot />
            </div>

            <input
              type="text"
              id="address"
              name="address"
              className="h-14 w-full px-6 border border-gray-300 rounded-lg font-semibold text-xs sm:text-base text-gray-700 shadow-lg"
              value={formData.address}
              placeholder="آدرس محل سکونت خود را وارد کنید"
              onChange={handleChange}
            />
          </div>
          <p className="text-sm mr-4 mt-2 text-gray-500 font-semibold">
            متن پشتیبانی
          </p>
        </div>

        <div className="col-span-2 md:col-span-1 md:col-start-2 flex justify-end">

            <button className="gradient-btn w-full md:w-11/12 text-white text-xl font-bold py-3 rounded-lg hover:bg-purple-700">
              ذخیره
            </button>

        </div>

      </div>
    </div>
  );
};

export default App;
