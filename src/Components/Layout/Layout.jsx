import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Button, Form, Input, Modal, message } from 'antd';
import './Layout.css';

const Layout = () => {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();

  useEffect(() => {
    const savedName = localStorage.getItem('name');
    const savedSurname = localStorage.getItem('surname');
    const savedNumber = localStorage.getItem('number');

    form.setFieldsValue({
      name: savedName || '',
      surname: savedSurname || '',
      number: savedNumber || '',
    });
  }, [form]);

  const sendMessage = () => {
    form.validateFields()
      .then((values) => {
        const { name, surname, number } = values;
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('number', number);

        const token = "your-telegram-bot-token";
        const chat_id = "your-chat-id";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}\nMahsulot: Product Name\nNarxi: 100`;

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
              message.success(t('layout.layout_text_5'));
              form.resetFields();
              setOpen(false);
            } else {
              message.error(t('layout.layout_text_6'));
            }
          })
          .catch((err) => {
            console.error(err);
            message.error(t('layout.layout_text_7'));
          });
      })
      .catch(() => {
        message.error(t('layout.layout_text_8'));
      });
  };

  const showModal = () => setOpen(true);
  const closeModal = () => {
    form.resetFields();
    setOpen(false);
  };

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="bg-primary bg-[blue]">
      <div className="container mx-auto p-4 flex justify-between items-center mt-[-5px]">
        <div className="flex gap-4 items-center ">
          <img
            src="https://clemar.uz/static/media/location.8f50ce0bbe934fcda50814961114ab24.svg"
            alt="Location"
            className="w-6 h-6"
          />
          <a
            href="https://yandex.ru/navi/?ll=69.220719,41.290161"
            className="text-secondary max-sm:text-sm"
          >
            {t('layout.layout_text_1')}
          </a>
          <a
            href="https://yandex.ru/navi/?ll=69.220719,41.290161"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white max-sm:text-[10px]"
          >
            {t('layout.layout_text_2')}
          </a>
        </div>

        <div className="flex gap-6 items-center">
          <div className="hidden lg:flex gap-2 items-center">
            <img
              src="https://clemar.uz/static/media/instagram.15618e7f7e625b7694935dd597571837.svg"
              alt="Instagram"
              className="w-6 h-6 mt-[-5px]"
            />
            <p className="text-white mt-[10px] ">{t('layout.layout_text_3')}</p>
          </div>
          <div className="hidden lg:flex gap-2 items-center">
            <img
              src="https://clemar.uz/static/media/telegram.c595f804c186181bf4a1da46dcaaa231.svg"
              alt="Telegram"
              className="w-6 h-6 mt-[-5px]"
            />
            <p className="text-white mt-[10px]">{t('layout.layout_text_4')}</p>
          </div>
          <a
            href="tel:+998555001411"
            className="text-white text-lg font-semibold max-sm:text-[10px]"
          >
            +998 55 500 14 11
          </a>

          <select
            value={i18n.language}
            onChange={handleLanguageChange}
            className="border border-transparent  text-white bg-[blue] rounded px-2 py-1 max-sm:text-sm"
          >
            <option value="en">Eng</option>
            <option value="ru">Rus</option>
            <option value="uz">O'z</option>
          </select>

          <Button
            className="bg-white text-blue hover:scale-110 transition-transform duration-500 max-md:hidden"
            onClick={showModal}
          >
            {t('layout.layout_btn')}
          </Button>
        </div>
      </div>

      <Modal open={open} footer={null} onCancel={closeModal}>
        <h1 className="text-center text-2xl">{t('layout.layout_btn_1')}</h1>
        <p className="text-center text-xl text-blue">{t('layout.layout_btn_2')}</p>
        <Form form={form} layout="vertical">
          <Form.Item
            label={t('layout.layout_btn_3')}
            name="name"
            rules={[
              { required: true, message: t('layout.layout_text_11') },
              { min: 5, message: t('layout.layout_text_8') },
            ]}
          >
            <Input placeholder={t('layout.layout_btn_6')} />
          </Form.Item>
          <Form.Item
            label={t('layout.layout_btn_4')}
            name="surname"
            rules={[
              { required: true, message: t('layout.layout_text_12') },
              { min: 5, message: t('layout.layout_text_9') },
            ]}
          >
            <Input placeholder={t('layout.layout_btn_7')} />
          </Form.Item>
          <Form.Item
            label={t('layout.layout_btn_5')}
            name="number"
            rules={[
              { required: true, message: t('layout.layout_text_12') },
              { pattern: /^\+998\d{9}$/, message: t('layout.layout_text_10') },
            ]}
          >
            <Input placeholder="+998" />
          </Form.Item>
          <Button onClick={sendMessage} type="primary" block>
            {t('layout.layout_btn_send')}
          </Button>
        </Form>
      </Modal>
    </div>
  );
};

export default Layout;
