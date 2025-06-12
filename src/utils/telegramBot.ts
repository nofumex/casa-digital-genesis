
const BOT_TOKEN = '7895325617:AAEWaaycYgn75abmpL3QNqNoRsolbsssilM';
const CHAT_ID = '7727079839';

export const sendMessageToBot = async (formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const text = `🏠 Новая заявка с Casa Digital

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📱 Телефон: ${formData.phone}
💬 Сообщение: ${formData.message}`;

  try {
    const response = await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: text,
        parse_mode: 'HTML'
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send message');
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending message to Telegram:', error);
    throw error;
  }
};
