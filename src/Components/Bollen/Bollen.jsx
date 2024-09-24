import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button, message } from 'antd'; // Add missing imports

const Bollen = () => {
  const { t, i18n } = useTranslation(); // Fix useTranslation invocation
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value); // Fix language change function
  };

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

        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = "6801549705";
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
              message.success(t("layout.layout_text_5"));
              form.resetFields();
              setOpen(false);
            } else {
              message.error(t("layout.layout_text_6"));
            }
          })
          .catch((err) => {
            console.error(err);
            message.error(t("layout.layout_text_7"));
          });
      })
      .catch(() => {
        message.error(t("layout.layout_text_8"));
      });
  };

  const showModal = () => setOpen(true);
  const closeModal = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-[20px] flex justify-center'>
        <ul className='text-center text-[18px]'>
          <h1 className='text-black font-bold text-[30px]'>{t("bollen.bollen_text_1")}</h1>
          <p>{t("bollen.bollen_text_2")}</p>
          <Form form={form} layout="vertical">
            <Form.Item
              label={t("layout.layout_btn_3")}
              name="name"
              rules={[
                { required: true, message: t("layout.layout_text_11") },
                { min: 5, message: t("layout.layout_text_8") }
              ]}
            >
              <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_6")} />
            </Form.Item>
            <Form.Item
              label={t("layout.layout_btn_4")}
              name="surname"
              rules={[
                { required: true, message: t("layout.layout_text_12") },
                { min: 5, message: t("layout.layout_text_9") }
              ]}
            >
              <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_7")} />
            </Form.Item>
            <Form.Item
              label={t("layout.layout_btn_5")}
              name="number"
              rules={[
                { required: true, message: t("layout.layout_text_12") },
                { pattern: /^\+998\d{9}$/, message: t("layout.layout_text_10") }
              ]}
            >
              <Input className='w-full h-[50px]' placeholder='+998' />
            </Form.Item>
            <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
              {t("layout.layout_btn_send")} {/* Assuming "Yuborish" means "Send" */}
            </Button>
          </Form>
        </ul>
      </div>
    </div>
  );
};

export default Bollen;
