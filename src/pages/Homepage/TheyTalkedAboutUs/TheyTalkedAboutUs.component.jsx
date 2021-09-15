import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faComments, faCoins, faLock } from '@fortawesome/free-solid-svg-icons';

const TheyTalkedAboutUs = () => {
  return (
    <div className='they-talked-about-us'>
      <div className='they-talked-about-us-header'>They talked about us</div>
      <div className='they-talked-about-us-container'>
        <div className='brands-logo-container'>
          <img
            src='https://www.afrikrea.com/assets/footer/presse/bbc-africa-9ff42133e6907171a59ef271b5d0e47f276226e3c657cb93a259580677765696.png'
            alt=''
            className='brands-logo-container-img-logo'
          />
          <img
            src='https://www.afrikrea.com/assets/footer/presse/tnyt-443357cf52da87d147d7f8d802f2f97d1f95b4eb3777f34dd6a8307c213dcedb.png'
            alt=''
            className='brands-logo-container-img-logo'
          />
          <img
            src='https://www.afrikrea.com/assets/footer/presse/forbes-ca840399809496414baf715a4c11de146afc06a5f7782d0c8ed0eb3673488998.png'
            alt=''
            className='brands-logo-container-img-logo'
          />
          <img
            src='https://www.afrikrea.com/assets/footer/presse/le-monde-e2f0fd11644b7bcb5a74f2911620b9ecf8f8762b31b0376a5ecdcb6797d615d4.png'
            alt=''
            className='brands-logo-container-img-logo'
          />
          <img
            src='https://www.afrikrea.com/assets/footer/presse/elle-138ace6495449750fb7bebb63c7c64fb668bf35ea320eb38e84ee0f59815df7a.png'
            alt=''
            className='brands-logo-container-img-logo'
          />
        </div>
        <div className='african-write-up-grid'>
          <div className='african-write-up-grid-content'>
            <header className='african-write-up-grid-content-header'>
              African Fashion
            </header>
            <p className='african-write-up-grid-content-text'>
              Discover a modern African inspired fashion, all in colors and for
              all seasons: dashiki dress, African dress, wax print skirts,
              African crop top, sarouel.. These collections fit all women: plus
              size women, pregnant women... But there is also baby and men
              African fashion: polos, African inspired shirts, bootee, baby
              changing material ... And for everyday such as pencil skirt in
              african fabric for work, kente cocktail dress for your evening ,
              just as batik headwraps and clutch bags, khanga or dashiki
              accessories ... Not to mention celebration outfits: african bridal
              dress , bridesmaid accessories or custom handmade modern african
              wedding outfits with blowing colors. All you need of ethnic and
              ethical clothing , with a large choice of african fabrics from
              various african inspired designers.
            </p>
          </div>
          <div className='african-write-up-grid-content'>
            <header className='african-write-up-grid-content-header'>
              African inspired Handicraft
            </header>
            <p className='african-write-up-grid-content-text'>
              You can buy online handmade and original ethnic in wax print and
              other African fabrics, and also splendid african crafts made of
              african pearls or silver, african earrings, bracelets, african
              inspired statement necklaces or rings .... This along a large
              choice of ethical crafts and jewellery , fantasy handcrafted
              pieces of jewellery. The sellers also craft touareg jewellery such
              as the famous Agadez cross, or notorious East African handicraft
              such as Massai necklaces or bracelets with beautiful handcrafted
              details. The varied handicrafts can be affordable and cheap as
              well as handcrafted masterpieces for big events.
            </p>
          </div>
          <div className='african-write-up-grid-content'>
            <header className='african-write-up-grid-content-header'>
              African Art and Home Decoration
            </header>
            <p className='african-write-up-grid-content-text'>
              Afrikrea federates a large choice of african inspired decoration
              items , with differents african fabrics or precious materials.
              These goes from the traditional masks, statues or sculptures to
              the more modern african acrylic paintings, colorful handmade
              drawings , leather , ebony or wood boxes, or oil paintings. The
              artist use traditional african fabrics such as bogolan,
              handtainted bazin , handwoven african fabrics or batiks. This
              allws you to buy complete orginal set of houseware, home linen,
              bed sheets, tablecloth, duvet or pillow covers.
            </p>
          </div>
        </div>
      </div>
      <div className='satisfaction-secured-transactions'>
        <div className='satisfaction-secured-transactions-card'>
          <span className='satisfaction-secured-transactions-card-icon'>
            <FontAwesomeIcon icon={faThumbsUp} />
          </span>
          <p className='satisfaction-secured-transactions-card-text'>
            97% satisfaction
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <span className='satisfaction-secured-transactions-card-icon'>
            <FontAwesomeIcon icon={faComments} />
          </span>
          <p className='satisfaction-secured-transactions-card-text'>
            Discuss with designers
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <span className='satisfaction-secured-transactions-card-icon three-x'>
            <FontAwesomeIcon icon={faCoins} /> <span className='three-x'>3X</span>
          </span>
          <p className='satisfaction-secured-transactions-card-text'>
            Payments in 3 times
          </p>
        </div>
        <div className='satisfaction-secured-transactions-card'>
          <span className='satisfaction-secured-transactions-card-icon'>
            <FontAwesomeIcon icon={faLock} />
          </span>
          <p className='satisfaction-secured-transactions-card-text'>
            Secured transactions
          </p>
        </div>
      </div>
    </div>
  );
};

export default TheyTalkedAboutUs;
