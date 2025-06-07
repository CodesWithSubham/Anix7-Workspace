// lib/telegramBot.js

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN; // Ensure this is set in your environment variables

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN is not defined in the environment variables");
}

const botBaseURL = `https://api.telegram.org/bot${BOT_TOKEN}`;

const bot = async (method, params = {}) => {
  const formData = new FormData();

  // Append all params to formData
  for (const [key, value] of Object.entries(params)) {
    formData.append(key, value);
  }

  const response = await fetch(`${botBaseURL}/${method}`, {
    method: 'POST',
    body: formData, // Send form data as body
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Telegram API error: ${error.description}`);
  }
  const result = await response.json();
  return result.result;
};

export { bot };
