const axios = require('axios');
const fs = require('fs');

async function downloadPac() {
  const url = 'https://antizapret.prostovpn.org/proxy.pac';
  
  try {
    console.log('Скачивание PAC-файла...');
    
    // Делаем запрос к AntiZapret
    const response = await axios.get(url, {
      responseType: 'text' // Указываем, что ждем текстовый файл
    });
    
    // Сохраняем полученный скрипт как proxy.pac
    fs.writeFileSync('proxy.pac', response.data, 'utf-8');
    
    console.log('Файл proxy.pac успешно скачан и сохранен!');
  } catch (error) {
    console.error('Не удалось скачать файл:', error.message);
  }
}

downloadPac();
