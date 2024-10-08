import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Form, Input, Button, message } from 'antd';
import Rasm_1 from "../images/rasm14.png";

const Bollen = () => {
  const { t, i18n } = useTranslation();
  const [form] = Form.useForm();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Retrieve saved form data from localStorage
    const savedName = localStorage.getItem('name');
    const savedSurname = localStorage.getItem('surname');
    const savedNumber = localStorage.getItem('number');
    
    // Set saved values in the form if available
    form.setFieldsValue({
      name: savedName || '',
      surname: savedSurname || '',
      number: savedNumber || '',
    });
  }, [form]);

  const sendMessage = () => {
    // Validate form fields before submission
    form.validateFields()
      .then((values) => {
        const { name, surname, number } = values;

        // Save the input values to localStorage
        localStorage.setItem('name', name);
        localStorage.setItem('surname', surname);
        localStorage.setItem('number', number);

        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = "6801549705";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Ism: ${name}\nFamiliya: ${surname}\nNumber: ${number}\nMahsulot: Product Name\nNarxi: 100`;

        // Send message to Telegram
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
              message.success(t("layout.layout_text_5")); // Success message
              form.resetFields(); // Reset form fields
              setOpen(false); // Close modal
            } else {
              message.error(t("layout.layout_text_6")); // Error message
            }
          })
          .catch((err) => {
            console.error(err);
            message.error(t("layout.layout_text_7")); // Fetch error
          });
      })
      .catch(() => {
        message.error(t("layout.layout_text_8")); // Validation error
      });
  };

  const showModal = () => setOpen(true);
  const closeModal = () => {
    form.resetFields();
    setOpen(false);
  };

  return (
    <div>
      <div className='max-w-[1200px] mx-auto p-[20px] flex justify-center items-center'>
        <ul className='text-center text-[18px]'>
          <h1 className='text-black font-bold text-[30px]'>{t("bollen.bollen_text_1")}</h1>
          <p>{t("bollen.bollen_text_2")}</p>
          
          <Form form={form} layout="vertical">
            <Form.Item
              name="name"
              rules={[{ required: true, message: t("bollen.bollen_text_7") }]} 
            >
              <Input
                className='w-full h-[50px] bg-gray-200'
                placeholder={t("bollen.bollen_text_3")}
              />
            </Form.Item>
            <Form.Item
              name="surname"
              rules={[{ required: true, message: t("bollen.bollen_text_8") }]}
            >
              <Input
                className='w-full h-[50px] bg-gray-200'
                placeholder={t("bollen.bollen_text_4")}
              />
            </Form.Item>
            <Form.Item
              name="number"
              rules={[{ required: true, message: t("bollen.bollen_text_9") }]}
            >
              <Input
                className='w-full h-[50px] bg-gray-200'
                placeholder={t("bollen.bollen_text_5")}
              />
            </Form.Item>

            <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
              {t("bollen.bollen_text_6")}
            </Button>
          </Form>
        </ul>
        <ul className=''>
          <img src={Rasm_1} alt="Product" />
        </ul>
      </div>
    </div>
  );
};

export default Bollen;
