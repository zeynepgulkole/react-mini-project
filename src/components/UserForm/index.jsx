import { useEffect, useState } from "react"
import ResgisterForm from "./RegisterForm"

export default function UserForm(){

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    })

    const [errors, setErrors] = useState({})
    const [registeredEmails, setRegisteredEmails] = useState([]); // Kaydedilen e-posta adreslerini saklayan dizi

    useEffect(() => {
        // LocalStorage'dan kayıtlı veriyi al
        const storedData = JSON.parse(localStorage.getItem('formDataArray'));
        if (storedData) {
          setRegisteredEmails(storedData.map(data => data.email));
        }
      }, []);

    const handleInputChange = (name, value) => {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    };
  
    const validateForm = () => {
      const newErrors = {};
  
      if (!formData.email.includes('@')) {
        newErrors.email = 'Geçersiz e-posta formatı';
      }
  
      if (registeredEmails.includes(formData.email)) {
        newErrors.email = 'Bu e-posta adresi ile daha önce kayıt olunmuş';
      }
  
      if (formData.password.length < 6) {
        newErrors.password = 'Şifre en az 6 karakter olmalı';
      }
  
      if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Şifreler eşleşmiyor';
      }
  
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
  
    const handleFormSubmit = (e) => {
        e.preventDefault();
    
        if (validateForm()) {
          // LocalStorage'dan formData dizisini al
          const storedData = JSON.parse(localStorage.getItem('formDataArray')) || [];
          
          // Yeni formData'yı mevcut dizinin sonuna ekle
          const updatedData = [...storedData, formData];
          localStorage.setItem('formDataArray', JSON.stringify(updatedData));
    
          setRegisteredEmails(updatedData.map(data => data.email));
    
          console.log('Form verisi:', formData);
    
          // Formu başarıyla gönderdiğimizde alanları sıfırla
          setFormData({
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
          });
    
          // Hataları temizle
          setErrors({});
        }
      };


    return(
    <div>
    <h2>Kullanıcı Kayıt Formu</h2>

    <ResgisterForm formData={formData} handleInputChange={handleInputChange} handleFormSubmit={handleFormSubmit} errors={errors}/>
    </div>
    )
}