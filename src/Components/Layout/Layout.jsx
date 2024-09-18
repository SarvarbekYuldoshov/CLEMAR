import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import "./Layout.css"
import { Button, Form, Input, Modal } from 'antd';
const Layout = () => {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  
  const sendMessage = () => {
    form.validateFields()
      .then((values) => {
        const { name, surname, number } = values;
        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = "6801549705";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}\nMahsulot: ${selectedItem?.name}\nNarxi: ${selectedItem?.price}`;
        fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id,
            text: messageText,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            if (res.ok) {
              message.success("Ma'lumot yuborildi");
              form.resetFields();
              setOpen(false);
            } else {
              message.error("Yuborishda xatolik yuz berdi");
            }
          })
          .catch((err) => {
            console.error(err);
            message.error("Xatolik yuz berdi, iltimos keyinroq urinib ko'ring");
          });
      })
      .catch(() => {
        message.error("Iltimos, barcha maydonlarni to'ldiring!");
      });
  };
  
  const showModal = () => setOpen(true);
  const closeModal = () => {
    form.resetFields();
    setOpen(false);
  };
  return (
    <div className='bg-[#007aff] layout'>
      <div className='max-w-[1200px] mx-auto p-[20px] flex justify-between items-center'>
        <ul className='flex gap-[20px] items-center'>
          <img
            src="https://clemar.uz/static/media/location.8f50ce0bbe934fcda50814961114ab24.svg"
            alt=""
          />
          <a
            href="https://yandex.ru/navi/?ll=69.220719,41.290161&amp;panorama%5Bpoint%5D=69.220719,41.290161&amp;panorama%5Bdirection%5D=227.914276,-0.865454&amp;panorama%5Bspan%5D=90.000000,90.000000&amp;panorama%5Bid%5D=1486659497_804360267_23_1571374783"
            className='text-[#cbc9c9]'
          >
            {t("layout.layout_text_1")}:
          </a>
          <a
            href="https://yandex.ru/navi/?ll=69.220719,41.290161&amp;panorama%5Bpoint%5D=69.220719,41.290161&amp;panorama%5Bdirection%5D=227.914276,-0.865454&amp;panorama%5Bspan%5D=90.000000,90.000000&amp;panorama%5Bid%5D=1486659497_804360267_23_1571374783"
            target="_blank"
            rel="noopener noreferrer"
            className="min-text text-[white]"
          >
            {t("layout.layout_text_2")}
          </a>
        </ul>
        <ul className='flex gap-[30px] items-center'>
          <li className='flex gap-[10px] items-center'>
            <img
              className='w-[30px] h-[20px]'
              src="https://clemar.uz/static/media/instagram.15618e7f7e625b7694935dd597571837.svg"
              alt=""
            />
            <p className="min-text text-[white]">{t("layout.layout_text_3")}</p>
          </li>
          <li className='flex gap-[10px] items-center'>
            <img className='w-[30px] h-[20px]'
              src="https://clemar.uz/static/media/telegram.c595f804c186181bf4a1da46dcaaa231.svg"
              alt=""
            />
            <p className='text-[white]'>{t("layout.layout_text_4")}</p>
          </li>
          <li className='text-[#ffff]'>
            <a
              className='text-[18px] font-semibold'
              href="tel:+998555001411"
              target="_blank"
              rel="noopener noreferrer"
            >
              +998 55 500 14 11
            </a>
          </li>
          <li className='header-item'>
            <select
              value={i18n.language} 
              onChange={handleLanguageChange}
              className='border border-[#007aff] bg-[#007aff] text-[white] rounded-[5px]'
            >
              <option value="en">Eng</option>
              <option value="ru">Rus</option>
              <option value="uz">O`z</option>
            </select>
          </li>
          <li className=''>
            <Button className='text-[blue] bg-[white] w-[140px] h-[40px] rounded-[5px] text-[15x] items-center hover:transition-transform duration-500 hover:scale-110' onClick={() => showModal({ name: 'Product Name', price: '100' })}>
            {t("layout.layout_btn")}
          </Button>

          <Modal open={open} footer={null} onCancel={closeModal}>
            <h1 className='flex items-center justify-center text-[30px]'>{t("layout.layout_btn_1")}</h1>
            <p className='justify-center text-[20px] text-[blue]'>{t("layout.layout_btn_2")}</p>
            <Form form={form} layout="vertical">
              <Form.Item
                label="Ism"
                name="name"
                rules={[{ required: true, message: 'Ismingizni kiriting' }, { min: 5, message: 'Ism 5 tadan kam bo\'lmasligi kerak' }]}
              >
                <Input className='w-full h-[50px]' placeholder='Ismingizni kiriting' />
              </Form.Item>
              <Form.Item
                label="Familiya"
                name="surname"
                rules={[{ required: true, message: 'Familiyangizni kiriting' }, { min: 5, message: 'Familiya 5 tadan kam bo\'lmasligi kerak' }]}
              >
                <Input className='w-full h-[50px]' placeholder='Familiyangizni kiriting' />
              </Form.Item>
              <Form.Item
                label="Telefon raqam"
                name="number"
                rules={[{ required: true, message: 'Telefon raqamingizni kiriting' }, { pattern: /^\+998\d{9}$/, message: 'Telefon raqam +998 bilan boshlanib, 9 ta raqamdan iborat bo\'lishi kerak' }]}
              >
                <Input className='w-full h-[50px]' placeholder='+998' />
              </Form.Item>
              <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
                Yuborish
              </Button>
            </Form>
          </Modal>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Layout;
