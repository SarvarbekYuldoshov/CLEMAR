import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Rasm_1 from "../images/rasm17.jpg";
import Rasm_2 from "../images/rasm18.jpg";
import Rasm_3 from "../images/rasm19.jpg";
import Rasm_4 from "../images/rasm20.jpg";
import { Button, Form, Input, Modal, message } from 'antd';

const Main = () => {
  const { t, i18n } = useTranslation();
  
  const handleLanguageChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

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

        const token = "7288526920:AAH-vd_HYqMjr_qE5zG6idFBNxfFeMi9aFo";
        const chat_id = "6801549705";
        const url = `https://api.telegram.org/bot${token}/sendMessage`;
        const messageText = `Name: ${name}\nSurname: ${surname}\nNumber: ${number}\nProduct: Product Name\nPrice: 100`;

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
      <div className='max-w-[1200px] mx-auto p-[20px] flex gap-[20px]'>


        <ul className='w-[280px] h-[380px] border border-black rounded-[10px] relative'>
          <li className='border border-black w-[240px] h-[220px] justify-center flex rounded-[10px] ml-[20px] mt-[20px]'>
            <img className='w-[20px] h-[25px] absolute right-[40px] top-[30px]' src="https://clemar.uz/static/media/heart2.e56530df0538112dcc9f915738876ee2.svg" alt="" />
            <img className='w-[150px] h-[150px] mt-[20px]' src={Rasm_1} alt="" />
          </li>
          <p className='font-light text-lg text-[12px] ml-[10px] mt-[5px]'>{t("main.main_text_1")}</p>
          <p className='font-bold text-black text-lg text-[15px] ml-[10px]'>{t("main.main_text_5")}</p>

          
          <li className='flex justify-center'>
            <Button className='text-[blue] bg-[#e0e4e9] w-[200px] h-[40px] rounded-[5px] text-[15x] items-center hover:transition-transform duration-500 hover:scale-110 max-md:hidden' onClick={showModal}>
              {t("main.main_text_6")}
            </Button>

            <Modal open={open} footer={null} onCancel={closeModal}>
              <h1 className='flex items-center justify-center text-[30px]'>{t("layout.layout_btn_1")}</h1>
              <p className='justify-center text-[20px] text-[blue]'>{t("layout.layout_btn_2")}</p>
              <Form form={form} layout="vertical">
                <Form.Item
                  label={t("layout.layout_btn_3")}
                  name="name"
                  rules={[{ required: true, message: t("layout.layout_text_11")}, { min: 5, message: t("layout.layout_text_8") }]}>
                  <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_6")} />
                </Form.Item>
                <Form.Item
                  label={t("layout.layout_btn_4")}
                  name="surname"
                  rules={[{ required: true, message: t("layout.layout_text_12") }, { min: 5, message: t("layout.layout_text_9") }]}>
                  <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_7")} />
                </Form.Item>
                <Form.Item
                  label={t("layout.layout_btn_5")}
                  name="number"
                  rules={[{ required: true, message: t("layout.layout_text_12") }, { pattern: /^\+998\d{9}$/, message: t("layout.layout_text_10") }]}>
                  <Input className='w-full h-[50px]' placeholder='+998' />
                </Form.Item>
                <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
                  Send
                </Button>
              </Form>
            </Modal>
          </li>
        </ul>     
        
        <ul className='w-[280px] h-[380px] border border-black rounded-[10px] relative'>
          <li className='border border-black w-[240px] h-[220px] justify-center flex rounded-[10px] ml-[20px] mt-[20px]'>
            <img className='w-[20px] h-[25px] absolute right-[40px] top-[30px]' src="https://clemar.uz/static/media/heart2.e56530df0538112dcc9f915738876ee2.svg" alt="" />
            <img className='w-[150px] h-[150px] mt-[20px]' src={Rasm_2} alt="" />
          </li>
          <p className='font-light text-lg text-[12px] ml-[10px] mt-[5px]'>{t("main.main_text_2")}</p>
          <p className='font-bold text-black text-lg text-[15px] ml-[10px]'>{t("main.main_text_5")}</p>
          <li className='flex justify-center'>
            <Button className='text-[blue] bg-[#e0e4e9] w-[200px] h-[40px] rounded-[5px] text-[15x] items-center hover:transition-transform duration-500 hover:scale-110 max-md:hidden' onClick={showModal}>
              {t("main.main_text_6")}
            </Button>

            <Modal open={open} footer={null} onCancel={closeModal}>
              <h1 className='flex items-center justify-center text-[30px]'>{t("layout.layout_btn_1")}</h1>
              <p className='justify-center text-[20px] text-[blue]'>{t("layout.layout_btn_2")}</p>
              <Form form={form} layout="vertical">
                <Form.Item
                  label={t("layout.layout_btn_3")}
                  name="name"
                  rules={[{ required: true, message: t("layout.layout_text_11")}, { min: 5, message: t("layout.layout_text_8") }]}>
                  <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_6")} />
                </Form.Item>
                <Form.Item
                  label={t("layout.layout_btn_4")}
                  name="surname"
                  rules={[{ required: true, message: t("layout.layout_text_12") }, { min: 5, message: t("layout.layout_text_9") }]}>
                  <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_7")} />
                </Form.Item>
                <Form.Item
                  label={t("layout.layout_btn_5")}
                  name="number"
                  rules={[{ required: true, message: t("layout.layout_text_12") }, { pattern: /^\+998\d{9}$/, message: t("layout.layout_text_10") }]}>
                  <Input className='w-full h-[50px]' placeholder='+998' />
                </Form.Item>
                <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
                  Send
                </Button>
              </Form>
            </Modal>
          </li>
        </ul>
 
        <ul className='w-[280px] h-[380px] border border-black rounded-[10px] relative'>
          <li className='border border-black w-[240px] h-[220px] justify-center flex rounded-[10px] ml-[20px] mt-[20px]'>
            <img className='w-[20px] h-[25px] absolute right-[40px] top-[30px]' src="https://clemar.uz/static/media/heart2.e56530df0538112dcc9f915738876ee2.svg" alt="" />
            <img className='w-[150px] h-[150px] mt-[20px]' src={Rasm_3} alt="" />
          </li>
          <p className='font-light text-lg text-[12px] ml-[10px] mt-[5px]'>{t("main.main_text_3")}</p>
          <p className='font-bold text-black text-lg text-[15px] ml-[10px]'>{t("main.main_text_5")}</p>

          {/* Send Message section */}
          <li className='flex justify-center'>
            <Button className='text-[blue] bg-[#e0e4e9] w-[200px] h-[40px] rounded-[5px] text-[15x] items-center hover:transition-transform duration-500 hover:scale-110 max-md:hidden' onClick={showModal}>
              {t("main.main_text_6")}
            </Button>

            <Modal open={open} footer={null} onCancel={closeModal}>
              <h1 className='flex items-center justify-center text-[30px]'>{t("layout.layout_btn_1")}</h1>
              <p className='justify-center text-[20px] text-[blue]'>{t("layout.layout_btn_2")}</p>
              <Form form={form} layout="vertical">
                <Form.Item
                  label={t("layout.layout_btn_3")}
                  name="name"
                  rules={[{ required: true, message: t("layout.layout_text_11")}, { min: 5, message: t("layout.layout_text_8") }]}>
                  <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_6")} />
                </Form.Item>
                <Form.Item
                  label={t("layout.layout_btn_4")}
                  name="surname"
                  rules={[{ required: true, message: t("layout.layout_text_12") }, { min: 5, message: t("layout.layout_text_9") }]}>
                  <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_7")} />
                </Form.Item>
                <Form.Item
                  label={t("layout.layout_btn_5")}
                  name="number"
                  rules={[{ required: true, message: t("layout.layout_text_12") }, { pattern: /^\+998\d{9}$/, message: t("layout.layout_text_10") }]}>
                  <Input className='w-full h-[50px]' placeholder='+998' />
                </Form.Item>
                <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
                  Send
                </Button>
              </Form>
            </Modal>
          </li>
        </ul> 
        <ul className='w-[280px] h-[380px] border border-black rounded-[10px] relative'>
          <li className='border border-black w-[240px] h-[220px] justify-center flex rounded-[10px] ml-[20px] mt-[20px]'>
            <img className='w-[20px] h-[25px] absolute right-[40px] top-[30px]' src="https://clemar.uz/static/media/heart2.e56530df0538112dcc9f915738876ee2.svg" alt="" />
            <img className='w-[150px] h-[150px] mt-[20px]' src={Rasm_4} alt="" />
          </li>
          <p className='font-light text-lg text-[12px] ml-[10px] mt-[5px]'>{t("main.main_text_4")}</p>
          <p className='font-bold text-black text-lg text-[15px] ml-[10px]'>{t("main.main_text_5")}</p>
          <li className='flex justify-center'>
            <Button className='text-[blue] bg-[#e0e4e9] w-[200px] h-[40px] rounded-[5px] text-[15x] items-center hover:transition-transform duration-500 hover:scale-110 max-md:hidden' onClick={showModal}>
              {t("main.main_text_6")}
            </Button>

            <Modal open={open} footer={null} onCancel={closeModal}>
              <h1 className='flex items-center justify-center text-[30px]'>{t("layout.layout_btn_1")}</h1>
              <p className='justify-center text-[20px] text-[blue]'>{t("layout.layout_btn_2")}</p>
              <Form form={form} layout="vertical">
                <Form.Item
                  label={t("layout.layout_btn_3")}
                  name="name"
                  rules={[{ required: true, message: t("layout.layout_text_11")}, { min: 5, message: t("layout.layout_text_8") }]}>
                  <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_6")} />
                </Form.Item>
                <Form.Item
                  label={t("layout.layout_btn_4")}
                  name="surname"
                  rules={[{ required: true, message: t("layout.layout_text_12") }, { min: 5, message: t("layout.layout_text_9") }]}>
                  <Input className='w-full h-[50px]' placeholder={t("layout.layout_btn_7")} />
                </Form.Item>
                <Form.Item
                  label={t("layout.layout_btn_5")}
                  name="number"
                  rules={[{ required: true, message: t("layout.layout_text_12") }, { pattern: /^\+998\d{9}$/, message: t("layout.layout_text_10") }]}>
                  <Input className='w-full h-[50px]' placeholder='+998' />
                </Form.Item>
                <Button className='w-full h-[50px]' onClick={sendMessage} type="primary">
                  Send
                </Button>
              </Form>
            </Modal>
          </li>
        </ul>
        
      </div>
    </div>
  );
};

export default Main;
