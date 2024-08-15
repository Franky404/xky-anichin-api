// @Franky404 (https://github.com/Franky404)
// Jangan Di hapus Lek 

const axios = require('axios');
const cheerio = require('cheerio');


      function anichinupdate() {
        return new Promise(async (resolve, reject) => {
          try {
            const { data } = await axios.get('https://anichin.site/anime/?status=&type=&order=update');
            const $ = cheerio.load(data);
            const result = [];

            $('.listupd .bs').each((i, element) => {
            const x_title = $(element).find('.tt h2').text().trim(); // scrap judul
            const x_episode = $(element).find('.bt .epx').text().trim(); // scrap episode
            const x_link = $(element).find('a').attr('href'); // scrap link donghua nya
            const x_image = $(element).find('img').attr('data-lazy-src') || $(element).find('img').attr('src'); // scrap URL gambar donghua

            result.push({
              message: 'By Franky404',
              title: x_title,
              episode: x_episode,
              subtitle: 'Sub Indo',
              link: x_link,
              image: x_image
            });
          });

      resolve(result);
    } catch (error) {
      console.error('Error fetching data:', error); // Jika terjadi error, tampilkan pesan error
      reject(error);
          }
        });
      }


module.exports.anichinupdate = anichinupdate