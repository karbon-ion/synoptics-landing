const fs = require('fs');
const path = require('path');
const https = require('https');

const logoUrls = {
  'xai-grok': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Grok_logo.svg/1200px-Grok_logo.svg.png',
  'deepseek': 'https://avatars.githubusercontent.com/u/128935345',
  'databricks': 'https://upload.wikimedia.org/wikipedia/commons/6/63/Databricks_Logo.png',
  'cohere': 'https://assets-global.website-files.com/64f6f2c0e3f4c5a91c1e823a/64f6f2c0e3f4c5a91c1e8469_cohere-symbol-black.svg',
  'ai21-labs': 'https://assets-global.website-files.com/60fd4503684b466578c0d307/61138931ba82e6a7e4b7a7e4_Logo.svg',
  'nvidia': 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Nvidia_logo.svg/1280px-Nvidia_logo.svg.png',
  'mistral': 'https://mistral.ai/images/logo.svg',
  'meta': 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/1200px-Meta_Platforms_Inc._logo.svg.png',
  'microsoft': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png',
  'azure-openai': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Microsoft_Azure_Logo.svg/1200px-Microsoft_Azure_Logo.svg.png'
};

const downloadDir = path.join(__dirname, 'public', 'integrations', 'featured', 'icons');

if (!fs.existsSync(downloadDir)) {
  fs.mkdirSync(downloadDir, { recursive: true });
}

const downloadImage = (url, filename) => {
  return new Promise((resolve, reject) => {
    const filePath = path.join(downloadDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, (response) => {
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filePath, () => {});
        console.error(`Error downloading ${filename}: ${err.message}`);
        reject(err);
      });
    }).on('error', (err) => {
      fs.unlink(filePath, () => {});
      console.error(`Error downloading ${filename}: ${err.message}`);
      reject(err);
    });
  });
};

const downloadAllLogos = async () => {
  const promises = [];
  
  for (const [name, url] of Object.entries(logoUrls)) {
    promises.push(downloadImage(url, `${name}.png`));
  }
  
  try {
    await Promise.all(promises);
    console.log('All logos downloaded successfully!');
  } catch (error) {
    console.error('Error downloading logos:', error);
  }
};

downloadAllLogos();
