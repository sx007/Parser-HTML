const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrape() {
  try {
    const { data } = await axios.get('https://example.com');
    const $ = cheerio.load(data);
    
    // Пример извлечения данных
    const title = $('h1').text().trim();
    
    const result = {
      title,
      date: new Date().toISOString()
    };
    
    // Сохранение в json-файл
    //fs.writeFileSync('data.json', JSON.stringify(result, null, 2));
    fs.writeFileSync('../data.json', JSON.stringify(result));
    console.log('Данные успешно спарсены!');
  } catch (error) {
    console.error('Ошибка:', error);
  }
}

scrape();
