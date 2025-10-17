import EventCard from "../../../components/common/EventCard/EventCard";
import Images from "../../../assets/images/index";
import styles from "./NewsCard.module.scss";

export default function EventsList() {
  return (
    <div className={styles.mainContainer}>
      <EventCard
        images={[Images.balsabha1, Images.balsabha2,Images.balsabha7, Images.balsabha8]} 
        heading="Bal Utsav"
        content={`શ્રી રઘુવીર વાડી, વડતાલ ધામને આંગણે યોજાયેલ "બાળ ઉત્સવ" માં ભગવાન સ્વામિનારાયણના આઠમાં વંશજ વડતાલ દેશ ગાદીના સનાતન આચાર્ય પરમ પૂજ્ય ધર્મ ધુરંધર ૧૦૦૮ આચાર્યશ્રી અજેન્દ્રપ્રસાદજી મહારાજશ્રી પધારીને તમામ નાના નાના ભૂલકાઓને આશીર્વાદ આપી તેમજ આધ્યાત્મિક અને સંસ્કાર યુક્ત જીવન માર્ગ દેખાડ્યો હતો.`}
        side="left"
      />

      <EventCard
        images={[Images.balsabha3,Images.balsabha6, Images.balsabha4,Images.balsabha5,]}
        heading="Bal Utsav"
        content={`ભગવાન શ્રી સ્વામિનારાયણ ના નવમાં વંશજ પરમ પૂજ્ય લાલજી મહારાજશ્રી નું "બાળ ઉત્સવ" માં આગમન. શ્રી રઘુવીર વાડી વડતાલ ધામને આંગણે આયોજિત બાળ ઉત્સવમાં ભગવાન શ્રી સ્વામિનારાયણના નવમાં વંશજો એવા  પરમ પૂજ્ય બંને લાલજી મહારાજ શ્રી પધારીને બાળકોને દિવ્ય લાભ આપ્યો હતો.`}
        side="right"
      />
    </div>
  );
}
