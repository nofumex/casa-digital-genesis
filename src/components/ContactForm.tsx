
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { sendMessageToBot } from '../utils/telegramBot';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      await sendMessageToBot(formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-background border border-border rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Обсудить проект
        </h2>
        <p className="text-muted-foreground">
          Оставьте заявку и мы свяжемся с вами в ближайшее время
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 max-w-md mx-auto">
        <div>
          <Input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <Input
            type="tel"
            name="phone"
            placeholder="Телефон"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full"
          />
        </div>

        <div>
          <Textarea
            name="message"
            placeholder="Расскажите о вашем проекте"
            value={formData.message}
            onChange={handleInputChange}
            required
            className="w-full min-h-[120px]"
          />
        </div>

        <Button 
          type="submit" 
          className="w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Отправляется...' : 'Обсудить проект'}
        </Button>

        {submitStatus === 'success' && (
          <p className="text-green-600 text-center">
            ✅ Заявка успешно отправлена! Мы свяжемся с вами в ближайшее время.
          </p>
        )}

        {submitStatus === 'error' && (
          <p className="text-red-600 text-center">
            ❌ Ошибка отправки. Попробуйте еще раз.
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
